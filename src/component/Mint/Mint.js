import React from 'react'
import './mint.css'
import Header from '../navbar/Navbar'
import Footer from '../Contact/FooterContact'
import gif1 from '../../assets/gif/gif1.gif'
import MintSlider from './MintSlider'

function Mint() {
    return (
        <>
            <Header />
            <div className="mint">
                <div className="mint-1">
                    <span className='mint-h1'>Chocolate</span>
                    <span className='mint-h2'>MONKEYS</span>
                    <MintSlider />
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Mint