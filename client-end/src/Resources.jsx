/**
 * A React component that manages and displays a list of PDF resources.
 * 
 * This component allows users to:
 * - Fetch and display a list of available PDFs from an API.
 * - Upload new PDF files by providing a file and a name.
 * - View uploaded PDFs with links to access them.
 * 
 * The component uses `useState` to manage state for PDFs, selected file, and PDF name,
 * and `useEffect` to fetch the list of PDFs on initial render.
 */
import React, { useState, useEffect } from "react";
import './Resources.css';

function Resources() {
    const [pdfs, setPdfs] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [pdfName, setPdfName] = useState("");

    useEffect(() => {
        fetchPdfs();
    }, []);

    // Fetch PDFs from the API
    const fetchPdfs = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/pdfs/');
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setPdfs(data);
        } catch (error) {
            console.error('Error fetching PDFs:', error);
        }
    };

    // Handle file selection
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // Handle name input change
    const handleNameChange = (event) => {
        setPdfName(event.target.value);
    };

    // Handle file upload
    const handleFileUpload = async () => {
        if (!selectedFile || !pdfName) {
            alert("Please provide a file and a name.");
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile); // Match backend field name
        formData.append('name', pdfName);     // Match backend field name

        try {
            const response = await fetch('http://localhost:8000/api/pdfs/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('File uploaded successfully.');
                fetchPdfs(); // Refresh the list of PDFs
                setPdfName(""); // Reset the name input
                setSelectedFile(null); // Reset the file input
            } else {
                const errorData = await response.json();
                console.error('Error uploading file:', errorData);
                alert(`Upload failed: ${errorData.detail || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('An error occurred during file upload. Please try again.');
        }
    };

    return (
        <section className="section">  
            <div className="container">
                <div className="card">
                    <h3>Access Resources</h3>
                    <p>CIS Kenya allows you to access tons of publications and reports on matters of Credit Information Sharing.</p>
                </div>
                <div className="card">
                    <h3>Upload PDF</h3>
                    <input
                        type="text"
                        placeholder="Enter PDF name"
                        value={pdfName}
                        onChange={handleNameChange}
                    />
                    <input
                        type="file"
                        accept="application/pdf" // Restrict to PDFs
                        onChange={handleFileChange}
                    />
                    <button onClick={handleFileUpload}>Upload</button>
                </div>
                <div className="card">
                    <h3>Available PDFs</h3>
                    <ul>
                        {pdfs.map((pdf) => (
                            <li key={pdf.id}>
                                <a
                                    href={pdf.file} // Use the file URL from the backend
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {pdf.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Resources;
