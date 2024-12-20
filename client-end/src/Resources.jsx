import  React, {useState,useEffect } from "react";
import  './Resources.css';

function Resources() {
    const [pdf,setPdfs] =useState ([]);
    const [selectedpdf,setSelectedFile] =useState(null);

    useEffect ( () => {
        fetchPdfs();
    } ,[]

    );

    const fetchPdfs =async () => {
        try {
            const response =await fetch ('http://your-drf-api-endpoint/pdfs/');
            const data =await response.json();
            setPdfs(data);
        }
        catch (error) {
            console.log('Error fetching PDFs:',error)
        }
    } ;

    const handleFileChange =(event)  => {
        setSelectedFile(event.target.files[0]) ;

    };

    const handleFileUpload =async () => {
        const formData =new FormData();
        formData.append('file',selectedFile);

        try {
            const response =await fetch ('http://your-drf-api-endpoint/upload/',{
            method: 'post',
            body : formData,
            });
            if (response.ok) {
                fetchPdfs();
            }
            else {
                console.error('Error uploading files:',response.statusText);    
            }
        }
        catch(error) {
            console.error('Error uploading files:',error);
            
        }
        };

        return (
            <section className="section">
                <div className="container">
                    <div className="Card">
                        <h3>Upload pdfs</h3>
                        <input type="file" onChange={handleFileChange} />
                        <button omclick={handleFileUpload}>upload</button>

                    </div>
                    <div className='card'>
                    <h3>Available pdfs</h3>
                    <ul>
                        {pdf.map((pdf)
                        <li key={pdf.id}>
                            <a href={pdf.url} target ="_blank" rel="nonoperner npreferrer">{pdf.name</a>

                        </li>)
                        
                        }
                    </ul>
                    </div>

                </div>
            </section>
        )

        
    }

    export default Resources ;

    
