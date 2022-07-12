import React from 'react';
import MediaData from './MediaData'
import MediaItem from './MediaItem'
import './Media.css'
import Header from '../navbar/Navbar'
import Footer from '../Contact/FooterContact'
const Media = () => MediaData.length > 0 && (
    <>
        <Header />
        <div className='media'>
            <span className='media-heading'>Media</span>
            <span className='media-exc'>Finding your way through</span>
            <div className="media-container">
                {MediaData.map((mediadata, idx) => (
                    <MediaItem data={mediadata} key={idx} />
                ))}
            </div>
        </div>
        <Footer />
    </>
)

export default Media;