import ProfileImage from '../assets/images/image-jeremy.png'
import { periods } from '../util/enums'

function ProfileCard({
    period,
    handleClick,
}){
    console.log(period)
    return (
        <div className="bg-dark-blue rounded-lg">
            <div className="bg-blue rounded-lg p-4 flex flex-row gap-4 items-center">
                <div className='w-16 h-16 p-1 bg-white rounded-full'>
                    <img src={ProfileImage} alt='profile image' />
                </div>
                <div className='text-pale-blue'>
                    <p className='text-sm'>Report for</p>
                    <p className='text-xl text-white'>Jeremy Robson</p>
                </div>
            </div>
            <div className='flex justify-evenly py-3 px-1 text-desaturated-blue'>
                <button className='' onClick={() =>handleClick(periods.daily)}>{periods.daily}</button>
                <button onClick={() => handleClick(periods.weekly)}>{periods.weekly}</button>
                <button onClick={() => handleClick(periods.monthly)}>{periods.monthly}</button>
            </div>
        </div>
    )
}

export default ProfileCard