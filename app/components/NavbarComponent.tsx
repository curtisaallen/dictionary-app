'use client'
import React, { useState } from 'react';
import Image from "next/image";
import iconarrowdown from "@/public/images/icon-arrow-down.svg";
import logo from "@/public/images/logo.svg";

export const NavbarComponent = () => {
        const [showDropDown, setShowDropDown] = useState<boolean>(false);
        const [fontStyle, setFontStyle] = useState<string>("Sans Serif");
        const [styleSwitcher, setStyleSwitcher] = useState<boolean>(false)
        const handleStyleSwitch = () => {
          setStyleSwitcher(!styleSwitcher);
          if(styleSwitcher) {
            document.body.classList.add('bg-white');
            document.body.classList.remove('bg-black');
            document.body.classList.remove('text-white');
            document.body.classList.remove('dark-theme');
          } else {
            document.body.classList.remove('bg-white');
            document.body.classList.add('bg-black');
            document.body.classList.add('text-white');
            document.body.classList.add('dark-theme');
          }
          
        }
        const handleShow = () => {
          setShowDropDown(!showDropDown)
        }

        const handleAcitve = (value:string) => {
            const isActive = (value === fontStyle) ? 'active' : '';
            return isActive;
        }

        const handleFontChange = (value:string) => {
          switch(value) {
            case "Sans Serif":
              // code block
              setFontStyle(value)
              document.body.classList.add('font-lora');
              document.body.classList.remove('font-inter');
              document.body.classList.remove('ffont-inconsolata');
              setShowDropDown(false)
              break;
            case "Serif":
              // code block
              setFontStyle(value)
              document.body.classList.add('font-inter');
              document.body.classList.remove('font-lora');
              document.body.classList.remove('ffont-inconsolata');
              setShowDropDown(false)
              break;
            case "Mono":
                // code block
                setFontStyle(value)
                document.body.classList.add('font-inconsolata');
                document.body.classList.remove('font-lora');
                document.body.classList.remove('font-inter');
                setShowDropDown(false)
              break;  
          }

        }
        return (
          <nav className="flex items-center justify-between">
          <div className="flex items-start space-x-20">
            <Image className='ms-3' src={logo} alt="logo" />
          </div>
          <div className="flex items-center space-x-5">
            <div className="relative w-[95px]">
                <button onClick={handleShow} className="flex flex-row items-center justify-between w-[100%]">
                    {fontStyle} 
                    <Image className='ms-3' src={iconarrowdown} alt="icon arrow down" />
                </button>
                <div className={`drop-down rounded p-8 shadow-xl text-left left-[-25px] bg-white absolute top-[25px] w-[152px] z-10 ${showDropDown ? 'block' : 'hidden'}`}>
                    <div className={`font-lora ${handleAcitve('Sans Serif')}`} onClick={() => handleFontChange("Sans Serif")}>
                        Sans Serif
                    </div>
                    <div className={`font-lora ${handleAcitve('Serif')}`} onClick={() => handleFontChange("Serif")}>
                        Serif
                    </div>
                    <div className={`font-inconsolata ${handleAcitve('Mono')}`} onClick={() => handleFontChange("Mono")}>
                        Mono
                    </div>
                </div>
            </div>
            <span className="separator"></span>
            <div className="flex flex-row items-center space-x-3">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" onClick={handleStyleSwitch} />
                    <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
                </label>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke="#838383" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
            </div>
          </div>
       </nav>
        );
};