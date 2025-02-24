"use client";

import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PdfView({ pdfFilePath }: { pdfFilePath: string }) {
  return (
    <div>
      <Document file={pdfFilePath}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default PdfView;
