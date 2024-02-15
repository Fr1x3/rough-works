function Input({
    name,
    placeholder,
    maxLength,
    handleChange,
    value,
    errors,
}){
    return (
        <div className="flex flex-col">
            <label 
                htmlFor={name} 
                className={`uppercase text-smokey-grey font-['Poppins-Bold'] ${errors ? 'text-light-red' : ''}`}
            >
                {name}
            </label>
            <input 
                name={name} 
                placeholder={placeholder} 
                maxLength={maxLength}
                value={value <=0 ? '' : value }
                type="text"
                onChange={handleChange}
                className={`border border-light-grey rounded px-2 py-1 text-2xl font-['Poppins-Bold'] focus:outline focus:outline-purple hover:outline hover:outline-purple hover:cursor-pointer ${errors ? 'focus:outline-light-red outline outline-light-red hover:outline-light-red' : ''}`}
            />
            { errors && <span className="text-xs text-light-red mt-1">{errors}</span>}
        </div>

    )
}

export default Input