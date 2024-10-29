interface Phonetic {
    text?: string;
    audio?: string;
  }
  
  interface Definition {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example: string[];
  }
  
  interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
  }
  
  interface License {
    name: string;
    url: string;
  }
  
  export interface WordDefinition {
    word: string;
    phonetic: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
    license: License;
    sourceUrls: string[];
  }
  