import React from 'react'
import { BiInfoCircle } from 'react-icons/bi'

const RewardInfo = () => {
  return (
    <div
      className="
      flex
      flex-col
      max-w-[20rem]
      rounded-md
      border
      bg-neutral-900
      p-3
      text-sm
      h-fit
      gap-5
      mt-10
    "
    >
      <div className='flex text-md items-center'>
        Reward info
        <BiInfoCircle size={20} className="ml-1" />
      </div>
      <hr className="border-dashed" />
      <h1 className="text-neutral-100">
        Free access to paid KOL (crypto earning) communities!
      </h1>
      <h1>
        Win access to exclusive earning communities of some of the the greatest
        earners in crypto for a month, every 24 hours. Get access to unmatched
        insights, a close-knit community of the best airdrop earners, and more.
      </h1>
      <h1>
        To win: make sure you've connected your Twitter and Discord accounts -
        and follow our criteria!
      </h1>
    </div>
  );
}

export default RewardInfo