import LuckyDrawCard from "./LuckyDrawCard"
import RewardInfo from "./RewardInfo"

const LuckyDrawSection = () => {
  return (
    <div className='
        w-full
        flex
        justify-center
        md:p-0
        p-5
        min-h-screen
    '>
        <div className='
        md:w-3/4
        w-full
        sm:flex-row
        flex
        flex-col
        gap-20
        sm:items-start
        items-center
        justify-end
        '>
            <LuckyDrawCard/>
            <RewardInfo/>
        </div>
    </div>
  )
}

export default LuckyDrawSection