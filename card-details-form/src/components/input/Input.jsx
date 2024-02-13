function Input({
    name,
    label="",
    placeholder="",
    value,
    error,
    maxLength,
    onChange = () => {}
}){
    return(
        <div>
            <label htmlFor="cardHolderName">
                {label}
            </label>
            <input 
                maxLength={maxLength}
                name={name}
                type="text" 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`${error ? 'border-2 border-[hsl(0,100%,66%)]' : ''}`}
            />
        </div>
    )
}

export default Input