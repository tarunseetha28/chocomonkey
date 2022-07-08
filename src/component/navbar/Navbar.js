import React from 'react'
import { Link } from 'react-router-dom'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import cmlogo from "../../../src/assets/icons/cmlogo.svg"
import discord from "../../../src/assets/icons/discord.svg"
import instagram from "../../../src/assets/icons/instagram.svg"
import twitter from "../../../src/assets/icons/twitter.svg"
import "./Navbar.css"
function Navbar() {
    return (

        <div className="header">
            <div className="header-left">
                <div>
                    <Link to="/">
                        <img
                            src={cmlogo}
                            style={{ height: "5rem" }}
                            alt="example"
                        />
                    </Link>
                </div>
            </div>
            <div className="header-right">
                <div className="header-left-menu">
                    <Link className="navLink" aria-current="page" to="/">Home</Link>
                    <Link className="navLink" aria-current="page" to="/team">Team</Link>
                    <Link className="navLink" aria-current="page" to="/">About</Link>
                    <Link className="navLink" aria-current="page" to="/">Mint</Link>
                    <Link className="navLink" aria-current="page" to="/charity">The Charity</Link>
                    <Link className="navLink" aria-current="page" to="/">whitepaper</Link>
                    <Link className="navLink" aria-current="page" to="/contact">Contact</Link>
                </div>
                <a href="https://discord.com/invite/MKYFkDh6yw" className='navLink' target="_blank"><img src={discord} style={{ height: "1.2rem" }} alt="" /></a>
                <a href="https://twitter.com/ChocoMonkeys" className='navLink' target="_blank"><img src={twitter} style={{ height: "1.2rem" }} alt="" /></a>
                <a href="https://www.instagram.com/chocolatemonkeysnft5/" className='navLink' target="_blank"><img src={instagram} style={{ height: "1.2rem" }} alt="" /></a>
            </div>
        </div>

    )
}

export default Navbar