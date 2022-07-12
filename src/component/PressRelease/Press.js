import React from 'react';
import PressData from './PressData'
import PressItem from './PressItem'
import './Press.css'
import Header from '../navbar/Navbar'
import Footer from '../Contact/FooterContact'
const Press = () => PressData.length > 0 && (
    <>
        <Header />
        <div className='press'>
            <span className='press-heading'>PRESS RELEASE</span>
            <span className='press-exc'>Some ❤️ from the press</span>
            <div className="press-container">
                {PressData.map((pressdata, idx) => (
                    <PressItem data={pressdata} key={idx} />
                ))}
            </div>
        </div>
        <Footer />
    </>
)

export default Press;