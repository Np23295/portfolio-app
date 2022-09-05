import React from "react";


const Project = ({ project }) => {

    return (
        <div className="m-2 col-sm-3 card">
            <img className="card-img-top" src={project.imgPath} alt="project image" />
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <a href="#" className="card-link">Github link</a>
                <a href={project.applicationUrl} className="card-link">App link</a>
            </div>
        </div>
    );
}

export default Project;