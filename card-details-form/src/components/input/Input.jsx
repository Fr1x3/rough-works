function Input({
    label="",
    placeholder="",
}){
    return(
        <div>
            <label htmlFor="cardHolderName" className="font-semibold uppercase text-[hsl(278,68%,11%)]">
                {label}
            </label>
            <input 
                name="cardHolderName"
                type="text" 
                placeholder={placeholder}
                className="mt-1 placeholder-[hsl(270,3%,87%)] w-full rounded-lg border border-[hsl(270,3%,87%] py-1 px-2"
            />
        </div>
    )
}

export default Input