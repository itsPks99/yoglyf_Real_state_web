import React from 'react';
import Footer from '../Footer/Footer';
import HomeConnectWithUs from '../HOME/ConnectWithUs/homeConnectWithUs';
import '../investment-opportunities/investment-opportunities.css';

const InvestmentOpportunities = () => {
    return (
        <div className="investment-opportunities-container">
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
                            At Yoglyf, we offer investors exclusive access to premium real estate opportunities in
                            prime destinations, designed to deliver strong financial returns and long-term value. Our
                            innovative approach blends sustainability, modern design, and strategic development,
                            ensuring each investment is both secure and profitable. With a keen understanding of
                            market trends, we create high-demand properties that maximize growth potential while
                            maintaining exceptional quality.
                        </p>
                    </div>
                </div>
            </section>
            <section id="investment-opportunities-our-company" className="section split-background">

                <div className="content">
                    <p> We believe that successful investments are built on <strong>trust, transparency, and personalized
                        service</strong>. Our team works closely with investors, providing tailored solutions and in-depth
                        market insights to ensure confident decision-making. From <strong>secure investment models</strong> like
                        sale-leaseback to flexible ownership options, we offer structured opportunities that align with
                        both short-term gains and long-term wealth creation.</p>
                </div>

                <div className="investmentOpportunitiesimage-container">
                    <img src="/assets/images/02.jpeg.jpg" alt="Yoglyf Wellness Resort" />
                </div>
            </section>

            <section id="our-vision" className="section split-background">
                <div className="investmentOpportunitiesimage-container">
                    <img src="/assets/images/04.jpeg.jpg" alt="Our Vision" />
                </div>
                <div className="content">
                    <p> At <strong>Yoglyf</strong>, we don’t just develop properties—we create <strong>high-value investment
                        opportunities</strong> that stand the test of time. With a commitment to excellence and a focus on
                        financial growth, we turn visionary developments into rewarding realities, making every
                        investment a step toward greater prosperity.</p>
                </div>
            </section>
            <HomeConnectWithUs />
            <Footer />
        </div>

    );
};

export default InvestmentOpportunities;