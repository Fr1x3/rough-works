function Input({
    name,
    placeholder,
    maxLength,
}){
    return (
        <div className="flex flex-col">
            <label 
                htmlFor={name} 
                className="uppercase text-smokey-grey font-['Poppins-Bold']"
            >
                {name}
            </label>
            <input 
                name={name} 
                placeholder={placeholder} 
                maxLength={maxLength}
                type="text"
                className="border border-light-grey rounded px-2 py-1 text-2xl font-['Poppins-Bold']"
            />
        </div>

    )
}

export default Input