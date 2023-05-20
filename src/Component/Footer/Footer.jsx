import React from 'react';
import { FaFacebookF,FaTwitter,FaYoutube} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
              <footer className="footer p-10 bg-base-300 text-base-content">
  <div>
    <span className="footer-title">joyful animals</span> 
    <img className='h-8' src="https://cdn.icon-icons.com/icons2/1929/PNG/512/iconfinder-lion-4591886_122125.png" alt="" />
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <span><FaFacebookF/></span>
    <span><FaTwitter/></span>
    <span><FaYoutube/></span>
  </div>
</footer>
        </div>
    );
};

export default Footer;