import { Link } from 'react-router-dom'
import { FaEnvelope, FaArrowRight } from 'react-icons/fa'
import logo from '../assets/logo.webp'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container">

        {/* Brand column */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <div className="footer-logo-icon"><img src={logo} alt="" /></div>
            {/* <span>Driver<strong>Learner</strong></span> */}
          </Link>
          <p className="footer-tagline">
            Learn computer drivers in a simple way. Educational guides about software drivers,
            hardware communication, and device-related learning topics.
          </p>
          <a href="mailto:info@driverlearner.com" className="footer-email">
            <FaEnvelope size={13} />
            info@driverlearner.com
          </a>
          <Link to="/driver-topics" className="footer-explore-btn">
            Explore Driver Topics <FaArrowRight size={12} />
          </Link>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/driver-topics">Driver Topics</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/ask-us">Ask Us</Link></li>
          </ul>
        </div>

        {/* Driver Topics */}
        <div className="footer-col">
          <h4>Driver Topics</h4>
          <ul>
            <li><Link to="/driver-topics">Printer Drivers</Link></li>
            <li><Link to="/driver-topics">Audio Drivers</Link></li>
            <li><Link to="/driver-topics">Scanner Drivers</Link></li>
            <li><Link to="/driver-topics">Audio & Video Drivers</Link></li>
            <li><Link to="/driver-topics">Graphics Drivers</Link></li>
            <li><Link to="/driver-topics">Network Drivers</Link></li>
            <li><Link to="/driver-topics">USB Drivers</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/about">Privacy Policy</Link></li>
            <li><Link to="/about">Terms & Conditions</Link></li>
            <li><Link to="/about">Disclaimer</Link></li>
            <li><Link to="/about">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Driver Learner. All rights reserved.</p>
          <Link to="/driver-topics" className="footer-bottom-link">
            Explore Driver Guides <FaArrowRight size={11} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
