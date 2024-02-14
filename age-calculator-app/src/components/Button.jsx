import ArrowIcon from '../assets/images/icon-arrow.svg'
function Button(){
    return (
        <div className="w-full relative">
            <div className="h-[2px] w-full bg-light-grey absolute top-[calc(50%_-_1px)]"/>
            <button className="h-10 w-10 rounded-full bg-purple flex justify-center items-center right-[calc(50%_-_1.25rem)] absolute z-10">
                <img src={ArrowIcon} alt="arrow down icon" className='h-1/2 w-1/2'/>
            </button>
        </div>
    )
}

export default Button