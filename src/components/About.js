const About = () => {
    return (
        <div className="padding-x-15 padding-y-32">
            <div className="text-center">
                <h1 className="ff-cubano fs-32" style={{
                    color: "var(--text-color-2)"
                }}>About Me</h1>
                <p className="fs-20">I am a self-taught and driven web developer. I'm currently working as a freelancer. I put my effort into making visually pleasing websites. And to write clean and reusable code.</p>
            </div>
            <div className="margin-top-32 gap-15 vbk3n7jid7">
                <div className="text-center padding-all-15 border-radius-6 iehygbnwgs" style={{
                    backgroundColor: "var(--bg-color-2)",
                }}>
                    <h2 className="ff-cubano fs-26" style={{
                        color: "var(--text-color-2)"
                    }}>Languages</h2>
                    <div className="flex-wrap justify-center gap-10 margin-top-10">
                        <p className="kvcdz3lpy3">HTML</p>
                        <p className="kvcdz3lpy3">CSS</p>
                        <p className="kvcdz3lpy3">JavaScript</p>
                        <p className="kvcdz3lpy3">PHP</p>
                        <p className="kvcdz3lpy3">MySQL</p>
                    </div>
                </div>
                <div className="text-center padding-all-15 border-radius-6 iehygbnwgs" style={{
                    backgroundColor: "var(--bg-color-2)",
                }}>
                    <h2 className="ff-cubano fs-26" style={{
                        color: "var(--text-color-2)"
                    }}>Frameworks</h2>
                    <div className="flex-wrap justify-center gap-10 margin-top-10">
                        <p className="kvcdz3lpy3">React JS</p>
                        <p className="kvcdz3lpy3">Tailwind</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
