import { removeIcon } from "../../utils/icons"

type FilterProp = {
    categories: string[],
    onRemoveCategory: (category: string) => void,
    reset: () => void
}


function Filter({
    categories, 
    onRemoveCategory, 
    reset 
}: FilterProp){
    return(
        <div className="p-4 shadow grid grid-cols-[5fr_1fr] bg-white rounded absolute top-0 transform -translate-y-1/2 w-[calc(100%_-_2.5rem)]">
            <div className="flex flex-wrap gap-4">
                { categories?.map( category => {
                    return(
                        <div key={category} className="rounded bg-light-cyan w-fit">
                            <span className="m-2 font-bold text-desaturated-cyan">{category}</span>
                            <button 
                                onClick={() => onRemoveCategory(category)}
                                className="w-7 h-7 bg-desaturated-cyan p-2 rounded-e hover:bg-very-dark-cyan">
                                <img src={removeIcon} alt="remove icon" loading="lazy" className="w-full h-full" />
                            </button>
                        </div>
                    )
                })}
            </div>
            <button
                onClick={reset}
                className="font-bold text-dark-cyan hover:underline hover:text-desaturated-cyan"
            >
                Clear
            </button>
        </div>
    )
}

export default Filter