import React from 'react'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroadcastTower, faHome, faVideo } from '@fortawesome/free-solid-svg-icons';
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
            <a href="#" className="mr-4">
              <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
            </a>
            Home
            </Link>
          </li>

          <li className='hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36'>
            <a href="#" className="mr-4">
              <FontAwesomeIcon icon={faVideo} className="sidebar-icon" />
            </a>
            Shorts
          </li>

          <li className='hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36'>
            <a href="#" className="mr-4">
              <FontAwesomeIcon icon={faVideo} className="sidebar-icon" />
            </a>
            Videos
          </li>

          <li className='hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36'>
            <a href="#" className="mr-4">
              <FontAwesomeIcon icon={faBroadcastTower} className="sidebar-icon" />
            </a>
            Live
          </li>

        </ul>
      </div>
      <h1 className='font-bold pt-5'>Subscriptions</h1>

      <ul>
        <li className='hover:bg-gray-200 rounded-md  p-2 cursor-pointer w-36'>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar;