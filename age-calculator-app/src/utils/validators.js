import { totalDaysInMonth } from "./calculateage"

function validateDay(day){
    if( !day)
        return 'The field is required'
    
    if( day > 31 || day <= 0)
        return 'Must be a valid day'
    return null
}

function validateMonth( month ){
    if( month <= 0 )
        return 'The field is required'
    if( month > 12 )
        return 'Must be a valid month'
    return null
}

function validateYear( year ){
    if( year <= 0)
        return 'The field is required'

    const currentYear = new Date().getFullYear()

    if( year > currentYear )
        return 'Must be a valid Year'

    return null
}

function ValidateAll( day, month, year ){
    let errors = {
        day: null,
        month: null,
        year: null,
        date: null
    }
    errors.day = validateDay(day)
    errors.month = validateMonth(month)
    errors.year = validateYear(year)

    // valid date
    if( totalDaysInMonth(month, year) < day )
        errors.date = 'Must be a valid date'

    return errors
}

export {
    validateDay,
    validateMonth,
    validateYear,
    ValidateAll
}