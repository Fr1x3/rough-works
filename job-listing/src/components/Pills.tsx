type PillProp= {
    title: string,
    handleSelected: (category: string) => void
}

function Pills({title, handleSelected }: PillProp){
    return(
        <p onClick={() => handleSelected(title)} className=" cursor-pointer bg-light-cyan w-fit h-fit rounded-sm px-2 py-1">
            {title}
        </p>
    )
}

export default Pills