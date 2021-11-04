import { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"


const Nav = () => {
    const history = new useHistory()

    if(localStorage.getItem("lightMode") === null){
        localStorage.setItem("lightMode", false)
    }

    const [lightMode, setLightMode] = useState(localStorage.getItem("lightMode"))


    // When page load
    useEffect(() => {
        if(lightMode == "true"){
            document.body.classList.add("light")
        }
        else if(lightMode == "false"){
            document.body.classList.remove("light")
        }
    }, [])

    const toggleMode = () => {
        console.log(lightMode);
        if(lightMode == "true"){
            document.body.classList.remove("light")
            setLightMode("false")
            localStorage.setItem("lightMode", false)
        }
        else if(lightMode == "false"){
            document.body.classList.add("light")
            setLightMode("true")
            localStorage.setItem("lightMode", true)
        }
    }

    return (
        <>
            <nav className="f04poi7v7m" style={{
                position: "fixed",
                width: "100vw",
                height: "60px",
                backgroundColor: "var(--bg-color-2)",
                zIndex: "10"
            }}>
                <div className="padding-x-15 height-100pc space-between">
                    <div className="align-center height-100pc cursor-pointer flex gap-10">
                        <div onClick={() => history.goBack()}>
                            <img className="cursor-pointer" src="../../images/logo.png" style={{
                                height: "40px"
                            }}/>
                        </div>
                        <Link to="/">
                            <p className="fs-26 ff-attribute-mono fw-700 oz1iev26bz">cozyturtle.io</p>
                        </Link>
                    </div>
                    <div className="row height-100pc gap-10">
                        <Link to="/" className="z7z5jhi26x cursor-pointer">
                            <i className="fas fa-search fs-32"></i>
                            <label className="kvcdz3lpy3">Search</label>
                        </Link>
                        <div className="z7z5jhi26x cursor-pointer" onClick={toggleMode}>
                        {lightMode === "true" ? (
                            <i className="fas fa-moon fs-32"></i>
                        ):(
                            
                            <i className="fas fa-sun fs-32"></i>
                        )}
                        </div>
                    </div>
                </div>
            </nav>
            <div style={{
                height: "60px"
            }}></div>
        </>
    )
}

export default Nav
