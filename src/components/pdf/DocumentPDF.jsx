import React from 'react'
import pdf from '../../img/test.pdf'


const DocumentPDF = () => {
    const pdfDocument = "http://localhost:3000/lista de precios"
    return (
        <div>
            <embed src={pdf}
                type="application/pdf"
                style={{ width: '100vw', height: '100vh' }}
            />
        </div>

    )
}

export default DocumentPDF