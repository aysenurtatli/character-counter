import React from 'react'

const StatsCard = ({ bgColor, pattern, value, label,}) => {
  return (
<div className={`${bgColor} w-full md:max-w-[319.33px] h-[150px] rounded-[12px] flex items-center relative overflow-hidden p-[16px]`}>
    <div>
        <p className='text-[64px] text-[#12131A] font-bold'>{value}</p>
        <p className='text-[20px]'>{label}</p>
    </div>
    <img src={pattern} alt="pattern" className='absolute top-0 object-cover md:-right-20 lg:-right-7 right-0' />
</div>

  )
}

export default StatsCard