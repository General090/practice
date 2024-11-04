import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>General</a>

      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href='https://facebook.com'><FaFacebookF /></a>
      <a href='https://instagram.com'><FaInstagramSquare /></a>
      <a href='https://x.com'><FaXTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; General Tutorial, All rghts reserved.</small>
      </div>
    </footer>
  )
}

export default footer