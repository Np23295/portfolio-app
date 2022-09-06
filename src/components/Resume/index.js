import React from "react";
import resume from '../../assets/documents/resume.pdf'


const Resume = () => {
    return (<embed src={`${resume}#toolbar=1&navpanes=0&scrollbar=0`} width="100%" height="800px" />);
}

export default Resume;