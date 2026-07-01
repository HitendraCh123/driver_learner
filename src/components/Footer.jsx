import { Link } from 'react-router-dom'
import { FaEnvelope, FaArrowRight } from 'react-icons/fa'
import logo from '../assets/logo2.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container">

        {/* Brand column */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <div className="footer-logo-icon"><img src={logo} alt="Driver Learner Logo" /></div>
            {/* <span>Driver<strong>Learner</strong></span> */}
          </Link>
          <p className="footer-tagline">
            Understanding computer drivers doesn't have to be hard. We offer friendly, easy-to-read 
            guides to help you learn exactly how your devices talk to your computer.
          </p>
          <a href="mailto:support@yourdomain.com" className="footer-email">
            <FaEnvelope size={13} />
            support@yourdomain.com
          </a>
          <Link to="/driver-topics" className="footer-explore-btn">
            Start Learning <FaArrowRight size={12} />
          </Link>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Useful Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/driver-topics">Driver Topics</Link></li>
            <li><Link to="/blog">Our Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/ask-us">Ask a Question</Link></li>
          </ul>
        </div>

        {/* Driver Topics */}
        <div className="footer-col">
          <h4>Driver Topics</h4>
          <ul>
            <li><Link to="/driver-topics">Printer Drivers</Link></li>
            <li><Link to="/driver-topics">Audio Drivers</Link></li>
            <li><Link to="/driver-topics">Scanner Drivers</Link></li>
            <li><Link to="/driver-topics">Graphics Drivers</Link></li>
            <li><Link to="/driver-topics">Network Drivers</Link></li>
            <li><Link to="/driver-topics">USB Drivers</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-col">
          <h4>Legal Info</h4>
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
            See All Guides <FaArrowRight size={11} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;