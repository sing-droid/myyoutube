import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from './utils/appSlice';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { YOUTUBE_SEARCH_API } from './contants';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);



  useEffect(() => {
   const timer =  setTimeout(() => getSearchSuggestions(), 200);

   return () => {
    clearTimeout(timer);
   }
  },[searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);

  };


  const dispatch = useDispatch();
  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className='grid grid-flow-col p-2 m-3 shadow-lg'>
      <div className='flex col-span-1 mx-2'>
        <img
          onClick={() => toggleMenuhandler()}
          className='h-12 hover:bg-black-400 ml-3 mr-5 cursor-pointer'
          src="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png"
          alt="Hamburger" />

        <img
          className='h-12 cursor-pointer'
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg"
          alt="youtube-logo" />
      </div>

      <div className='col-span-10 px-10'>
        <div> 
        <input type="text" 
        className='w-1/2 border border-gray-400 p-2 rounded-l-full px-5' 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        />
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>
          🔍
        </button>
        </div>
        {showSuggestions && (<div className='absolute bg-white py-2 px-2 w-[23rem] rounded shadow-lg border border-gray-100'>
          <ul>
            {suggestions.map((s) => (
             <li key={s} className='py-2 px-2 shadow-sm hover:bg-gray-100'>
                🔍 {s}
            </li>
            ))}
            {/* <li className='py-2 px-2 shadow-sm hover:bg-gray-100'>🔍 Hello India</li>
            <li className='py-2 px-2 shadow-sm hover:bg-gray-100'>🔍 Hello world</li>
            <li className='py-2 px-2 shadow-sm hover:bg-gray-100'>🔍 Hello in japanese</li>
            <li className='py-2 px-2 shadow-sm hover:bg-gray-100'>🔍 Hello in chinese</li> */}
          </ul>
        </div>)}
      </div>

      <div className='col-span-1'>
        <a href="#" className="mr-4">
          <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
        </a>

        <a href="#" className="ml-16 w-1/3 h-40">
          <FontAwesomeIcon icon={faBell} className="sidebar-icon mr-8" />
        </a>

      </div>
    </div>
  )
}

export default Head;