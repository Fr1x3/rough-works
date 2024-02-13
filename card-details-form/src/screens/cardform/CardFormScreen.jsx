import Input from "../../components/input/Input"
import { useDispatch, useSelector } from "react-redux"
import { setInputValue, selectInputValues, setErrors } from "../../../store/inputSlice"


function CardFormScreen({
    handleSubmit
}){

    const dispatch = useDispatch()
    const inputValues = useSelector(selectInputValues)

    function handleInputChange(e){
        let errorMessage = ''
        const {name, value} = e.target
        dispatch(setInputValue({inputName: name, value: value}))

        switch(name){
            case 'cardHolderName': 
                errorMessage = validateCardHolderName(value)
                dispatch(setErrors({name, errorMessage }))
                break;
            case 'cardNumber':
                errorMessage = validateCardNumber(value)
                dispatch(setErrors({name, errorMessage }))
                break
            case 'cvc':
                errorMessage =validateCvc(value)
                dispatch(setErrors({name, errorMessage }))
                break
            case 'month':
                errorMessage =validateMonth(value)
                dispatch(setErrors({name, errorMessage }))
                break
            case 'year':
                errorMessage =validateYear(inputValues.month, value)
                dispatch(setErrors({name, errorMessage }))
                break
            default :
                return
        }
        
    }

    console.log(inputValues.errors)

    return(
        <div className="py-6 px-4">
            <form className="flex flex-col gap-4 h-full lg:mx-auto justify-center lg:w-1/2" onSubmit={() => handleSubmit(true)}>
                <div className="flex flex-col gap-3">
                    <Input 
                        name='cardHolderName'
                        label="cardholder name"
                        placeholder="e.g. Jane Apleseed"
                        error={inputValues.errors.cardHolderName}
                        value={inputValues.cardHolderName}
                        onChange={handleInputChange}
                    />
                    <Input 
                        name="cardNumber"
                        label="card number"
                        placeholder="e.g. 1234 5678 9123 0000"
                        maxLength={16}
                        error={inputValues.errors.cardNumber}
                        value={inputValues.cardNumber}
                        onChange={handleInputChange}
                    />
                    
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label>exp. date (mm/yy)</label>
                        <div className="flex gap-2">
                            <Input 
                                name='month'
                                placeholder="MM"
                                error={inputValues.errors.month}
                                maxLength={2}
                                value={inputValues.month}
                                onChange={handleInputChange}
                            />
                            <Input 
                                name='year'
                                placeholder="YY"
                                maxLength={2}
                                error={inputValues.errors.year}
                                value={inputValues.year}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label>cvc</label>
                        <Input 
                            name='cvc'
                            placeholder="e.g. 123"
                            error={inputValues.errors.cvc}
                            value={inputValues.cvc}
                            onChange={handleInputChange}
                            maxLength={3}
                        />
                    </div>
                    
                </div>
                <button >Confirm</button>
            </form>
        </div>
    )
}

export default CardFormScreen


function validateCvc(value){

    if( !value)
        return 'This field is required'
    if(value.length !== 3)
        return 'Does not meet the required length'
    if(isNaN(value))
        return 'The field accepts digits only'

    return ''

}

function validateCardHolderName(value){
    return ''
}

function validateCardNumber(value){
    if(!value)
        return 'The field is required'
    if(isNaN(value))
        return 'The field accepts digits only'

    return ''
}

function validateMonth(value){
    if(!value)
        return 'The month is required'

    const expMonth = parseInt(value, 10)
    
    if( expMonth < 0 || expMonth > 12)
        return 'invalid month'

    return ''
}
function validateYear(month, value){
    if(!value)
        return 'The year is required'

    const currentYear = parseInt(new Date().getFullYear().toString().slice(-2))
    const currentMonth = new Date(). getMonth() + 1
    const expYear = parseInt(value, 10)
    const expMonth = parseInt(month, 10)
    
    if(expYear < currentYear || (expYear === currentYear && expMonth <= currentMonth) )
        return 'The card is expired'

    return ''
}