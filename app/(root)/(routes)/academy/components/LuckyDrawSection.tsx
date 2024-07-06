import LuckyDrawCard from "./LuckyDrawCard"
import RewardInfo from "./RewardInfo"

const LuckyDrawSection = () => {
  return (
    <div className='
        h-screen
        w-full
        flex
        items-center
        justify-center
    '>
        <div className='
        md:w-3/4
        w-full
        flex
        gap-20
        '>
            <LuckyDrawCard/>
            <RewardInfo/>
        </div>
    </div>
  )
}

export default LuckyDrawSection