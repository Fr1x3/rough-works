// find how many days are in a given month
function totalDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate()
}

// calculates age in days, month, years
// returns and object age
function calculateAge(day, month, year){
    const date = new Date()
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth()
    const currentDay = date.getDate()

    let age = {
        days: null,
        months: null,
        years: null
    }

    // get total full years since birth
    // however, if current month is less than birth month less a year
    age.years = (currentYear - year - ((currentMonth < month) ? 1 : 0)).toString()

    age.months = Math.abs(currentMonth - month) 

    age.days = Math.abs(currentDay - day)

    // current day less birth month means a full month has not been achieved
    if( currentDay < day){
        age.months -= 1 //less a month
        age.days = Math.abs(age.days - (totalDaysInMonth(currentMonth - 1, currentYear) ))
    }

    return age
    
}

export {totalDaysInMonth}
export default calculateAge