# Document Processing Platform - Frontend Demo

This project is a simple frontend proof-of-concept (POC) for a document processing platform. It demonstrates how a user might interact with a system that displays documents, their summaries, and generated insights.

All data and processing are mocked directly in the JavaScript for demonstration purposes.

## Features

*   **Mock Document Display**: View predefined sample documents.
*   **Mock Summaries**: See pre-generated summaries for each document.
*   **Mock Insights**: View pre-generated insights and "what's next" action items for each document.
*   Responsive layout for different screen sizes.

## Files

*   `index.html`: The main HTML file that structures the web page.
*   `style.css`: Contains the CSS rules for styling the page.
*   `script.js`: Contains the JavaScript logic, including:
    *   Mock document data (content, summary, insights).
    *   Functions to dynamically load and display this data.
    *   Creation of document selection buttons.

## How to Use

1.  **Clone or download the repository/files.**
    *   Ensure you have `index.html`, `style.css`, and `script.js` in the same directory.
2.  **Open `index.html` in a web browser.**
    *   Navigate to the directory where you saved the files.
    *   Double-click on `index.html`, or right-click and choose "Open with" your preferred web browser (e.g., Chrome, Firefox, Edge, Safari).
3.  **Interact with the demo:**
    *   At the top of the page, under "Select a Document", you will see buttons for each mock document (e.g., "Project Proposal Q4", "Market Research Report - FY2023").
    *   Click on any of these buttons.
    *   The content of the selected document will appear in the "Document Content" section.
    *   The corresponding mock summary will appear in the "Summary" section.
    *   The corresponding mock insights and next steps will appear in the "Insights & Next Steps" section.
    *   Click on other document buttons to see their respective information.

No backend or actual document processing is involved. This is purely a frontend demonstration.
