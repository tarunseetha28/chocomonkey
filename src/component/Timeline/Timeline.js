import React from 'react';
import timelineData from './data'
import TimelineItem from './TimelineItem'
import './timeline.css'

const Timeline = () => timelineData.length > 0 && (
    <>

        <div className='home-timeline'>
            <span style={{ paddingLeft: "30px", fontSize: "120px", color: "white" }}>ROADMAP</span>
            <div className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </div>
    </>
)

export default Timeline;