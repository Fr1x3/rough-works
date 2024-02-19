import { useEffect, useState } from "react";
import { JobData } from "../utils/interfaces/jobDetails";

function useFetchJobList(){
    const [jobListData, setJobListData ] = useState<JobData[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        fetch('src/data/data.json')
            .then( response => {
                setIsLoading(true)
                return response.json()
            }).then( data => {
                setJobListData(data)
            }).catch( error => {
                console.error(error)
            }).finally(() =>
                setIsLoading(false)
            )
    },[])

    return { isLoading, jobListData}
}

export default useFetchJobList