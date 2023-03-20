import  { useState, useEffect } from 'react';

type Props = {
  textArray: string[];
  updateTextArray: (textArray: string[]) => void;
};

export function TextSlide({textArray, updateTextArray}: Props){
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState(textArray[currentTextIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentTextIndex + 1) % textArray.length;
      setCurrentTextIndex(nextIndex);
      setCurrentText(textArray[nextIndex]);
      updateTextArray([...textArray.slice(0, nextIndex), ...textArray.slice(nextIndex + 1), textArray[nextIndex]]);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentTextIndex, textArray, updateTextArray]);

  return (

    <h2>
      {currentText}
    </h2>

  );
}


