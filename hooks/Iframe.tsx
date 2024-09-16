import React, { useEffect, useState } from 'react';

const LinkedInProfile: React.FC = () => {
  const [htmlData, setHtmlData] = useState<string>('');  

  useEffect(() => {
    // Fetch the LinkedIn page content from the Next.js API route
    fetch('/api/fetchLinkedIn')
      .then((response) => response.text())  // Get the HTML content as a string
      .then((html) => {
        setHtmlData(html);  // Store the HTML data in the component state
      })
      .catch((error) => console.error('Error fetching LinkedIn page:', error));
  }, []);

  // Render the HTML inside an iframe or directly in the component
  return (
    <div>
      <h1>LinkedIn Profile</h1>
      {/* Option 1: Embed the HTML content in an iframe */}
      {htmlData && (
        <iframe
          title="LinkedIn Profile"
          src={`data:text/html;charset=utf-8,${encodeURIComponent(htmlData)}`}
          width="100%"
          height="600px"
        />
      )}

      {/* Option 2: Directly render the HTML content (be cautious with rendering raw HTML) */}
      {/* 
      <div dangerouslySetInnerHTML={{ __html: htmlData }} />
      */}
    </div>
  );
};

export default LinkedInProfile;
