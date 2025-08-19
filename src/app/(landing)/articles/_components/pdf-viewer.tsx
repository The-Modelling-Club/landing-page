"use client";
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useIsMobile } from "@/hooks/use-mobile";
import { Download, MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
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
  const [numPages, setNumPages] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [scale, setScale] = useState<number>(initialScale);

  console.log("isMobile?", isMobile ? MIN_SIZE : INITIAL_SIZE_DESKTOP);

  useEffect(() => {
    setScale(isMobile ? MIN_SIZE : INITIAL_SIZE_DESKTOP);
  }, [isMobile]);

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
    setScale(initialScale);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${url}?dl=tmc-research-paper-${Date.now()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (error) {
    return (
      <div className="flex flex-col items-center p-4">
        <div className="text-red-600 text-center">
          <p className="font-semibold">Error loading PDF</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      </div>
    );
  }

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
