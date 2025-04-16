import React from 'react'
import { useTextContext } from './TextContext'
import checkIcon from '../assets/images/icon-check.svg'

const Options = () => {
  const {excludeSpaces, setExcludeSpaces, characterLimit, setCharacterLimit, text, characterLimitValue, setCharacterLimitValue} = useTextContext();
  const readingTime = Math.ceil(text.split(/\s+/).filter(Boolean).length / 300);

  return (
    <div className='flex md:items-center flex-col md:flex-row justify-between w-fit md:w-full text-[16px] text-[#12131A] dark:text-[#E4E4EF] my-[16px]'>
    <div className=' md:flex md:items-center gap-[24px]'>
  
      {/* Exclude Spaces */}
      <label className='flex items-center gap-[10px] cursor-pointer'>
        <div className="relative flex items-center">
          <input
            type="checkbox"
            checked={excludeSpaces}
            onChange={() => setExcludeSpaces(!excludeSpaces)}
            className='peer appearance-none w-[16px] h-[16px] border border-[#12131A] dark:border-[#E4E4EF] hover:border-[#404254] dark:hover:border-white rounded-[4px] bg-transparent
              focus:outline-none focus:ring-offset-1 focus:ring-1 focus:ring-[#D3A0FA]
              checked:bg-[#C27CF8] checked:border-0 cursor-pointer
              disabled:border-[#12131A]'
          />
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="absolute inset-0 w-4 h-4 hidden peer-checked:block stroke-black pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12.6111L8.92308 17.5L20 6.5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <span>Exclude Spaces</span>
      </label>

      {/* Character Limit */}
      <label className='flex items-center gap-[10px] cursor-pointer'>
        <div className='relative flex items-center'>
        <input
            type="checkbox"
            checked={characterLimit}
            onChange={() => setCharacterLimit(!characterLimit)}
            className='peer appearance-none w-[16px] h-[16px] border border-[#12131A] dark:border-[#E4E4EF] hover:border-[#404254] dark:hover:border-white rounded-[4px] bg-transparent
              focus:outline-none focus:ring-offset-1 focus:ring-1 focus:ring-[#D3A0FA]
              checked:bg-[#C27CF8] checked:border-0 cursor-pointer
              disabled:border-[#12131A]'
          />
           <svg
            fill="none"
            viewBox="0 0 24 24"
            className="absolute inset-0 w-4 h-4 hidden peer-checked:block stroke-black pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12.6111L8.92308 17.5L20 6.5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <span>Set Character Limit</span>
      </label>
  
      {characterLimit && (
        <input
          type="text"
          inputMode='numeric'
           pattern="[1-9][0-9]*"
          value={characterLimitValue}
          onChange={(e) => setCharacterLimitValue(Number(e.target.value))}
          min={1}
          className='text-[16px] border border-[#404254] rounded-[6px] w-[55px] h-[29px] px-2 bg-transparent appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
        />
      )}
    </div>
  
    {/* Reading Time */}
    <span>Approx. reading time: {readingTime} minute</span>
  </div>
  
  )
}

export default Options