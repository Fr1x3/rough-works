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


export {
    validateCardHolderName,
    validateCardNumber,
    validateCvc,
    validateMonth,
    validateYear
}