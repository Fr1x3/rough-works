import { useSelector } from "react-redux"
import { ageResult } from "../store/ageSlice"
import { useEffect } from "react"

function Result(){
    const age = useSelector(ageResult)
    useEffect(()=> {
        console.log(age)
    },[age])
    
    return(
        <div className=" font-['Poppins-ExtraBold'] text-[2rem] ">
            <p><span className="text-purple">{age.years}</span> years</p>
            <p><span className="text-purple">{age.months}</span> months</p>
            <p><span className="text-purple">{age.days}</span> days</p>
        </div>
    )
}

export default Result