import React from 'react';
import Footer from '../Footer/Footer';
import HomeConnectWithUs from '../HOME/ConnectWithUs/homeConnectWithUs';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section id="about-our-company" className="section split-background">
        <div className="aboutImage-container">
          <img src="/assets/images/02.jpeg.jpg" alt="Yoglyf Wellness Resort" />
        </div>
        <div className="content">
          <h1>ABOUT US</h1>
          <p><strong>Yoglyf</strong> is a premier developer of world-class wellness retreats, crafting exceptional sanctuaries in prime destinations. With a commitment to innovation, sustainability, and exceptional quality, we create transformative spaces that harmonize luxury with holistic well-being. Our retreats offer exclusive investment opportunities, including models like sale-leaseback, allowing investors to be part of high-value wellness properties. Dedicated to nurturing both nature and personal well-being, <strong>Yoglyf</strong> blends financial growth with a rejuvenating lifestyle.</p>
        </div>

      </section>

      <section id="our-vision" className="section split-background">
        <div className="content">
          <h2>WHAT WE DO</h2>
          <p>At <strong>Yoglyf</strong>, we design, develop, and invest in world-class wellness retreats in prime destinations. Our expertise covers every stage of retreat development, from vision to completion, ensuring exceptional quality and innovation. By integrating sustainable practices with exclusive investment opportunities, we create transformative spaces that promote well-being while delivering lasting value and growth.</p>
        </div>
        <div className="aboutImage-container">
          <img src="/assets/images/04.jpeg.jpg" alt="Our Vision" />
        </div>
      </section>

      <section id="our-mission" className="section split-background">
      <div className="aboutImage-container">
          <img src="/assets/images/04.jpeg.jpg" alt="Our Mission" />
        </div>
        <div className="content">
          <h2>OUR VALUES</h2>
          <p>At <strong>Yoglyf</strong>, our values define our purpose and guide every endeavor. We uphold integrity, transparency, and excellence, fostering trust with clients and partners. With a deep commitment to customer satisfaction, we create holistic wellness retreats that inspire rejuvenation and well-being. By integrating sustainability and innovation, we ensure value-driven experiences that enhance lives and leave a lasting impact.</p>
        </div>
        
      </section>

      {/* <section id="what-sets-us-apart" className="section split-background">
        <div className="image-container">
          <img src="/assets/images/02.jpeg.jpg" alt="Our Mission" />
        </div>
        <div className="content">
          <h2>What sets us apart?</h2>
          <p>We stand distinct for our valley-facing suites, with Wellness Retreat and Herbal Park, thus, a rejuvenating experience.</p>
          <p>Yoglyf strives to be one of a kind; Where nature blends with heartiness of being, fostering holistic healing. It's like stepping into sunshine on a winter afternoon.</p>
         </div>
      </section>

      <section id="our-services" className="section split-background">

        <div className='content'>
          <h2>The Best Service For You</h2>
          <ul >
            <li> <span style={{ color: 'green', fontSize: '24px' }}>&#9745;</span> VALLEY-VIEW ACCOMMODATIONS INCLUDE 10 HOTEL ROOMS AND 44 HOTEL SUITES.</li>
            <li> <span style={{ color: 'green', fontSize: '24px' }}>&#9745;</span> SUITES MEASURING 500 -750 SQ. FT</li>
            <li> <span style={{ color: 'green', fontSize: '24px' }}>&#9745;</span> HERBAL PARK AND WELLNESS CENTRE</li>
            <li> <span style={{ color: 'green', fontSize: '24px' }}>&#9745;</span> GYMNASIUM</li>
            <li> <span style={{ color: 'green', fontSize: '24px' }}>&#9745;</span> SWIMMING POOL</li>
            <li> <span style={{ color: 'green', fontSize: '24px' }}>&#9745;</span> WELLNESS CENTER/SPA</li>
            <li> <span style={{ color: 'green', fontSize: '24px' }}>&#9745;</span> IN/OUT DINING</li>
            <li> <span style={{ color: 'green', fontSize: '24px' }}>&#9745;</span> MULTI-CUISINE RESTAURANT AND VEGAN CAFE</li>
          </ul>
        </div>
        <div className="image-container">
          <img src="/assets/images/05.jpeg.jpg" alt="Our Mission" />
        </div>
      </section>

      <section id="why-invest" className="section split-background">
      <div className="image-container">
          <img src="/assets/images/01.jpeg.jpg" alt="Rishikesh Location" />
        </div>
        <div className="content">
        <h2>Why invest in our company?</h2>
        <p>With contemporary suites integrated with Retreat for wellness, alongside an enhanced, expansive and hospitable experience, we present to you the opportunity to join us as an investor. We offer:</p>
        <ul>
          <li> <span style={{ color: 'orange', fontSize: '24px' }}>&rarr;</span> 1 BHK SUITE STARTING AT 51 LAC INR</li>
          <li> <span style={{ color: 'orange', fontSize: '24px' }}>&rarr;</span> LIFETIME FREE HOLIDAYS</li>
          <li> <span style={{ color: 'orange', fontSize: '24px' }}>&rarr;</span> 30 FREE NIGHTS</li>
          <li> <span style={{ color: 'orange', fontSize: '24px' }}>&rarr;</span> ONCE IN A LIFETIME OPPORTUNITY TO HOST ONE EVENT AT ZERO COST. (TAKE YOUR PICK FROM BIRTHDAY, WEDDING, CEREMONIAL FUNCTION, AND SO ON)</li>
          <li> <span style={{ color: 'orange', fontSize: '24px' }}>&rarr;</span> WITH AN AMOUNT APPROXIMATELY 12-18% RETURN ON INVESTMENT ANNUALLY</li>
        </ul>
          
        </div>
        
      </section> */}

      <section id="location" className="section split-background">
        <div className="content">
          <h2>About Location: Rishikesh</h2>
          <p>In the sacred city of Rishikesh, well-being is believed to flourish one's self with soulfulness and a union of mind, body and spirit. Rishikesh cherishes the concept of inner vitality and holistic healing.</p>
          <p>Nestled against the backdrop of the majestic Himalayas with the pristine Ganges flowing through it, the ancient town of Rishikesh stands as a major tourist and pilgrimage hub in northern India, drawing people from around the globe in search of peace. Rightly known as the 'Yoga Capital of the World,' Rishikesh is teeming with visitors eager to learn yoga and meditation.</p>
          <h3>Guide to reach Yoglyf Wellness Resort (Rishikesh):</h3>
          <ul style={{ textDecoration: 'underline' }}>
            <li>From New Delhi: 250 kms or 5 Hours by road</li>
            <li>From Dehradun: 65 kms or 1.5 hour by road</li>
            <li>From Jollygrant Airport: 35 kms or 50 minutes by road</li>
            <li>From Tapovan, Rishikesh: 21 Kms or 35 minutes by road</li>
          </ul>
        </div>
        <div className="aboutImage-container">
        <iframe
            title="Yoglyf Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.4723440127413!2d78.26795761511672!3d30.0869285818755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390925f3f4e5d82f%3A0xaac0c71a3a9b4b1!2sYoglyf%20Wellness%20Resort!5e0!3m2!1sen!2sin!4v1653456789012"
            width="100%"
            height="400"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* <section id="contact" className="section">
        <h2>Connect With Us</h2>
        <p>Join us at Yoglyf to explore the future of real estate converged with wellness. Contact our team today to learn more about our projects, partnership opportunities, and how we can collaborate to build healthier, thriving communities.</p>
        <p>Contact us at:</p>
        <ul>
          <li>+91 96671 36553</li>
          <li>yoglyfhelp@gmail.com</li>
        </ul>
      </section> */}
        <HomeConnectWithUs />     
        <Footer />
    </div>
    
  );
};

export default About;