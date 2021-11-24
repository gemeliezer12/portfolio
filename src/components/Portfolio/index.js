import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Project from "../Project";

let projects = require("../../json/projects.json")

const filterById = (id, object) => {
    return object.filter( (item) => {
        return item.id == id;
    })[0]
}

const sortObject = (toSort) => {
    let result = [];
    for(let i = 0; i < toSort.length; i++){
        result.push(filterById(i, toSort))
    }
    return result
}

projects = sortObject(projects)
const Portfolio = () => {
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
        </div>
    )
}

export default Portfolio

