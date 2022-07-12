import React from 'react';
import NewsData from './newsdata'
import NewsItem from './newsitem'
import './news.css'
import Header from '../navbar/Navbar'
import Footer from '../Contact/FooterContact'
const News = () => NewsData.length > 0 && (
    <>
        <Header />
        <div className='news'>
            <span className='news-heading'>NEWS & ARTICLES</span>
            <div className="news-container">
                {NewsData.map((newsdata, idx) => (
                    <NewsItem data={newsdata} key={idx} />
                ))}
            </div>
        </div>
        <Footer />
    </>
)

export default News;