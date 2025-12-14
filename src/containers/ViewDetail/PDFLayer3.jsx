import React from "react";
import pdf_icon from "../../assets/images/icons/pdf.png";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Loader from "../../components/Loader/Loader";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFLayer3({ value, getDataUrl }) {
  const [pdfUrl, setPdfUrl] = useState();
  const [showPdf, setShowPdf] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    // console.log(numPages, "numPage")
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  const handlePdf = (item) => {
    getDataUrl(item)
    setPdfUrl(item.file_url);
    setShowPdf(true)
  }

  function nextPage() {
    changePage(1);
  }
  return (
    <>
      <div className=" pg-tabs-description">
        <div className="tabs-deschovr d-flex align-items-center rounded shadow">
          <div
            className="pg-sb-topic d-flex align-items-center "
            style={{ width: "97%" }}
          >
            <span className="videoimage">
              <img
                src={value.image ? value.image : pdf_icon}
                height={"50px"}
              />

              {/* <i className="fa fa-file-text" aria-hidden="true"></i> */}
            </span>
            <h3>{value.title}</h3>
          </div>
          <div className="pg-sb-topic pe-2">
            <div className="btnsalltbba text-center">
              <button onClick={() => handlePdf(value)} className="btn"><i className="fa fa-book-reader read-icon" aria-hidden="true"></i>Read</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}













{/* <Document
         file={pdfUrl}
         onLoadError={console.error}
         onLoadSuccess={onDocumentLoadSuccess}
         // pageNumber={1}
       >
         <Page pageNumber={pageNumber}/>
       </Document> */}


{/* <div className="flex text-center"> 
   <p>
     Page {pageNumber} of {numPages}
   </p>
   <div className="tabs-button">
                 <button
                   className="tabsprevious"
                   onClick={previousPage}
                   disabled={pageNumber == 1}
                 >
                   <i className="fa fa-angle-left chaptr-btn" aria-hidden="true"></i>
                 </button>
                 <button
                   className="tabsnext"
                   onClick={nextPage}
                   disabled={
                     numPages == pageNumber
                   }
                 >
                   <i className="fa fa-angle-right chaptr-btn" aria-hidden="true"></i>
                 </button>
               </div>
   </div> */}
