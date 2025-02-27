import React from 'react';
import Footer from '../Footer/Footer';
import ConnectWithUs from '../HOME/ConnectWithUs/homeConnectWithUs';
import './investorPrivileges.css';
const InvestorPrivileges = () => {
    const privileges = [
        {
            title: "Lifetime ROI",
            description: "Yoglyf ensures your investment delivers consistent, long-term returns through property appreciation and a steady rental income stream. With expertly managed properties in high-demand locations, you enjoy a reliable and growing ROI that secures your financial future.",
            image: "/assets/images/06roi.png"
        },
        {
            title: "Luxury Ownership",
            description: "Enhance your investment portfolio and lifestyle with ownership in premium luxury resorts in the most sought-after destinations. These iconic properties embody sophistication, prestige, and exclusivity, making your investment a true symbol of luxury living.",
            image: "/assets/images/07lux.png"
        },
        {
            title: "Exclusive Privileges",
            description: "As an investor, you gain access to exclusive benefits, including complimentary annual stays, discounts on dining, spa services, and priority access to premium resort amenities. These privileges make your investment not only financially rewarding but also personally enriching.",
            image: "/assets/images/08.png"
        },
        {
            title: "High-Value Appreciation",
            description: "Invest in carefully selected, high-growth destinations where property values steadily appreciate. Yoglyf strategically aligns investments with booming tourism markets, ensuring substantial capital growth over time.",
            image: "/assets/images/09.png"
        },
        {
            title: "Sustainable Investments",
            description: "Support eco-friendly developments designed with sustainability at their core. Yoglyf integrates green practices and sustainable designs into its resorts, attracting environmentally conscious travelers and investors who prioritize responsible investments.",
            image: "/assets/images/09.png"
        },
        {
            title: "Trusted Partnerships",
            description: "Partner with globally recognized hospitality brands that enhance your property’s value and appeal. These trusted collaborations ensure top-tier service, greater market visibility, and an exceptional experience for both guests and investors.",
            image: "/assets/images/06roi.png"
        },
        {
            title: "Free Holiday Stays",
            description: "Enjoy the perfect mix of leisure and investment with complimentary annual stays at Yoglyf resorts. This exclusive benefit allows you to personally experience the luxury and excellence of your investment.",
            image: "/assets/images/07lux.png"
        },
        {
            title: "Steady Income Stream",
            description: "Maximize financial returns with reliable rental income fueled by the high demand for luxury resorts. With professional property management and consistently high occupancy rates, you benefit from a stable and predictable revenue stream.",
            image: "/assets/images/08.png"
        },
        {
            title: "Professional Management",
            description: "Yoglyf handles all aspects of property management, from maintenance and guest services to daily operations, ensuring a seamless ownership experience. With a dedicated team maintaining your investment, your property retains its long-term value while offering peace of mind.",
            image: "/assets/images/09.png"
        },
        {
            title: "Luxury Ownership",
            description: "Enhance your investment portfolio and lifestyle with ownership in premium luxury resorts in the most sought-after destinations. These iconic properties embody sophistication, prestige, and exclusivity, making your investment a true symbol of luxury living.",
            image: "/assets/images/06roi.png"
        }
    ];

    return (
        <>
        <div className='investor-privileges-top'>
        <section className="investment-section" style={{backgroundColor: '#f7f7f7'}}>
                <div className="investment-container" style={{gap: '50px'}}>
                    { /* Left Section - Title */}
                    <div className="investment-title">
                        <hr className="title-line" />
                        <h1 style={{ marginLeft: "110px" }}>INVESTOR</h1>
                        <h1>PRIVILEGES</h1>
                    </div>

                    {/* Right Section - Description */}
                    <div className="investment-description">
                        <p>
                           Redefining wellness investments, <strong>Yoglyf</strong> creates <strong>world-class retreats</strong> that blend <strong>luxury, rejuvenation, and financial growth.</strong> Built on <strong>trust, innovation, and sustainability</strong>, we offer exclusive opportunities that provide both <strong>lasting value and holistic well-being</strong>. Invest in a haven of serenity and prosperity.
                        </p>
                    </div>
                </div>
            </section>
        </div>
           
            
            <div className="privileges-container">
                {privileges.map((privilege, index) => (
                    <div key={index} className="privilege-card">
                        <div className="content">
                            <h2 className="title">{privilege.title}</h2>
                            <p className="description">{privilege.description}</p>
                        </div>
                        <div className="image-container">
                            <img src={privilege.image || "/placeholder.svg"} alt={privilege.title} />
                        </div>
                    </div>
                ))}
            </div>
            <ConnectWithUs />
            <Footer />
            
        </>

    );
};

export default InvestorPrivileges;