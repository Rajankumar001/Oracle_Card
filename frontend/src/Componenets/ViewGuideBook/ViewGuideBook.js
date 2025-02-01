import React from 'react';
import './ViewGuideBook.css'
import pdfUrl from '../../assets/guideBook.pdf'
const ViewGuideBook = () => {

  return (
    <div className='GuideBook-container'>
    <iframe src={pdfUrl} width="100%" height="100%" title="PDF Viewer" />
  </div>

  )
}

export default ViewGuideBook
