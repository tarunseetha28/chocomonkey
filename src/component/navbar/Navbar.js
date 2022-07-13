import React from 'react'
import { Link } from 'react-router-dom'
import cmlogo from "../../../src/assets/icons/cmlogo.svg"
import Hamburger from './Hamburger.js';
import "./Navbar.css"
function Navbar() {
    return (

        <div className="header">
            <div className="header-left">
                <div>
                    <Link to="/">
                        <img
                            className='header-icon'
                            src={cmlogo}
                            alt="example"
                        />
                    </Link>
                </div>
            </div>
            <div className="header-right">
                <div className="header-left-menu">
                    <Link className="navLink" aria-current="page" to="/">Home</Link>
                    <Link className="navLink" aria-current="page" to="/team">Team</Link>
                    <Link className="navLink" aria-current="page" to="/mint">Mint</Link>
                    <Link className="navLink" aria-current="page" to="/token">Token</Link>
                    <Link className="navLink" aria-current="page" to="/charity">The Charity</Link>
                    <Link className="navLink" aria-current="page" to="/">Whitepaper</Link>
                    <Link className="navLink" aria-current="page" to="/contact">Contact</Link>
                    <Link className="navLink" aria-current="page" to="/news">News</Link>
                    <Link className="navLink" aria-current="page" to="/media">Media</Link>
                    <Link className="navLink" aria-current="page" to="/press">Press</Link>
                </div>

            </div>
            <Hamburger />

        </div>

    )
}

export default Navbar