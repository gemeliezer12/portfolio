import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Project from "./Project";

const projectsJson = require("../json/projects.json")


const filterById = (id, object) => {
    return object.filter( (item) => {
        return item.id == id;
    })[0]
}
const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects([filterById(0, projectsJson), filterById(1, projectsJson)])
    }, [])

    return (
        <div className="padding-x-15 padding-y-32">
            <div className="text-center">
                <h1 className="ff-cubano fs-32" style={{
                    color: "var(--text-color-2)"
                }}>
                    Projects
                </h1>
                <p className="fs-20">Here are some of the projects I've done</p>
            </div>
            <div className="margin-top-32 q5ods5ckwm">
                {projects.map((project) => (
                    <Project key={project.id} project={project}/>
                ))}
            </div>
            <div className="flex justify-center">
                <Link to="/portfolio" className="gpa30x3z65 margin-y-20 ut7pmfjxxd text-center">See More</Link>
            </div>
        </div>
    )
}

export default Projects
