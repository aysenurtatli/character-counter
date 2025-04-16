import { useState } from 'react';
import { useTextContext } from '../components/TextContext';

const LetterDensity = () => {
  const { letterFrequency } = useTextContext();
  const [showAll, setShowAll] = useState(false);

  const displayedLetters = showAll ? letterFrequency : letterFrequency.slice(0, 5);

  return (
    <div className='mt-8 text-[#12131A] dark:text-[#E4E4EF]'>
      <h2 className='text-lg font-bold my-[20px]'>Letter Density</h2>
      {letterFrequency.length === 0 ? (
        <span>No characters found. Start typing to see letter density.</span>
      ) : ( <ul className='space-y-2'>
        {displayedLetters.map((item, index) => (
          <li key={index} className='flex items-center justify-between'>
            <span>{item.letter}</span>
            <div className='flex-1 h-[12px] bg-[#F2F2F7] dark:bg-[#21222C] rounded-full mx-2'>
              <div
                className='h-[12px] bg-[#D3A0FA] rounded-full'
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            <span>{item.count} ({item.percentage}%)</span>
            
          </li>
        ))}
      </ul>)}
    {letterFrequency.length > 5 && (
        <button className='text-[20px] my-[20px] flex items-center gap-[8px]' onClick={() => setShowAll(!showAll)}> {showAll ? 'See less' : 'See more'}
        {showAll ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        )}</button>
    )}
    </div>
  );
};

export default LetterDensity;