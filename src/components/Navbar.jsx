import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaEnvelope } from 'react-icons/fa'
import logo from '../assets/logo.webp'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add shadow to navbar when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon"><img src={logo} alt="" /></div>
          {/* <span className="logo-text">Driver<strong>Learner</strong></span> */}
        </Link>

        {/* Desktop Nav Links */}
        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>About</NavLink>
          <NavLink to="/driver-topics" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>Driver Topics</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>Blog</NavLink>

          {/* Mobile only items */}
          <div className="mobile-extras">
            <a href="mailto:info@driverlearner.com" className="nav-link">info@driverlearner.com</a>
            <Link to="/ask-us" className="ask-us-btn" onClick={closeMenu}>Ask Us</Link>
          </div>
        </nav>

        {/* Desktop Right Side */}
        <div className="navbar-right">
          <a href="mailto:info@driverlearner.com" className="navbar-email">
            <FaEnvelope size={13} />
            info@driverlearner.com
          </a>
          <Link to="/ask-us" className="ask-us-btn">Ask Us</Link>
        </div>

        {/* Mobile hamburger button */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile overlay backdrop */}
      {menuOpen && <div className="menu-backdrop" onClick={closeMenu} />}
    </header>
  )
}

export default Navbar
