import { useState } from "react"
import Filter from "./Filter"


function ContentSection(){
    const [filterCategories, setFilterCategories] = useState< string[]>([]) 

    function handleRemoveFilterCategory(categoryToRemove: string){
        setFilterCategories( prevCategories => {
            return prevCategories ? 
                    prevCategories.filter(category => 
                        categoryToRemove !== category
                    ) : []
        })
    }

    return(
        <section role="content-section" className=" bg-cyan px-5 py-9 relative h-[calc(100vh_-_150px)]"> 
            { filterCategories.length > 0 &&
                <Filter 
                    categories={filterCategories} 
                    onRemoveCategory={handleRemoveFilterCategory}
                    reset={() =>setFilterCategories([])}
                />
            }
        </section>
    )
}

export default ContentSection