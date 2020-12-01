import React, { useState } from 'react';
import Layout from '../../components/global/Layout';
import { Document } from 'react-pdf';

const title = 'Resume';
const resumeLink = "https://drive.google.com/file/d/1Mlz0-qz1H8olaJHuRJoG1eYiIaFCYjp-/view?usp=sharing"

export default function Resume(){     
      const [numPages, setNumPages] = useState(null);
      const [pageNumber, setPageNumber] = useState(1);
     
      function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
     
      return (
        <div>
          <Document
            file="/resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
        </div>
      );
    }