'use client'
import React, {useState} from 'react'

interface SearchBarProps {
    searchChange: (value: string) => void;
}

export const SearchComponent: React.FC<SearchBarProps> = ({ searchChange }) => {
    const [searchInput, setSearchInput] = useState<string>('');
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
   setSearchInput(event.target.value);
  }
  const handleSubmit = () => {
     searchChange(searchInput)
  }
  return (
    <div className="search relative mt-9 mb-7">
    <button onClick={handleSubmit} className="absolute top-1/2 right-5 -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path 
                fill="none" 
                stroke="#A445ED" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
            />
        </svg>
    </button>
    <input onChange={handleSearch} className="appearance-none border rounded-2xl w-full py-4  ps-5 pe-3 text-[#2D2D2D] bg-[#f5f5f5] h-[64px] hover:outline-[#A445ED]" id="search" type="text" placeholder="Search for any word..." />
   </div>
  )
}
