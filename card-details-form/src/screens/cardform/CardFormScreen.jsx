import Input from "../../components/input/Input"
import { useDispatch, useSelector } from "react-redux"
import { setInputValue, selectInputValues, setErrors } from "../../../store/inputSlice"
import { 
    validateCardHolderName, 
    validateCardNumber, 
    validateCvc, 
    validateMonth,
    validateYear 
} from "../../utils/validator"


function CardFormScreen({
    handleNav
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

    return(
        <div className="py-6 px-4">
            <form className="flex flex-col gap-4 h-full lg:mx-auto justify-center lg:w-3/5" onSubmit={handleNav}>
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


