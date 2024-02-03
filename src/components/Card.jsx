import data from '../assets/data/data.json'
import filterDataByTimeframe from '../util/filterDataByTimeframes'
import elipse from  '../assets/images/icon-ellipsis.svg'
function Card({ period }){

    const cardData =  filterDataByTimeframe(data, period)
    console.log(cardData)
    return(
        
    cardData.map( item => {
        return(
            <div key={item.title} className={`${item.bgColor} overflow-clip rounded-lg w-5/6 md:w-1/2 lg:w-full relative`}>
                <div className='w-15 h-15 absolute right-4 -mt-1 overflow-hidden'>
                <img src={item.icon} alt='background icon' />
                </div>
                <div className=' h-3/4 w-full gap-1 rounded-lg absolute bottom-0  bg-dark-blue flex flex-col p-4 items-center'>
                    <div className='flex items-center w-full justify-between'>
                        <p className='text-lg text-white'>{item.title}</p>
                        <img src={elipse} alt='more info' className='w-3' />
                    </div>
                    <div className='  flex items-center w-full justify-between lg:flex-col lg:items-start'>
                        
                        <p className='text-3xl text-white'>{item.timeframe. current}hrs</p>
                        <p className='text-xs text-pale-blue'>Last Week - {item.timeframe.previous}hrs</p>
                    </div>
                </div>
            </div>
        )
    }))
}

export default Card