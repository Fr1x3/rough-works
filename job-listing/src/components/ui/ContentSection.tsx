import { useState } from "react"
import Filter from "./Filter"
import useFetchJobList from "../../hooks/useFetchJobList"
import JobCard from "./JobCard"


function ContentSection(){
    const [filterCategories, setFilterCategories] = useState< string[]>(['Frontend']) 

    const { jobListData, isLoading } = useFetchJobList()
    
    function handleRemoveFilterCategory(categoryToRemove: string){
        setFilterCategories( prevCategories => {
            return prevCategories ? 
                    prevCategories.filter(category => 
                        categoryToRemove !== category
                    ) : []
        })
    }

    function handleAddFilterCategory(category: string){
        console.log(category)
        setFilterCategories([...filterCategories, category])
        console.log(filterCategories)
    }

    if(isLoading){
        <div>Loading...</div>
    }

    return(
        <section role="content-section" className=" bg-cyan px-5 py-9 relative min-h-[calc(100vh_-_150px)]"> 
            { filterCategories.length > 0 &&
                <Filter 
                    categories={filterCategories} 
                    onRemoveCategory={handleRemoveFilterCategory}
                    reset={() =>setFilterCategories([])}
                />
            }
            <div className={`flex flex-col gap-10 lg:gap-6 mt-10 lg:items-center`}>
                {
                    jobListData && jobListData.map( jobData => {
                        return <JobCard jobDetails={jobData} key={jobData.id} selectFilterCategories={handleAddFilterCategory}/>
                    })
                }
            </div>
        </section>
    )
}

export default ContentSection