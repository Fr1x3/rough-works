import backgroundImageMobile from '../../assets/images/bg-main-mobile.png'
import backgroundImageDesktop from '../../assets/images/bg-main-desktop.png'
import cardBack from '../../assets/images/bg-card-back.png'
import cardFront from '../../assets/images/bg-card-front.png'
import cardLogo from '../../assets/images/card-logo.svg'
import { selectInputValues } from '../../../store/inputSlice'
import { useSelector } from 'react-redux'
import FormatedCardNumber from '../../utils/formartedCardNumber'

function HeaderScreen(){
    const inputValues = useSelector(selectInputValues)

    return (
        <div className='h-full relative'> 
            <div className='h-3/4 w-full relative lg:h-full lg:w-2/3'>
                <img srcSet={`${backgroundImageMobile} 375px, ${backgroundImageDesktop} 1440px`}
                    src={backgroundImageMobile} 
                    alt='bg image mobile' 
                    className='object-cover w-full h-full'
                />
            </div>
            <div className='h-1/2 w-2/3 md:w-1/2 absolute top-6 right-[5%]  rounded-md lg:h-[200px] lg:w-[350px]  lg:top-[calc(40%_+_5rem)]'>
                <img src={cardBack} alt='card back' className='relative w-full h-full object-fit'/>
                <p className='absolute text-white right-[12%] top-[calc(50%_-1rem)]'> {inputValues.cvc !== '' ? inputValues.cvc.padStart(3, '0'): '000'}</p>
            </div>
            <div className='h-1/2 w-2/3 md:w-1/2 absolute top-[calc(35%_+_.3rem)] right-[calc(20%_+_.7rem)] lg:right-[20%] rounded-md lg:top-[calc(10%_+_2rem)] lg:h-[200px] lg:w-[350px] '>
                <img src={cardFront} alt='card front' className='relative w-full h-full object-fit'/>
                <div className='w-full h-full px-6 py-4 absolute inset-0 grid grid-rows-5 text-white rounded-md'>
                    <img src={cardLogo} className='h-6  object-fit'/>
                    <p className='text-lg md:text-2xl row-start-3'> {inputValues.cardNumber !== '' ? FormatedCardNumber(inputValues.cardNumber): '0000 0000 0000 0000'}</p>
                    <div className='flex justify-between uppercase row-start-5 text-base md:text-lg'>
                        <p>{ inputValues.cardHolderName !== '' ? inputValues.cardHolderName: 'jane appleseed'}</p>
                        <p>{`${inputValues.month !== '' ? inputValues.month.padStart(2, '0'): '00'} /  ${inputValues.year !== '' ? inputValues.year.padStart(2,'0'): '00'}`} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderScreen