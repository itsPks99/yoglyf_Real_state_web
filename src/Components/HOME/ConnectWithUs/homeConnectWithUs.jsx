import { FaShare } from "react-icons/fa";
import "./homeConnectWithUs.css";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const CONTACT_URL = `${BACKEND_URL}/api/contact`;
const NEWSLETTER_URL = `${BACKEND_URL}/api/newsletter`;



const HomeConnectWithUs = () => {
  console.log("Backend URL:", BACKEND_URL);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target[0].value,
      contactEmail: e.target[1].value,
      phone: e.target[2].value,
      city: e.target[3].value,
      profession: e.target[4].value,
    };
  
    try {
      console.log("Sending Form Data:", formData);
  
      const response = await fetch(CONTACT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const responseData = await response.json();
      console.log(" Response Data:", responseData);
  
      if (response.ok) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert(" Failed to send message. Error: " + responseData.error);
      }
    } catch (error) {
      console.error(" Error:", error);
    }
  };
  
  
  const handleNewsletter = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
  
    try {
      const response = await fetch(NEWSLETTER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        alert("Subscribed to Newsletter successfully!");
        e.target.reset();
      } else {
        alert("Subscription failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="connect-section">
      <div className="connect-header">
        <div className="investment-title">
          <hr className="title-line connectUsline" />
          <h1 style={{ marginLeft: "110px" }}>CONNECT</h1>
          <h1>with US</h1>
        </div>
        <p className="connect-description">
          Stay connected with Yoglyf and take the first step toward transforming your investment goals into reality.
          Our team is here to provide expert guidance and personalized support for all your queries. Whether you're
          exploring opportunities or seeking more details, we're just a call or message away. Connect with us today and
          experience the difference of partnering with a leader in luxury resort investments.
        </p>
      </div>

      <div className="connect-container">
        <div className="message-form">
          <h3>Send Us A Message</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="Profession" required />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="newsletter-section">
          <div className="newsletter-content">
            <h3>SUBSCRIBE FOR UPDATES</h3>
            <h2>Newsletter</h2>
            <p>Your journey to luxury starts here. Join our mailing list now.</p>
            <form onSubmit={handleNewsletter}>
              <div className="newsletter-input">
                <input type="email" placeholder="YOUR EMAIL" required />
                <button type="submit"><FaShare /> SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-info">
        <div className="info-card">
          <div className="icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h4>ADDRESS</h4>
          <p>123 Wellness Street,</p>
          <p>Rishikesh, India</p>
        </div>

        <div className="info-card">
          <div className="icon">
            <i className="fas fa-envelope"></i>
          </div>
          <h4>EMAIL</h4>
          <p><a href="mailto:yoglyfhelp@gmail.com" style={{ color: "white" }}>yoglyfhelp@gmail.com</a></p>
        </div>

        <div className="info-card">
          <div className="icon">
            <i className="fas fa-phone"></i>
          </div>
          <h4>PHONE</h4>
          <p>+91 96671 36553</p>
        </div>

        <div className="info-card">
          <div className="icon">
            <i className="fas fa-clock"></i>
          </div>
          <h4>WORKING HOURS</h4>
          <p>Monday – Saturday</p>
          <p>10:00 am to 6:30 pm</p>
        </div>
      </div>
    </div>
  );
};

export default HomeConnectWithUs;
