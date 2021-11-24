import { useState } from "react"
import { Link } from "react-router-dom"

import ImageSlider from "../ImageSlider"

const projectList = require("../../json/projects.json")

const Project = () => {
    
    const project = window.location.pathname.split("/")[2]

    const filtered = (project) => {
        return projectList.filter( (item) => {
            return item.title.toLowerCase() == project.replace(/-/g, ' ');
        })[0]
    }

    // const toLink = (from) => {
    //     return from.replace(/\s+/g, '-').toLowerCase()
    // }
    

    
    
    const currentProject = filtered(project)
    let imageSlider = currentProject.imageSlider

    return (
        <div className="padding-y-40">
            <div className="padding-bottom-20">
                <p className="fs-40 ff-cubano text-center">{currentProject.title}</p>
            </div>
            <div className="padding-x-15">
                <div style={{
                    borderBottom: "2px dashed var(--bg-color-4)"
                }}></div>
            </div>
            <div className="padding-x-15 padding-top-40">
                <div className="padding-x-32">
                    <ImageSlider images={imageSlider}/>
                </div>
            </div>
            <div className="padding-x-15">
                <div className="padding-x-32 padding-top-32 column gap-40">
                    <div className="flex gap-10">
                        {currentProject.link ?
                        <a href={currentProject.link} target="_blank" className="solid-btn ut7pmfjxxd">
                            <p>Visit</p>
                        </a>
                        :
                        ""
                        }
                        {currentProject.code ?
                        <a href={currentProject.code} target="_blank" className="solid-btn ut7pmfjxxd purple">
                            <p>Code</p>
                        </a>
                        :
                        ""
                        }
                    </div>
                    <div>
                        <p className="ff-cubano fs-32 padding-bottom-10">About This project</p>
                        <div style={{
                            borderBottom: "2px dashed var(--bg-color-4)"
                        }}></div>
                        <p className="padding-top-10">
                            {currentProject.content.map((content) => (
                                content
                            ))}
                        </p>
                    </div>
                    <div>
                        <p className="ff-cubano fs-32 padding-bottom-10">Tech Stack</p>
                        <div style={{
                            borderBottom: "2px dashed var(--bg-color-4)"
                        }}></div>
                        <ul className="padding-top-10 column">
                            {currentProject.tags.map((tag, index) => (
                                <li key={index} className="row inline-flex align-center gap-10">
                                    <div className="margin-x-10" style={{
                                        backgroundColor: "var(--text-color-1)",
                                        height: "4px",
                                        width: "4px",
                                        borderRadius: "20px"
                                    }}></div>
                                    <p>
                                        {tag}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
