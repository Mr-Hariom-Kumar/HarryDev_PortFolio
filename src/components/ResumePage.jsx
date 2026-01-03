import React from 'react';
import { Link } from 'react-router-dom';

const ResumePage = () => {
  const pdfUrl = "/resume.pdf";

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Hariom_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0E0E10]">
      {/* Glassy Header */}
      <div className="sticky top-0 z-10 backdrop-blur-lg bg-[#1a1a1d]/40 shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center gap-4 flex-wrap">
          <Link 
            to="/" 
            className="text-neutral-400 hover:text-white transition-colors text-sm whitespace-nowrap"
          >
            ← Back
          </Link>
          
          <h1 className="text-xl font-semibold text-white m-0">
            Resume
          </h1>
          
          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap shadow-lg"
          >
            Download
          </button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-[#1a1a1d] rounded-xl shadow-2xl overflow-hidden">
          <iframe
            src={pdfUrl}
            className="w-full h-screen min-h-[600px] border-none"
            title="Resume PDF"
          />
        </div>
        
        <div className="text-center mt-4 text-neutral-400 text-sm">
          Can't see the PDF? {' '}
          <button 
            onClick={handleDownload}
            className="text-indigo-400 hover:text-indigo-300 underline bg-transparent border-none cursor-pointer"
          >
            Download it here
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;