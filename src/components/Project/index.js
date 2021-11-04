import { useState } from "react"
import { Link } from "react-router-dom"

const projectList = require("../../json/projects.json")

const Project = () => {
    
    const project = window.location.pathname.split("/")[2]
    // 

    const changeCurrentImageIndex = (index) => {
        if(currentImageIndex == index){
            setDirection("")
        }
        else{
            setDirection(currentImageIndex < index  ? "left" : "right");
        }
        setSlidingImage(!slidingImage)
        index = fixArrayIndex(index, imageSlider)
        
        setCurrentImageIndex(index)
        setCurrentImage(imageSlider[index])
        setPreviousImage(imageSlider[currentImageIndex])
    }
    



    // 

    const filtered = (project) => {
        return projectList.filter( (item) => {
            return item.title.toLowerCase() == project.replace(/-/g, ' ');
        })[0]
    }

    const filterById = (id) => {
        return projectList.filter( (item) => {
            return item.id == id;
        })[0]
    }

    const toLink = (from) => {
        return from.replace(/\s+/g, '-').toLowerCase()
    }

    

    const fixArrayIndex = (index, array) => {
        if(index < 0){
            return array.length - 1
        }
        else if(index >= array.length){
            return 0
        }
        return index
    }

    

    
    
    const currentProject = filtered(project)
    let imageSlider = currentProject.imageSlider
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [currentImage, setCurrentImage] = useState(imageSlider[currentImageIndex])
    const [previousImage, setPreviousImage] = useState(imageSlider[currentImageIndex])
    const  [slidingImage, setSlidingImage] = useState(true)
    const  [direction, setDirection] = useState("")

    console.log(imageSlider[currentImageIndex]);

    return (
        <div className="padding-y-40">
            <div className="padding-bottom-20">
                <p className="fs-40 ff-cubano text-center">{currentProject.title}</p>
            </div>
            <div className="padding-x-15">
                <div style={{
                    borderBottom: "2px dashed var(--bg-color-2)"
                }}></div>
            </div>
            <div className="padding-x-15">
                <div className="padding-x-32 padding-top-32 column gap-40">
                    <div>
                        <div className="width-50pc pos-relative" style={{
                            aspectRatio: "16/9",
                            overflow: "hidden"
                        }}>
                            <img className={`dovlsfet6t ${slidingImage ? "prev" : "current"} ${direction}`} style={{
                                width: "100%",
                                position: "absolute",
                                height: "100%",
                                objectFit: "cover",
                                objectCover: "50% 0%"
                            }} src={`../images/${slidingImage ?  previousImage : currentImage}`} alt="" />
                            <img className={`dovlsfet6t ${slidingImage ? "current" : "prev"}  ${direction}`} style={{
                                width: "100%",
                                position: "absolute",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "50% 0%"
                            }} src={`../images/${slidingImage ?  currentImage : previousImage }`} alt="" />
                        </div>
                        <div className="flex justify-center margin-top-10">
                            {imageSlider.map((image, index) => (
                                <div key={index} className={`align-center justify-center hlc7s160jv ${index === currentImageIndex ? "active" : ""}`} onClick={() => {
                                    changeCurrentImageIndex(index)
                                }} style={{
                                    height: "25px",
                                    aspectRatio: "1/1"
                                }}>
                                    <div style={{
                                        
                                    }}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <a href={currentProject.link} target="_blank" className="gpa30x3z65 ut7pmfjxxd">
                            <p>Visit</p>
                        </a>
                        <div className="gpa30x3z65 ut7pmfjxxd purple">
                            <p>Code</p>
                        </div>
                    </div>
                    <div>
                        <p className="ff-cubano fs-32 padding-bottom-10">About This project</p>
                        <div style={{
                            borderBottom: "2px dashed var(--bg-color-2)"
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
                            borderBottom: "2px dashed var(--bg-color-2)"
                        }}></div>
                        <ul className="padding-top-10 column">
                            {currentProject.tags.map((tag, index) => (
                                <li key={index} className="row inline-flex align-center">
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
