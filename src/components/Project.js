import { Link } from "react-router-dom"

const Project = ({project}) => {
    const projectLink = project.title.replace(/\s+/g, '-').toLowerCase()
    return (
        <Link to={`/portfolio/${projectLink}`}
        key={project.id}
        className="ut7pmfjxxd iehygbnwgs column space-between padding-all-15 border-radius-6"
        style={{
            backgroundColor: "var(--bg-color-4)",
        }}>
            <div>
                <div style={{
                    aspectRatio: "16/9",
                    overflow: "hidden",
                }}>
                    <img style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "50% 0%"
                    }} src={`images/${project.images.main}`} alt="" />
                </div>
                <div className="text-center margin-top-15">
                    <div>
                        <h2 className="ff-cubano fs-26" style={{
                            color: "var(--text-color-2)"
                        }}>{project.title}</h2>
                        <p>{project.desc}</p>
                    </div>
                </div>
            </div>
            <a href={project.link} className="solid-btn margin-y-20 ut7pmfjxxd" target="_blank" style={{
                display: "flex"
            }}>
                <p>
                    Visit
                </p>
            </a>
        </Link>
    )
}

export default Project

