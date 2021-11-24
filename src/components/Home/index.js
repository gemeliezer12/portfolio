import { Link } from "react-router-dom"

import Projects from "../Projects"
import About from "../About"
import Contact from "../Contact"

const Home = () => {
    return (
        <>
            <div className="padding-x-20 padding-y-120">
                <div className="column gap-40 padding-x-32">
                    <h1 className="ff-cubano fs-32" style={{
                        color: "var(--text-color-2)"
                    }}>Hello my name is Gem Eliezer</h1>
                    <p className="fs-26 fw-500">I am a <span className="kvcdz3lpy3 fs-20" style={{
                        backgroundImage: "linear-gradient(to right, var(--orange), var(--red))"
                    }}>
                    softaware developer
                    </span> and <span style={{
                        color: "var(--text-color-2)"
                    }}>
                    welcome to my portfolio
                    </span>
                    </p>
                    <div className="flex-wrap gap-15">
                        <Link to="/contact" className="solid-btn orange ut7pmfjxxd">
                            <p>
                                Contact
                            </p>
                        </Link>
                        <a href="resume.pdf" target="_blank" className="solid-btn ut7pmfjxxd">
                            <p>
                                Resume
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="padding-x-15">
                <div style={{
                    borderBottom: "2px dashed var(--bg-color-2)"
                }}></div>
            </div>
            <About/>
            <div className="padding-x-15">
                <div style={{
                    borderBottom: "2px dashed var(--bg-color-2)"
                }}></div>
            </div>
            <Projects/>
            <div className="padding-x-15">
                <div style={{
                    borderBottom: "2px dashed var(--bg-color-2)"
                }}></div>
            </div>
            <Contact/>
            <div className="padding-x-15">
                <div style={{
                    borderBottom: "2px dashed var(--bg-color-2)"
                }}></div>
            </div>
        </>
    )
}

export default Home
