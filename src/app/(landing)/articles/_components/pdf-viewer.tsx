"use client";
import { useCallback, useEffect } from "react";
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

type PdfViewerProps = {
  url: string;
  is_downloadable?: boolean;
  className?: string;
};

export default function PdfViewer({
  url,
  is_downloadable = false,
  className = "",
}: Readonly<PdfViewerProps>) {
  const isMobile = useIsMobile();
  // Must be created at top level and unconditionally to satisfy React Hooks rules
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    if (isMobile && url) {
      window.location.href = url;
    }
  }, [isMobile, url]);
  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = `${url}?dl=tmc-research-paper-${Date.now()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [url]);

  return (
    <div className={`flex w-full flex-col ${className}`}>
      {/* {is_downloadable && (
        <div className="mb-3 flex w-full justify-end">
          <Button
            onClick={handleDownload}
            className="px-3 py-1 bg-green-100 hover:bg-green-200 text-green-700 rounded text-sm font-medium transition-colors"
          >
            <Download />
          </Button>
        </div>
      )} */}
      <div className="w-full overflow-hidden  h-[80vh] min-w-0">
        {isMobile ? (
          <div className="flex h-full w-full items-center justify-center text-sm text-gray-600">
            <a href={url} className="underline">
              Open PDF
            </a>
          </div>
        ) : (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer
              fileUrl={url}
              defaultScale={SpecialZoomLevel.PageWidth}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        )}
      </div>
    </div>
  );
}
