import React from 'react'

import { WordDefinition } from "../interface/WordDefinition";

interface WordDetailsComponentProps {
    word: WordDefinition[];
}
  

export const DefinitionsComponent: React.FC<WordDetailsComponentProps> = ({word}) => {
  return (
    <div className="definition mt-4 text-left">
    <h2 className="py-3 mb-3 flex items-center text-xl italic font-bold text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:after:border-neutral-600">noun</h2>
    <h3 className="mb-5">Meanings</h3>
    <ul className="list-disc list-outside flex flex-col">
        {word[0].meanings[0].definitions.map((data) => {
          return <li className="mb-4" key={data.definition} >{data.definition}</li>
        })}
    </ul>

    <dl className="flex flex-wrap gap-2 mb-3">
        <dt>Synonyms</dt>
        {word[0].meanings[0].synonyms.map((synonym) => {
          return <dd key={synonym}> <p className="text-[#a445ed]">{synonym}</p> </dd> 
        })}
    </dl>

    <h2 className="py-3 flex items-center text-xl italic font-bold text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:after:border-neutral-600">verb</h2>
    <h3 className="mb-5">Meaning</h3>
    <div className="border-b-2 border-[#e5e7eb] mb-5">
        <ul className="list-disc list-outside flex flex-col">
        {word[0].meanings[1].definitions.map((data) => {
          return (<li className="mb-4" key={data.definition}>
                    <span className="block definition-text mb-2">{data.definition}</span>
                    <span className="definition-example">{data.example}</span>
                </li>)
        })}

        </ul>
    </div>


    <h3 className="mb-2 source-link-title">Source</h3>

    <ul className="flex flex-col source-link">

       {word[0].sourceUrls.map((sourceUrl) => {
          return (
            <li className="mb-4" key={sourceUrl}>
            <a href={sourceUrl} target='blank' className="flex flex-row items-center">
                <span className="me-3">{sourceUrl}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                <path 
                    fill="none" 
                    stroke="#838383" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5" 
                    d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
                />
                </svg>
            </a>
        </li>         
          ) 
        })}


    </ul>


   </div>
  )
}
