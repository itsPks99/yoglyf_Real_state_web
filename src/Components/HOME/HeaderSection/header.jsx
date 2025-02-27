import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import { Link } from "react-router-dom"
import "../HeaderSection/header.css"
import SocialLinks from "../Sociallinks/socialLinks.jsx"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const menuItems = [
    { title: "HOME", link: "/" },
    { title: "ABOUT US", link: "/about" },
    { title: "INVESTMENT OPPORTUNITIES", link: "/investment-opportunities" },
    {
      title: "PROJECTS",
      link: "/projects",
      dropdown: ["Current Projects", "Upcoming Projects"],
    },
    { title: "INVESTOR PRIVILEGES", link: "/investor-privileges" },
    { title: "BLOGS & MEDIA", link: "/blogs" },
    // { title: "CAREERS", link: "/careers" },
    { title: "CONTACT US", link: "/contact" },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  return (
    <header className="header">
      <div className="header-top">
        <Link to="/" className="logo-container">
          <img
            src="./assets/logoWithName.png"
            alt="Yoglyf Logo"
            className="logo"
          />
        </Link>
        <div className="top-right">
          <SocialLinks />
         
        </div>
      </div>

      <div className="header-bottom">
        <nav className="desktop-menu">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              {item.dropdown ? (
                <>
                  <button className="menu-link dropdown-trigger" onClick={() => toggleDropdown(index)}>
                    {item.title}
                    <span className="arrow-down"> <FaChevronDown/></span>
                  </button>
                  <div className={`dropdown ${activeDropdown === index ? "active" : ""}`}>
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={`${item.link}/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                        className="dropdown-item"
                      >
                        {subItem}
                      </Link>
                    ))}
                     
                  </div>
                </>
              ) : (
                <Link to={item.link} className="menu-link">
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <button className="reserve-button">Reserve Your Free Stay</button>
        </nav>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        {menuItems.map((item, index) => (
          <div key={index} className="mobile-menu-item">
            {item.dropdown ? (
              <>
                <button className="mobile-menu-link" onClick={() => toggleDropdown(index)}>
                  {item.title}
                  <span className="arrow-down"><FaChevronDown/></span>
                </button>
                <div className={`mobile-dropdown ${activeDropdown === index ? "active" : ""}`}>
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={`${item.link}/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                      className="mobile-dropdown-item"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link to={item.link} className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>
                {item.title}
              </Link>
            )}
          </div>
        ))}
        <div className="mobile-social-links">
          <SocialLinks />
        </div>
      </div>
    </header>
    
  )
}

export default Header

