import { useTextContext } from "./TextContext"
import info from '../assets/images/icon-info.svg'

const TextAreaBox = () => {
  const {text, setText, characterLimit, characterLimitValue, setCharacterLimitValue} = useTextContext();

  const handleChange = (e) => {
    let value = e.target.value;
    if (setCharacterLimitValue && value.length > characterLimitValue){
      value = value.slice(0, characterLimitValue);
    }
    setText(value);
  };

  const isOverLimit = setCharacterLimitValue && text.length >= characterLimitValue;

  return (
    <>
      <textarea
          placeholder='Start typing here… (or paste your text)'
          value={text}
          onChange={handleChange}
          className={`bg-[#F2F2F7] dark:bg-[#2A2B37] placeholder-[#2A2B37] dark:placeholder-[#E4E4EF] text-[#2A2B37] dark:text-[#E4E4EF] border-2 border-[#E4E4EF]  dark:border-[#404254] rounded-[12px] text-[20px] w-full p-[20px] focus:outline-none focus:ring-2  ${isOverLimit ? 'focus:shadow-[rgba(254,129,89,1)_0px_0px_3px_3px] focus:ring-offset-[#DA3701] focus:ring-[#FE8159]' : ' focus:ring-[#D3A0FA] focus:ring-offset-[#C27CF8] focus:shadow-[rgba(211,160,250,1)_0px_0px_3px_3px]' } min-h-[200px] cursor-pointer`}
      />
        {isOverLimit && (
          <div className="flex items-center gap-[10px] my-[16px]">
            <img src={info} alt="info" />
            <span className="text-[#FE8159]">Limit reached! Your text exceeds {characterLimitValue} characters.</span>
          </div>
          
        )}
     </>
  )
}

export default TextAreaBox