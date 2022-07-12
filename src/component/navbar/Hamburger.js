import React, { useState } from 'react'
import hamburgericon from "../../assets/icons/hamburgericon.svg"
import './Navbar.css'
import { Link } from 'react-router-dom'
import 'antd/lib/drawer/style/index.css';
import { Drawer, Button } from 'antd'
function Hamburger() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button
                onClick={showDrawer}
                className="hamb-menu">
                <img style={{ marginTop: "auto", marginBottom: "auto", height: "20px" }} src={hamburgericon} alt="" />
            </Button>
            <Drawer
                className='drawer-hamburger'
                // title={<img src={bigboxlogo} style={{ height: "30px", marginTop: "10px" }} />}
                placement="right"
                onClose={onClose}
                visible={visible}>
                <div className='hamb-menuli'>
                    <Link className="navLink" aria-current="page" to="/">Home</Link>
                    <Link className="navLink" aria-current="page" to="/team">Team</Link>
                    <Link className="navLink" aria-current="page" to="/mint">Mint</Link>
                    <Link className="navLink" aria-current="page" to="/charity">The Charity</Link>
                    <Link className="navLink" aria-current="page" to="/">Whitepaper</Link>
                    <Link className="navLink" aria-current="page" to="/contact">Contact</Link>
                    <Link className="navLink" aria-current="page" to="/news">News & articles</Link>
                    <Link className="navLink" aria-current="page" to="/media">Media</Link>
                </div>

            </Drawer>
        </>
    )
}

export default Hamburger