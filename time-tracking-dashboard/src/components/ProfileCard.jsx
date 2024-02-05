import ProfileImage from '../assets/images/image-jeremy.png'
import { periods } from '../util/enums'

function ProfileCard({
    period,
    handleClick,
}){
    return (
        <div className="bg-dark-blue rounded-lg w-5/6 md:1/2 lg:w-full lg:row-span-2">
            <div className="bg-blue rounded-lg p-4 flex flex-row lg:flex-col gap-4 items-center lg:h-[200px] lg:items-start lg:pl-5">
                <div className='w-16 h-16 p-1 bg-white rounded-full'>
                    <img src={ProfileImage} alt='profile image' />
                </div>
                <div className='text-pale-blue'>
                    <p className='text-sm'>Report for</p>
                    <p className='text-xl text-white text-wrap'>Jeremy Robson</p>
                </div>
            </div>
            <div className='flex justify-evenly py-3 px-1 text-desaturated-blue capitalize lg:flex-col lg:items-start lg:pl-5 '>
                <button className={`${periods.daily === period ? 'text-white': ''} capitalize hover:text-white`} onClick={() =>handleClick(periods.daily)}>{periods.daily}</button>
                <button className={`${periods.weekly === period ? 'text-white': ''} capitalize hover:text-white`} onClick={() => handleClick(periods.weekly)}>{periods.weekly}</button>
                <button className={`${periods.monthly === period ? 'text-white': ''} capitalize hover:text-white`} onClick={() => handleClick(periods.monthly)}>{periods.monthly}</button>
            </div>
        </div>
    )
}

export default ProfileCard