import React, { useState } from 'react'
import TextAreaBox from './TextAreaBox'
import Options from './Options'

const TextAreaSection = ({onTextChange, excludeSpaces, onExcludeSpacesChange}) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText);
  };
  return (
      <section>
          <TextAreaBox text={text} onTextChange={handleChange}/>
          <Options excludeSpaces={excludeSpaces} onExcludeSpacesChange={onExcludeSpacesChange}/>
      </section>
    )
  }
  


export default TextAreaSection