import React from 'react'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa2, faBroadcastTower, faClock, faFilm, faFootball, faGamepad, faHome, faMusic, faS, faSubscript, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  // Early return pattern
  if (!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg col-span-1'>
      <div className='flex'>
        <ul>
          <li className='hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36'>
            <Link to="/"> 
            <a href="#" className="mr-3">
              <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
            </a>
            Home
            </Link>
          </li>

          <li className='hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36'>
            <a href="#" className="mr-3">
              <FontAwesomeIcon icon={faFilm} className="sidebar-icon" />
            </a>
            Shorts
          </li>

          <li className='hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36'>
            <a href="#" className="mr-3">
              <FontAwesomeIcon icon={faVideo} className="sidebar-icon" />
            </a>
            Videos
          </li>

          <li className='hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36'>
            <a href="#" className="mr-3">
              <FontAwesomeIcon icon={faBroadcastTower} className="sidebar-icon" />
            </a>
            Live
          </li>

        </ul>
      </div>
      <div> 

        <h1 className='hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36 font-bold pt-3'>
          <a href="#" className='mr-3'>
            <FontAwesomeIcon icon={faHome} className='sidebar-icon'/>
          </a>
          Subscription
        </h1>

        <ul>
        <li className='hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36'>
        <a href="#" className='mr-3'>
          <FontAwesomeIcon icon={faMusic} className='side-bar'/>
        </a>
        Music
        </li>

        <li className='hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36'>
          <a href="#" className='mr-3'>
            <FontAwesomeIcon icon={faFootball} className='side-bar'/>
          </a>
          Sports</li>

        <li className='hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36'>
          <a href="#" className='mr-3'>
            <FontAwesomeIcon icon={faGamepad} className='side-bar'/>
          </a>
          Gaming</li>

        <li className='hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36'>
        <a href="#" className='mr-3'>

          <FontAwesomeIcon icon={faFilm} className='side-bar'/>
        </a>
        Movies
        </li>

      </ul>

      <h1 className='font-bold hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36'>
        <a href="#" className='mr-3'>

          <FontAwesomeIcon icon={faClock} className='side-bar'/>
        </a>
        
        Watch Later</h1>
        <ul>
        <li className='hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36'>
        <a href="#" className='mr-3'>
          <FontAwesomeIcon icon={faMusic} className='side-bar'/>
        </a>
        Music
        </li>

        <li className='hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36'>
          <a href="#" className='mr-3'>
            <FontAwesomeIcon icon={faFootball} className='side-bar'/>
          </a>
          Sports</li>

        <li className='hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36'>
          <a href="#" className='mr-3'>
            <FontAwesomeIcon icon={faGamepad} className='side-bar'/>
          </a>
          Gaming</li>

        <li className='hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36'>
        <a href="#" className='mr-3'>

          <FontAwesomeIcon icon={faFilm} className='side-bar'/>
        </a>
        Movies
        </li>

      </ul>

      </div>
    </div>
  )
}

export default Sidebar;