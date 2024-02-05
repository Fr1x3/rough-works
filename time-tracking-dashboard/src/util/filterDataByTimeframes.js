import icons from './icons'

const colors = [
    'bg-lighter-red',
    'bg-soft-blue',
    'bg-light-red',
    'bg-lime-green',
    'bg-violet',
    'bg-soft-orange',
]

function filterDataByTimeframe(data , period){
    console.log(icons)
    return data.map( (activity, index) => ({
        title: activity.title,
        timeframe: activity.timeframes[period],
        icon: Object.values(icons)[index],
        bgColor: colors[index]
    }))
}

export default filterDataByTimeframe