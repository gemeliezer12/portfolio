import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <div className="padding-x-15 padding-y-80">
            <div className="padding-x-32 column gap-32">
                <p className="fs-40 ff-cubano" style={{
                    color: "var(--text-color-2)"
                }}>Get in touch</p>
                <p className="fs-20">
                    If you wanna get in touch or talk. Feel free to say hi or talk to me. Just click the contack link below and fill the form or  send an email to <a href="https://mail.google.com/mail/u/1/?fs=1&to=gemeliezerespiritu@gmail.com&tf=cm" target="_blank" style={{
                        color: "var(--blue)"
                    }}>
                        gemeliezerespiritu@gmail.com
                    </a>
                </p>
                <div className="flex-wrap gap-15">
                    <Link to="/contact" className="gpa30x3z65 ut7pmfjxxd orange">
                        <p>
                            Conact
                        </p>
                    </Link>
                    <a href="resume.pdf" target="_blank" className="gpa30x3z65 ut7pmfjxxd">
                        <p>
                            Resume
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
