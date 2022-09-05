import React from "react";
import Project from "./Project";
import dummyImg from '../../assets/images/projectImg.png'

const Portfolio = () => {
    const basePath = '../../assets/images/';
    let projects = [
        {
            title: 'Test 1',
            githubUrl: '',
            applicationUrl: '',
            imgPath: dummyImg
        },
        {
            title: 'Test2',
            githubUrl: '',
            applicationUrl: '',
            imgPath: dummyImg
        },
        {
            title: 'Test3',
            githubUrl: '',
            applicationUrl: '',
            imgPath: dummyImg
        },
        {
            title: 'Test4',
            githubUrl: '',
            applicationUrl: '',
            imgPath: dummyImg
        },
        {
            title: 'Test5',
            githubUrl: '',
            applicationUrl: '',
            imgPath: dummyImg
        },
        {
            title: 'Test6',
            githubUrl: '',
            applicationUrl: '',
            imgPath: dummyImg
        }
    ];

    return (
        <div>
            <div>
                <p className="alert alert-warning">Currently due to confidential information I cannot provide my project details.
                    <br/> 
                    Just for the demonstration purpose few test data has been loaded
                </p>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {
                    projects.map((project, index) => {
                        return (<Project key={project.title} project={project}></Project>)
                    })
                }
            </div>
        </div>
    );
}

export default Portfolio;