import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer-container'>
        <h1 className='footer-title'>Nimra Talha</h1>
        <div className='footer-icons'>
            <a href='https://www.linkedin.com/feed/' className='icon'>
                <FaLinkedin size={24}/>
            </a>
            <a href='https://www.facebook.com/' className='icon'>
                <FaFacebook size={24}/>
            </a>
            <a href='#' className='icon'>
                <FaInstagram size={24}/>
            </a>
        </div>
    </div>
  );
}

export default Footer;
