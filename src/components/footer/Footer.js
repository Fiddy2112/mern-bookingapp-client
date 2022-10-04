import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <section className="footerSubscription">
        <p className="footerSubscriptionHeading">
          Join the Travel newsletter to service our best vacation deals
        </p>
        <p className="footerSubscriptionText">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="You Email"
              className="footerInput"
            />
            <button className="btnOutline">Subscribe</button>
          </form>
        </div>
      </section>
      <div className="footerLink">
        {/* footer-link-wrapper */}
        <div className="footerLinkWrapper">
          <div className="footerLinkItems">
            <h2>About US</h2>
            <Link to="/">How it Works</Link>
            <Link to="/">Testimonial</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of service</Link>
          </div>
          <div className="footerLinkItems">
            <h2>Contact US</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        {/* footer-link-wrapper */}
        <div className="footerLinkWrapper">
          <div className="footerLinkItems">
            <h2>Video</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footerLinkItems">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">YouTube</Link>
            <Link to="/">Github</Link>
          </div>
        </div>
      </div>
      <section className="socialMedia">
        <div className="socialMediaWrap">
          <div className="footerLogo">
            <Link to="/" className="socialLogo">
              Booking App
            </Link>
          </div>
          <small className="websiteRights">BA © 2021</small>
          <div className="socialIcons">
            {/* Link */}
            <Link
              to="/"
              className="socialIconLink facebook"
              target="_blank"
              arial-label="Facebook"
            >
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </Link>

            <Link
              to="/"
              className="socialIconLink instagram"
              target="_blank"
              arial-label="Instagram"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </Link>

            <Link
              to="/"
              className="socialIconLink linkedin"
              target="_blank"
              arial-label="Linkedin"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </Link>

            <Link
              to="/"
              className="socialIconLink github"
              target="_blank"
              arial-label="Github"
            >
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
