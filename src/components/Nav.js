import React from 'react'
import '../App.css';
import logo from '../images/logo1.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdDarkMode} from 'react-icons/md'
export default function Nav({flip,setFlip,setSearchTerm}) {

    const darkModeHandler=()=>{
        setFlip(!flip);
    }
    return (
        <nav className={`nav-bar ${flip?'dark-background':''}`}>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='search-bar-container'>
                <div className='search-button'>
                    <span>
                    <AiOutlineSearch/>
                    </span>
                    </div>
                <input type="text" placeholder='Search Characters...' onChange={(e)=>{setSearchTerm(e.target.value)}} />
            </div>
            <div onClick={darkModeHandler} className='dark-mode'>
                <span><MdDarkMode/></span>
                <h5> Dark Mode</h5>
            </div>
        </nav>
    )
}
