import React from "react";
import "./aboutHome.css";

const AboutHome = () => {
    return (
        <>
            <section className="about-home">
                <div className="aboutHome-container">
                    {/* /* Left Section - Title */}
                    <div className="investment-title">
                        <hr className="title-line" />
                        <h1 style={{ marginLeft: "110px" }}>About</h1>
                        <h1>Yoglyf</h1>
                    </div>
                    {/* Right Section - Description */}
                    <div className="about-description">
                        <p>
                            <strong>Yoglyf</strong> is a distinguished developer of luxury wellness retreats, creating exceptional destinations in the world’s most tranquil and sought-after locations. Specializing in developing and managing premier wellness resorts, we offer exclusive investment opportunities through innovative models like sale-leaseback. With a steadfast commitment to innovation, sustainability, and holistic well-being, we transform visionary concepts into world-class retreats of enduring value. Our team of industry experts, in collaboration with esteemed global partners, ensures each project delivers exceptional financial growth and unparalleled lifestyle benefits. At <strong>Yoglyf</strong>, we harmonize luxury retreat development with sophisticated investment potential.
                        </p>
                    </div>
                </div>

                {/* Lower Section with Logo and More Info */}
                <div className="about-lower-section">
                    <div className="about-logo">
                        <img src="/assets/logoWithName.png" alt="Yoglyf Logo" />
                    </div>
                    <div className="about-text">
                        <p>Yoglyf is a premier developer of luxury wellness retreats, crafting serene havens in the world’s most sought-after destinations. We specialize in designing and managing high-end wellness escapes, offering unique investment opportunities through innovative models like sale-leaseback. With a deep commitment to innovation, sustainability, and holistic well-being, we transform visionary concepts into rejuvenating, high-value retreats.
                        </p>
                        <p>
                            Our expert team and global collaborations ensure that every project delivers exceptional growth potential along with unparalleled lifestyle experiences. At Yoglyf, we seamlessly blend the art of luxury wellness retreat development with rewarding investment opportunities, creating timeless sanctuaries that inspire and elevate.
                        </p>
                        <button className="more-details-btn">➜ More Details</button>
                    </div>
                </div>
            </section>
            <section className="investment-section">
                <div className="investment-container">
                    { /* Left Section - Title */}
                    <div className="investment-title">
                        <hr className="title-line" />
                        <h1 style={{ marginLeft: "110px" }}>Investment</h1>
                        <h1>Opportunities</h1>
                    </div>

                    {/* Right Section - Description */}
                    <div className="investment-description">
                        <p>
                            Explore exceptional investment opportunities with Fine Acers through our premium luxury resort developments.
                            Each carefully chosen destination delivers unmatched value and returns. Focused on crafting world-class
                            resorts in prime tourism hubs, we blend innovation, sustainability, and exclusivity to offer both financial
                            security and a prestigious lifestyle. Fine Acers transforms prime locations into iconic and lucrative
                            investments.
                        </p>
                    </div>
                </div>
            </section>
            <div className="responsive-image-container">
                <img src="/assets/images/04.jpeg.jpg" alt="" className="responsive-image" />
            </div>
        </>


    );
};

export default AboutHome;
