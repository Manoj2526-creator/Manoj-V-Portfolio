import { jsPDF } from 'jspdf';
// We'll use the uploaded image URL directly

export const downloadResumeAsPDF = async () => {
  try {
    // Create a new PDF document
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'a4'
    });

    // Load the resume image
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    return new Promise<void>((resolve, reject) => {
      img.onload = () => {
        try {
          // Get PDF dimensions
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          
          // Calculate image dimensions to fit the PDF page
          const imgWidth = img.width;
          const imgHeight = img.height;
          const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
          
          const finalWidth = imgWidth * ratio;
          const finalHeight = imgHeight * ratio;
          
          // Center the image on the page
          const x = (pdfWidth - finalWidth) / 2;
          const y = (pdfHeight - finalHeight) / 2;
          
          // Add the image to PDF
          pdf.addImage(img, 'JPEG', x, y, finalWidth, finalHeight);
          
          // Download the PDF
          pdf.save('Manoj_V_Resume.pdf');
          resolve();
        } catch (error) {
          console.error('Error creating PDF:', error);
          reject(error);
        }
      };
      
      img.onerror = () => {
        console.error('Error loading resume image');
        reject(new Error('Failed to load resume image'));
      };
      
      // Load the image from the uploaded file
      img.src = '/lovable-uploads/05bc3781-f3e8-42bd-9483-982808dbb068.png';
    });
  } catch (error) {
    console.error('Error downloading resume:', error);
    throw error;
  }
};