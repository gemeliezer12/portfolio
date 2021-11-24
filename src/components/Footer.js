const Footer = () => {
    return (
        <div className="padding-x-15 padding-y-80 justify-center">
            <div className="column align-center">
                <div className="fs-16 flex-wrap align-center padding-y-10 justify-center text-center">
                    <span>Created with React</span>
                    <i className="fab fa-react padding-x-4 fs-20" style={{
                        color: "#2196f3"
                    }}></i>
                    <span>by <a href="https://github.com/gemeliezer12" style={{
                        color: "var(--blue)"
                    }}>Gem Eliezer
                    </a> </span>
                    <i className="fab fa-github padding-x-4 fs-20" style={{
                        color: "var(--text-color-2)"
                    }}></i>
                </div>
                <div style={{
                    width: "100%",
                    borderBottom: "2px dashed var(--bg-color-4)"
                }}></div>
            </div>
        </div>
    )
}

export default Footer
