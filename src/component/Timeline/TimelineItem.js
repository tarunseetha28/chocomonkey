import React from 'react';
import './timeline.css'
const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span style={{ color: "white", fontSize: "28px", fontWeight: 900 }}>{data.text}</span>
            <span style={{ color: "white", fontSize: "18px" }}>{data.desc}</span>
        </div>
    </div>
);

export default TimelineItem;