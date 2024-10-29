'use client'
import React, { useState, useEffect } from 'react';
import { NavbarComponent } from "./components/NavbarComponent";
import { SearchComponent } from "./components/SearchComponent";
import { WordDetailsComponent } from "./components/WordDetailsComponent";
import { DefinitionsComponent } from "./components/DefinitionsComponent";
import { fetchDefinition } from './services/api';
import { WordDefinition } from "./interface/WordDefinition";
import { NoFoundComponent } from './components/NoFoundComponent';

export default function Home() {
  const [word, setWord] = useState<WordDefinition[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetchDefinition('keyboard')
      .then((data:any) => {
         setWord(data);
         setError(null);
      })
      .catch((err) => {
        setWord(null);
        setError(err.message)
      });
}, []);

const handleSearchSubmit = (value: string) => {
  console.log(value)
  fetchDefinition(value)
  .then((data:any) => {
     setWord(data);
     setError(null);
  })
  .catch((err) => {
    setWord(null);
    setError(err.message)
  });
}

  return (
    <div className="custom-container container mx-auto p-6">
      <NavbarComponent />
      <SearchComponent searchChange={handleSearchSubmit} />
      {error && <NoFoundComponent />}
      {word && <WordDetailsComponent word={word} />}
      {word && <DefinitionsComponent word={word} />}
    </div>
  );
}
