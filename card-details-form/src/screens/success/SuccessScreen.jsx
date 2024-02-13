import successIcon from '../../assets/images/icon-complete.svg'
function SuccessScreen({
    handleNav
}){


    return(
        <div className="grid grid-rows-3 items-center justify-items-center w-full px-4 py-6 lg:w-1/2 lg:mx-auto lg:grid-rows-7">
            <img src={successIcon} alt="complete icon" className=' lg:row-start-3'/>
            <div className='flex flex-col gap-3 lg:row-start-4'>
                <p className='text-center uppercase text-2xl font-bold text-[hsl(278,68%,11%)]'>thank you</p>
                <p className='text-[hsl(279,6%,55%)]'>We&apos;ve added your card details</p>
            </div>
            <button className='lg:row-start-5' onClick={handleNav}>Continue</button>
        </div>
    )
}

export default SuccessScreen