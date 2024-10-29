import React from 'react'
import { WordDefinition } from "../interface/WordDefinition";

interface WordDetailsComponentProps {
    word: WordDefinition[];
}
  
export const WordDetailsComponent: React.FC<WordDetailsComponentProps> = ({word}) => {
const handleTerm = () => {
    const utterance = new SpeechSynthesisUtterance(word[0].word);
    window.speechSynthesis.speak(utterance);
}
    return (
    <div className="flex items-center justify-between mb-5">
    <div className="flex flex-col items-start keyword">
       <h1 className="text-6xl font-bold text-black-500 mb-5">{word[0].word}</h1>
       <p>{word[0].phonetic}</p>
    </div>
    <div className="flex items-start space-x-20">
       <button onClick={handleTerm} className='play-btn'>
           <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fillRule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>
       </button>
    </div>
  </div>
  )
}
