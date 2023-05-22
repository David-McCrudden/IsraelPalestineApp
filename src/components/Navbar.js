import React, {useState} from 'react'
//import Logo from '../assets/Israel_Palestine_Flag.png';
import Logo from '../assets/flag_map.png';
import {Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
  return (
    <div className="navbar">
        <div className = "leftSide" id={openLinks? "open" : "close"}>
            <img src = {Logo} alt="" />
            <div className = "hiddenLinks">
            <Link to="/"> Home </Link>
            <Link to="/sources"> Sources </Link>
            <Link to="/about"> About </Link>
            </div>
        </div>
        <div className ="headingdiv">
        <h1 className="heading"> Timeline of Israel's Borders </h1>
        </div>
        <div className = "rightSide">
          <Link to="/"> Home </Link>
          <Link to="/sources"> Sources </Link>
          <Link to="/about"> About </Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
    </div>
  )
}

export default Navbar

