"use client";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Download, MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const MIN_SIZE = 0.5;
const INITIAL_SIZE_DESKTOP = 1.2;
const INCREMENTAL_SIZE = 0.2;

type PdfViewerProps = {
  url: string;
  is_downloadable?: boolean;
  width?: number;
  className?: string;
  initialScale?: number;
};

export default function PdfViewer({
  url,
  width = 800,
  is_downloadable = false,
  className = "",
  initialScale = INITIAL_SIZE_DESKTOP,
}: Readonly<PdfViewerProps>) {
  const isMobile = useIsMobile();
  const [PdfComponents, setPdfComponents] = useState<any>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [scale, setScale] = useState<number>(initialScale);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const loadPdfComponents = async () => {
      try {
        // Load PDF.js and react-pdf sequentially to avoid race conditions
        const reactPdf = await import("react-pdf");
        const { Document, Page, pdfjs } = reactPdf;

        // Configure worker after everything is loaded
        pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

        setPdfComponents({ Document, Page });
        setLoading(false);
      } catch (err) {
        console.error("Failed to load PDF components:", err);
        setError("Failed to load PDF viewer");
        setLoading(false);
      }
    };

    loadPdfComponents();
  }, [isClient]);

  useEffect(() => {
    if (!loading && isClient) {
      setScale(isMobile ? MIN_SIZE : INITIAL_SIZE_DESKTOP);
    }
  }, [isMobile, loading, isClient]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setError("");
  };

  const onDocumentLoadError = (error: Error) => {
    setError(`Failed to load PDF: ${error.message}`);
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + INCREMENTAL_SIZE, 1.4));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - INCREMENTAL_SIZE, MIN_SIZE));
  };

  const resetZoom = () => {
    setScale(isMobile ? MIN_SIZE : INITIAL_SIZE_DESKTOP);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${url}?dl=tmc-research-paper-${Date.now()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isClient || loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Loading PDF viewer...</span>
      </div>
    );
  }

  if (error || !PdfComponents) {
    return (
      <div className="flex flex-col items-center p-4">
        <div className="text-red-600 text-center">
          <p className="font-semibold">Error loading PDF</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      </div>
    );
  }

  const { Document, Page } = PdfComponents;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="mb-4 self-stretch flex items-center justify-between w-full ">
        {numPages > 0 && (
          <div className="mb-4 self-stretch flex items-center justify-between w-full">
            <div className="text-base text-gray-600">
              Total pages: {numPages}
            </div>

            <div className="flex items-center gap-2">
              <Button
                onClick={handleZoomOut}
                className="px-3 py-1  rounded text-sm font-medium transition-colors"
                disabled={scale <= 0.5}
              >
                <MinusIcon />
              </Button>
              <span className="text-sm text-gray-600 min-w-[50px] text-center">
                {Math.round(scale * 100)}%
              </span>

              <Button
                onClick={handleZoomIn}
                className="px-3 py-1  rounded text-sm font-medium transition-colors"
                disabled={scale >= 3.0}
              >
                <PlusIcon />
              </Button>
              <Button
                variant={"outline"}
                onClick={resetZoom}
                className="px-3 py-1 bg-white hover:bg-gray-100  text-gray-700 rounded text-sm font-medium transition-colors "
              >
                Reset
              </Button>
              {is_downloadable && (
                <Button
                  onClick={handleDownload}
                  className="px-3 py-1 bg-green-100 hover:bg-green-200 text-green-700 rounded text-sm font-medium transition-colors mr-2"
                >
                  <Download />
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">Loading PDF...</span>
          </div>
        }
        error={
          <div className="text-red-600 text-center p-4">
            <p>Failed to load PDF document.</p>
          </div>
        }
      >
        {Array.from(new Array(numPages), (_, index) => (
          <div
            key={`page_${index + 1}`}
            className="mb-6 outline outline-1 outline-gray-200 bg-white rounded"
          >
            <Page
              pageNumber={index + 1}
              width={width}
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="rounded overflow-hidden"
            />
          </div>
        ))}
      </Document>
    </div>
  );
}
