import { useDispatch, useSelector } from 'react-redux'
import ArrowIcon from '../assets/images/icon-arrow.svg'
import { selectedInput, setErrors } from '../store/birthdayInputSlice'
import { setAge, ageResult } from '../store/ageSlice'
import { ValidateAll } from '../utils/validators'
import calculateAge from '../utils/calculateage'


function Button(){
    const dispatch = useDispatch()
    const age = useSelector(ageResult)
    const { day, month, year } = useSelector(selectedInput)

    function handleOnClick(){
        // validate correct date
        const dateErrors = ValidateAll( day, month, year)
        const isNotError = dateErrors.day == null && dateErrors.month == null 
                        && dateErrors.year == null && dateErrors.date == null
        
        dispatch(setErrors(dateErrors))

        // no errors calculate age and dispatch results
        if (isNotError){
            const age = calculateAge( day, month, year)
            dispatch(setAge(age))
        }
            
        console.log(age)
        
    }
    return (
        <div className="w-full relative">
            <div className="h-[2px] w-full bg-light-grey absolute top-[calc(50%_-_1px)]"/>
            <button 
                onClick={handleOnClick}
                className="h-12 w-12 rounded-full bg-purple flex justify-center items-center right-[calc(50%_-_1.5rem)] top-[calc(50%_-_1.5rem)] absolute z-10 lg:right-0"
            >
                <img src={ArrowIcon} alt="arrow down icon" className='h-1/2 w-1/2'/>
            </button>
        </div>
    )
}

export default Button