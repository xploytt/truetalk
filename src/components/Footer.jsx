import React from 'react';
import Logo from "../assets/logo.png"
import {BsFacebook, BsInstagram, BsSnapchat, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs"
import { webLinks, webResourceLinks } from '../data/links';
import kabbasToTitleCase from '../js/toTitleCase';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';




function Footer(props) {
    return (
        <footer id='footer' className='text-white bg-[#000000]'>
            <div id='footer-logo-socials'>
                <img src={Logo} alt='True talk logo' />
                <p id='who-am-i'>
                    Prolific Writer | Motivational Speaker | Content Creator | Brand Influencer
                </p>
                <div id='socials'>
                    <div class="dz-social-icon style-1">
                        <ul>
                            <li>
                                <a href="https://wa.me/message/IWJJ2RQTHSESL1" rel='noreferrer' target="_blank">
                                    <BsWhatsapp /> 
                                </a>
                            </li>

                            <li>
                                <a href="https://www.facebook.com/True-Talk-Arena-106493278807255/" rel='noreferrer' target="_blank">
                                    <BsFacebook /> 
                                </a>
                            </li>

                            <li>
                                <a href="https://instagram.com/truetalkarena?igshid=YmMyMTA2M2Y=" rel='noreferrer' target="_blank">
                                    <BsInstagram /> 
                                </a>
                            </li>

                            <li>
                                <a href="https://twitter.com/Truetalkarena?t=wfcVyVXgJOCbTbqTm9Nd2w&s=09" rel='noreferrer' target="_blank">
                                    <BsTwitter /> 
                                </a>
                            </li>

                            <li>
                                <a href="https://www.youtube.com/channel/UCrrB4cN9G_0kJqQqUoadidA" rel='noreferrer' target="_blank">
                                    <BsYoutube /> 
                                </a>
                            </li>

                            <li>
                                <a href="https://www.snapchat.com/add/truetalkarena?share_id=TWgfxIVgLv0&locale=en-GB" rel='noreferrer' target="_blank">
                                    <BsSnapchat /> 
                                </a>
                            </li>            
                        </ul>
                    </div>
                </div>

            </div>

            <nav>
                <div>
                    <div id='webLinks'>
                        <h4>Our Links</h4>
                        {webLinks.map((link) => {
                            const word = kabbasToTitleCase(link);
                            return (
                                <a key={link} href={link}>
                                   <span>&gt;</span> {word}
                                </a>
                            );
                        })}
                    </div>

                    <div id='webResourceLinks'>
                        <h4>True Talk</h4>
                        {webResourceLinks.map((link) => {
                            const word = kabbasToTitleCase(link);
                            return (
                                <a key={link} href={link}>
                                   <span>&gt;</span> {word}
                                </a>
                            );
                        })}
                    </div>
                </div>
                
                <div id='footer-contact'>
                    <h4>Get In Touch With Us</h4>
                    <ul>
                        <li>
                            <FiMapPin /> <span>Northampton, UK</span>
                        </li>

                        <li>
                            <FiPhone /> <a href='tel:+447459340603'>+447459340603</a>
                        </li>

                        <li>
                            <FiMail /> <a href='mailto:contact@truetalkarena.com'>contact@truetalkarena.com</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div id='footer-bottom'>
                <hr />
                <small>All Rights Reserved</small>
            </div>
        </footer>
    );
}

export default Footer;