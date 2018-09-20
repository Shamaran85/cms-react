import React from 'react';
import './Newsletter.css';

const newsletter = () => {
    return (
        <div className="widget-container">
            <div className="newsletter-widget">
                <h3>Get Newsletter</h3>
                <form>
                    <input type="email" placeholder="Your email address..." required="" />
                    <input type="submit" value="Subscribe Now" className="newsletter-btn" />
                </form>
            </div>
        </div>
    )
}

export default newsletter;
