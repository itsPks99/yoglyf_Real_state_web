import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const handleClick =(newValue) => { 
   navigate(newValue);
   window.scrollTo(0, 0);

  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <nav className="nav-links">
          <a onClick={ () => handleClick("/")}>HOME</a>
          <a  onClick={() => handleClick("/contact")} >CONTACT US</a>
          <a onClick={ () => handleClick("/investment-opportunities")} >INVESTMENT OPPORTUNITIES</a>
          <a onClick={ () => handleClick("/investor-privileges")}  >INVESTOR PRIVILEGES</a>
          <a onClick={ () => handleClick("/blogs&media")} >BLOGS & MEDIA</a>
        </nav>
        <div className="footerSocial-icons">
          <a className="footerSocial-icons" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a className="footerSocial-icons" href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a className="footerSocial-icons" href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a className="footerSocial-icons" href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a className="footerSocial-icons" href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>

      <div className="resorts-section">
        <h3>OUR 5-STAR LUXURY BRANDED RESORT & RESIDENCES AT
          <div className="locations">
            <div className="india-locations">
              {/* <a href="/coorg">Coorg</a>
            <a href="/goa">Goa</a>
            <a href="/jaipur">Jaipur</a>
            <a href="/jawai">Jawai</a>
            <a href="/pushkar">Pushkar</a> */}
              <a href="/rishikesh"><FaLocationDot /> &nbsp;Rishikesh</a>
            </div>
            {/* <div className="separator">|</div>
          <div className="uae-locations">
            <a href="/dubai">Dubai (UAE)</a>
          </div> */}
          </div>
        </h3>

      </div>

      <div className="footer-content">
        <div className="footerLogo-section">
          <img
            src="./assets/Logo.png"
            alt="Yoglyf Logo"
            className="footerLogo"
          />
        </div>
        <div className="description-section">
          <p>
            At <strong>Yoglyf</strong>, we design, develop, and invest in world-class wellness retreats in prime
            destinations. Our expertise covers every stage of retreat development, from vision to
            completion, ensuring exceptional quality and innovation.
          </p>
        </div>
        <div className="legal-links">
          <a onClick={ () => handleClick("/terms")}>Terms & Conditions</a>
          <a onClick={ () => handleClick("/privacy")}>Privacy Policy</a>
          <a onClick={ () => handleClick("/about")} >About Us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

