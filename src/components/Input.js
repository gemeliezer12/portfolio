const Input = ({input}) => {
    return (
        <div className={`input-label ${input.value !== "" && "focus-within"}`}>
            {input.isRequired ? 
            <div>
                <label htmlFor={input.name} className="label">
                    {input.label}
                    <span style={{
                        color: "var(--red)"
                    }}>*</span>
                </label>
                <input required name={input.name} type={input.type} />
            </div>
            :
            <div>
                <label htmlFor={input.name} className="label">
                    {input.label}
                </label>
                <input name={input.name} type={input.type} />
            </div>
            }
        </div>
    )
}

export default Input
