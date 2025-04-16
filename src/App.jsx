import { useState } from 'react';
import Header from './components/Header'
import StatsSection from './components/StatsSection'
import TextAreaSection from './components/TextAreaSection'
import { TextProvider } from './components/TextContext';
import LetterDensity from './components/LetterDensity';

function App() {

  return (
    <TextProvider>
      <div className={` bg-[url('./bg-light-theme.png')] dark:bg-[url('./bg-dark-theme.png')]`}>
        <div className={`max-w-[990px] mx-auto py-[32px] px-[16px] md:px-[32px] min-h-screen `}>
          <Header/>
          <TextAreaSection />
          <StatsSection />
          <LetterDensity/>
        </div>
      </div>
    </TextProvider>
  )
}

export default App
