import React from 'react'
import './contact.css'
import Header from '../navbar/Navbar'
import Footer from '../footer/Footer'
import contactimg from '../../assets/icons/contactimg.svg'
import ContactFooter from './FooterContact.js'

function Contact() {
    return (
        <>
            <Header />
            <div className="contact">
                <img style={{ marginTop: "-100px" }} src={contactimg} alt="" />
                <div className='contact-form'>
                    <span style={{ color: "#63342E", fontSize: "24px", textAlign: "left" }}>Have a question about us or just want to hear more about what we do? Drop us a line.</span>
                    <form style={{ paddingTop: "10px" }}>
                        <ul class="form-style-1">
                            <li><label>Full Name <span class="required">*</span></label><input type="text" name="field1" class="field-divided" placeholder="First" /> <input type="text" name="field2" class="field-divided" placeholder="Last" /></li>
                            <li>
                                <label>Email <span class="required">*</span></label>
                                <input type="email" name="field3" class="field-long" />
                            </li>
                            <li>
                                <label>Subject</label>
                                <select name="field4" class="field-select">
                                    <option value="Advertise">Advertise</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="General Question">General</option>
                                </select>
                            </li>
                            <li>
                                <label>Your Message <span class="required">*</span></label>
                                <textarea name="field5" id="field5" class="field-long field-textarea"></textarea>
                            </li>
                            <li>
                                <input type="submit" value="DROP US A LINE" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <ContactFooter />
        </>
    )
}

export default Contact