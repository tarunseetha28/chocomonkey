import React from 'react'
import Header from '../navbar/Navbar.js'
import TeamFooter from './TeamFooter.js'
import './team.css'
import brian from '../../assets/icons/brian.svg'
import teex from '../../assets/images/teex.png'
function team() {
    return (
        <>
            <Header />
            <div className='team'>
                <div className="team-left">
                    <span style={{ color: "#63342E", fontSize: "120px", lineHeight: "100px" }}>BRIAN RUBASH</span>
                    <span style={{ marginTop: "30px" }}>Brian began designing websites in 1996 after combining his marketing and computer science degrees. Brian has worked for and produced digital experiences for companies such as Make-A-Wish, MS Society, Hasbro, Lucasfilm, Disney, Cartoon Network, McDonalds, Mattel, and others. He was also a member of the digital team that helped launch the first Furby toy in 1998.<br /><br />
                        Brian has developed and worked on early virtual worlds such as Shining Stars, SeaPals World, and Mattel's American Girl World, as well as raised venture funding for various firms in the gaming and entertainment area.</span>
                </div>
                <div className="team-center"></div>
                <div className="team-right">
                    <img style={{ height: "500px", marginLeft: "auto" }} src={brian} alt="" />
                </div>
            </div>
            <div style={{ backgroundColor: "#F3454A" }} className='team'>
                <div className="team-left">
                    <span style={{ color: "white", fontSize: "120px", lineHeight: "100px" }}>TEAM OF<br /> EXECUTIVES</span>
                    <span style={{ color: "white", marginTop: "30px" }}>Our team has over 25 years of experience in digital and product development, including toys, virtual worlds, and gaming. Since 1983, the group has been pushing the boundaries of technology. We also introduce the new Chocolate Token (CHOCO), which aids in the expansion of the Chocolate Monkey Metaverse. We combed the globe for the greatest professionals we could find to assist us in making Chocolate Monkeys a success. This group has decades of industry experience.<br /><br />
                        Our community is obsessed with the overall user experience because we recognize that our users are a true community. We are committed to providing real, valuable rewards to our users while also utilizing various result-oriented marketing tools to grow our community. The Chocolate Monkey community invites you all to join us on this journey.</span>
                </div>
                <div className="team-center"></div>
                <div className="team-right">
                    <img style={{ width: "100%", marginLeft: "auto" }} src={teex} alt="" />
                </div>
            </div>
            <TeamFooter />
        </>
    )
}

export default team