import { useEffect, useState } from "react";
import { JobData } from "../utils/interfaces/jobDetails";

 function useFilterJobList(
    jobListData:JobData[], 
    filterCategories: string[]
){
    const [filteredJobList, setFilteredJobList] = useState<JobData[]>([])

    useEffect(()=>{
        // absence of filters return original job list
        if( filterCategories.length <= 0) {
            setFilteredJobList(jobListData)
            return
        }

        setFilteredJobList(
            jobListData.filter(({role, languages, tools, level}) => {
                return filterCategories.find(category => category === role) || 
                filterCategories.find(category => category === level) || 
                tools.some(tool => filterCategories.includes(tool)) || 
                languages.some( language => filterCategories.includes(language))

            }))}, [filterCategories, jobListData])
            
    return filteredJobList

}

export default useFilterJobList