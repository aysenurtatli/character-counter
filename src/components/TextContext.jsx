import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'

const TextContext = createContext();

const getLetterFrequency = (text) => {
    const frequency = {};
    const letters = text.toUpperCase().replace(/[^A-Z]/g, '');
  
    for (const char of letters) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
  
    const totalLetters = letters.length;
  
    return Object.entries(frequency)
      .sort((a, b) => b[1] - a[1])
      .map(([letter, count]) => ({
        letter,
        count,
        percentage: ((count / totalLetters) * 100).toFixed(2),
      }));
  };

export const TextProvider = ({ children }) => {
    const [text, setText] = useState("");
    const [excludeSpaces, setExcludeSpaces] = useState(false);
    const [characterLimit, setCharacterLimit] = useState(false);
    const [characterLimitValue, setCharacterLimitValue] = useState(300)
    const [letterFrequency, setLetterFrequency] = useState([]);


  useEffect(() => {
    const updatedFrequency = getLetterFrequency(text);
    setLetterFrequency(updatedFrequency);
  }, [text]);

    return (
        <TextContext.Provider value={{ text, setText, excludeSpaces, setExcludeSpaces, characterLimit, setCharacterLimit, characterLimitValue, setCharacterLimitValue, letterFrequency, setLetterFrequency}}>
            {children}
        </TextContext.Provider>
    )
}

export const useTextContext = () => useContext(TextContext);