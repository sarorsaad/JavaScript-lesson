const fs = require('fs');
const pdfjsLib = require('pdfjs-dist');

// Path to PDF file
const pdfPath = './kteb-science.pdf';

async function extractText() {
    try {
        // Read the PDF file
        const data = new Uint8Array(fs.readFileSync(pdfPath));
        
        // Load the PDF document
        const loadingTask = pdfjsLib.getDocument(data);
        const pdf = await loadingTask.promise;
        
        console.log(`Total pages: ${pdf.numPages}`);
        
        // Extract text from each page
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const text = textContent.items.map(item => item.str).join(' ');
            console.log(`\n--- Page ${i} ---\n`);
            console.log(text);
        }
    } catch (error) {
        console.error('Error reading PDF:', error);
    }
}

extractText();
