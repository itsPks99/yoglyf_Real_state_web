// ContactUs.jsx
import React from 'react';
import Footer from '../Footer/Footer';
import ConnectWithUS from '../HOME/ConnectWithUs/homeConnectWithUs';
import './ContactPage.css';

const ContactUs = () => {
  return (
    <div className="contact-page">

      {/* Section 1: Contact Header
      <section className="contact-header-section">
        <div className="contact-header-content">
          <h1>Contact Us</h1>
          <p>Join us at Yoglyf to explore the future of real estate
            converged with wellness. Contact our team today to
            learn more about our projects, partnership
            opportunities, and how we can collaborate to build
            healthier, thriving communities.</p>
        </div>
      </section> */}


      <section className="contact-info-section">
        <div className="contact-info-image">
          <img src="/assets/images/01.jpeg.jpg" alt="Contact Info" />
        </div>
        <div className="contact-info-box">
          <h2>Contact Us</h2>
          <p>Join us at Yoglyf to explore the future of real estate
            converged with wellness. Contact our team today to
            learn more about our projects, partnership
            opportunities, and how we can collaborate to build
            healthier, thriving communities.</p>
        </div>
      </section>
      {/* Section 2: Contact Information */}
      <section className="contact-info-section">
        <div className="contact-info-box">
          <h2>Get in Touch</h2>
          <p>Feel free to reach us through the following contact details:</p>
          <ul>
            <li><strong>Address:</strong> 123 Wellness Street, Rishikesh, India</li>
            <li><strong>Phone:</strong> +91 96671 36553</li>
            <li><strong>Email:</strong> <a href="mailto:yoglyfhelp@gmail.com">yoglyfhelp@gmail.com</a></li>
          </ul>
        </div>
        <div className="contact-info-image">
          <img src="/assets/images/02.jpeg.jpg" alt="Contact Info" />
        </div>
      </section>

      <ConnectWithUS />
      <Footer />
    </div>
  );
};

export default ContactUs;
