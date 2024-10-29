import { WordDefinition } from "../interface/WordDefinition";
const Dictionary_API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const fetchDefinition = async (word: string): Promise<WordDefinition> => {
  const response = await fetch(`${Dictionary_API_URL}${word}`);
  if (!response.ok) {
    throw new Error('Definition not found');
  }
  return response.json();
};

