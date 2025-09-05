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

    // Resume image URLs
    const resumePages = [
      '/lovable-uploads/cd1d7551-7faa-45b7-89a4-05da7b2aedb7.png', // Page 1
      '/lovable-uploads/dec68af9-e1b9-4b97-bb48-162c50612f72.png'  // Page 2
    ];

    // Function to load and add an image to PDF
    const loadAndAddImage = (imageSrc: string, pageIndex: number): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = () => {
          try {
            // Add new page for subsequent images
            if (pageIndex > 0) {
              pdf.addPage();
            }
            
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
            pdf.addImage(img, 'PNG', x, y, finalWidth, finalHeight);
            resolve();
          } catch (error) {
            console.error('Error adding image to PDF:', error);
            reject(error);
          }
        };
        
        img.onerror = () => {
          console.error('Error loading resume image:', imageSrc);
          reject(new Error(`Failed to load resume image: ${imageSrc}`));
        };
        
        img.src = imageSrc;
      });
    };

    // Load and add all resume pages sequentially
    for (let i = 0; i < resumePages.length; i++) {
      await loadAndAddImage(resumePages[i], i);
    }

    // Download the PDF
    pdf.save('Manoj_V_Resume.pdf');
  } catch (error) {
    console.error('Error downloading resume:', error);
    throw error;
  }
};