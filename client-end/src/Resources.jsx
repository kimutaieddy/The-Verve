import React, { useState, useEffect } from "react";
import './Resources.css';

function Resources() {
    const [pdfs, setPdfs] = useState([]); 
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        fetchPdfs();
    }, []);

    const fetchPdfs = async () => {
        try {
            const response = await fetch('http://your-drf-api-endpoint/pdfs/');
            const data = await response.json();
            setPdfs(data);
        } catch (error) {
            console.error('Error fetching PDFs:', error);
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch('http://your-drf-api-endpoint/upload/', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                fetchPdfs(); // Refresh the list of PDFs after upload
            } else {
                console.error('Error uploading file:', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
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
                    <input type="file" onChange={handleFileChange} />
                    <button onClick={handleFileUpload}>Upload</button>
                </div>
                <div className="card">
                    <h3>Available PDFs</h3>
                    <ul>
                        {pdfs.map((pdf) => (
                            <li key={pdf.id}>
                                <a href={pdf.url} target="_blank" rel="noopener noreferrer">{pdf.name}</a>
                            </li>
                        ))} 
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Resources;