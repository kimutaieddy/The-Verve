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
            const data =awit response.json();
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

        } catch (error) {
            
        }
        
    }

    
}
