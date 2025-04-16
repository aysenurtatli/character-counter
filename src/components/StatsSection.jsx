import React from 'react'
import { useTextContext } from './TextContext'
import StatsCard from './StatsCard'
import character from '../assets/images/pattern-character-count.svg'
import word from '../assets/images/pattern-word-count.svg'
import sentence from '../assets/images/pattern-sentence-count.svg'


const StatsSection = () => {
    const {text, excludeSpaces} = useTextContext();
    const processedText = excludeSpaces ? text.replace(/\s+/g, '') : text;
    const characterCount = processedText.length;
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    const sentenceCount = text.split(/[.!?]/).filter(Boolean).length;

  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-[16px] mt-[40px] md:mt-[48px] mb-[24px]'>
        <StatsCard bgColor={"bg-[#D3A0FA]"} pattern={character} value={characterCount} label={"Total Characters"}/>
        <StatsCard bgColor={"bg-[#FF9F00]"} pattern={word} value={wordCount} label={"Word Count"}/>
        <StatsCard bgColor={"bg-[#FE8159]"} pattern={sentence} value={sentenceCount} label={"Sentence Count"}/>
    </section>
    
  )
}

export default StatsSection