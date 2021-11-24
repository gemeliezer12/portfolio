import { useState } from "react"
import { Link, useHistory } from "react-router-dom"

import Input from "../Input"
import TextArea from "../TextArea"

import emailjs from "emailjs-com"

const Contact = () => {
    const history = new useHistory()
    const [name, setName] = useState({name: "name", type: "text", value: "", isValid: undefined, isRequired: true, label: "Name"})
    const [email, setEmail] = useState({name: "email", type: "email", value: "", isValid: undefined, isRequired: true, label: "Email"})
    const [message, setMessage] = useState({name: "message", type: "text", value: "", isValid: undefined, isRequired: true, label: "Message"})

    

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_ykt4iwo', 'template_9inqpz5', e.target, 'user_qtHLBg5UgUqF5lohFFNIh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setName({...name, value: "", isValid: false})
        setEmail({...email, value: "", isValid: false})
        setMessage({...message, value: "", isValid: false})
        e.target.reset()
    }
    
    const onChange = (e) => {
        e = e.target
        switch(e.name){
            case "name":
                setName({...name, value: e.value, isValid: e.value.length > 2})
                break
            case "email":
                setEmail({...email, value: e.value, isValid: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.value)})
                break
            case "message":
                setMessage({...message, value: e.value, isValid: e.value.length > 9})
                break
        }
    }

    return (
        <>
            <div className="padding-y-40 padding-x-15" style={{
                width: "100%",
                maxWidth: "600px",
                margin: "auto",
                backgroundColor: "var(--bg-color-2)"
            }}>
                <div className="padding-x-32">
                    <div>
                        <p className="fs-40 ff-cubano">Get in touch</p>
                    </div>
                    <form className="column flex gap-10 margin-top-20" onSubmit={(e) => sendEmail(e)} onChange={(e) => onChange(e)} autoComplete="off">
                        <Input input={name}/>
                        <Input input={email}/>          
                        <TextArea textarea={message}/>          
                        <div>
                            {name.isValid && email.isValid && message.isValid ? (
                                <button className="solid-btn ut7pmfjxxd" style={{
                                    color: "blue"
                                }}>
                                    <p>
                                        Send
                                    </p>
                                </button>
                            ):(
                                <button disabled className="solid-btn" style={{
                                    backgroundColor: "rgba(145, 150, 155)",
                                    borderColor: "rgba(145, 150, 155)"
                                }}>
                                    <p>
                                        Send
                                    </p>
                                </button>
                            )}
                        </div>
                        <div className="text-center">
                            <div onClick={() => history.goBack()} to="/" className="solid-btn ut7pmfjxxd" style={{
                                backgroundColor: "var(--red)",
                                borderColor: "var(--red)",
                                padding: "10px",
                                paddingRight: "15px",
                                paddingLeft: "15px"
                            }}>
                                <p className="fs-10">
                                    Cancel
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="padding-x-15">
                <div style={{
                    borderBottom: "2px dashed var(--bg-color-4)"
                }}></div>
            </div>
            </>
    )
}

export default Contact
