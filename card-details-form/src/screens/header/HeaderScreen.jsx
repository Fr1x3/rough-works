import backgroundImageMobile from '../../assets/images/bg-main-mobile.png'
import cardBack from '../../assets/images/bg-card-back.png'
import cardFront from '../../assets/images/bg-card-front.png'
import cardLogo from '../../assets/images/card-logo.svg'

function HeaderScreen(){
    return (
        <div className='h-full  bg-red-400 relative'> 
            <div className='h-3/4 w-full relative '>
                <img src={backgroundImageMobile} alt='bg image mobile' className='object-cover w-full h-full'/>
            </div>
            <div className='bg-blue-500 h-1/2 w-3/4 absolute top-6 right-3 rounded-md'>
                <img src={cardBack} alt='card back' className='relative w-full h-full object-fit'/>
                <p className='absolute text-white right-[12%] top-[calc(50%_-1rem)]'>000</p>
            </div>
            <div className='h-1/2 w-3/4 absolute bottom-9 left-3 rounded-md'>
                <img src={cardFront} alt='card front' className='relative w-full h-full object-fit'/>
                <div className='w-full h-full px-6 py-4 absolute inset-0 text-white rounded-md'>
                    <img src={cardLogo} className='h-6  object-fit'/>
                    <p className='text-xl mt-10'>0000 0000 0000 0000</p>
                    <div className='flex justify-between uppercase mt-2'>
                        <p>jane appleseed</p>
                        <p>00/00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderScreen