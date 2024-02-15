import { useDispatch, useSelector } from "react-redux"
import Input from "./Input"
import { inputErrors, selectedInput, setErrors, setInput } from "../store/birthdayInputSlice"
import { validateDay, validateMonth, validateYear } from "../utils/validators"

function DateInput(){
    const inputValues = useSelector(selectedInput)
    const errors = useSelector(inputErrors)
    const dispatch = useDispatch()
     
    
    function handleChange(event){
        let errorMessage = ''
        const { name, value } = event.target
        dispatch(setInput({name, value}))  // update the inputs

        // validate the inputs
        switch(name){
            case 'day':
                errorMessage = validateDay(value)
                dispatch(setErrors({day: errorMessage}))
                break
            case 'month':
                errorMessage = validateMonth(value)
                dispatch(setErrors({month: errorMessage}))
                break
            case 'year':
                errorMessage = validateYear(value)
                dispatch(setErrors({year: errorMessage}))
                break
            default:
                return
        }
    }

    return(
        <div>
            <div className="grid grid-cols-3 gap-4 ">
                {inputData.map( (data) => {
                    return(
                        <Input 
                            key={data.id}
                            {...data}
                            value={inputValues[data.name]}
                            handleChange={handleChange}
                            errors={errors[data.name]}
                        />
                    )
                })}

            </div>
            {errors.date && <p className="text-xs text-light-red mt-1">{errors.date}</p>}
        </div>
    )
}

export default DateInput

const inputData = [
    {
        id: 0,
        name: 'day',
        placeholder: 'DD',
        maxLength: 2,
    },
    {
        id: 1,
        name: 'month',
        placeholder: 'MM',
        maxLength: 2,
    },
    {
        id: 2,
        name: 'year',
        placeholder: 'YYYY',
        maxLength: 4,
    },
]