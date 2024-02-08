import successIcon from '../../assets/images/icon-complete.svg'
function SuccessScreen(){


    return(
        <div className="grid grid-rows-3 items-center justify-items-center w-full px-4 py-6">
            <img src={successIcon} alt="complete icon"/>
            <div className='flex flex-col gap-3'>
                <p className='text-center uppercase text-2xl font-bold text-[hsl(278,68%,11%)]'>thank you</p>
                <p className='text-[hsl(279,6%,55%)]'>We've added your card details</p>
            </div>
            <button className="w-full text-center my-5 text-white py-2 rounded-lg bg-[hsl(278,68%,11%)]">Continue</button>
        </div>
    )
}

export default SuccessScreen