import React from "react";
import './projects.css';

const Resume = () => {
    return (
        <div className="mainbox">
            <embed src="Luca_Obitz_Resume.pdf" width="800" height="600" 
            type="application/pdf"/>
            <a href="Luca_Obitz_Resume.pdf">Click To Download Resume</a>
        </div>
    );
};
 
export default Resume;