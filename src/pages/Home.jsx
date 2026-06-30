import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaArrowRight, FaPlus, FaMinus, FaCheckCircle } from 'react-icons/fa'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { drivers, blogs, faqs, tickerItems } from '../data/allData'
import './Home.css'

function Home() {
  useScrollAnimation()

  const [searchText, setSearchText] = useState('')
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  // First 4 drivers for the "popular topics" section
  const featuredDrivers = drivers.slice(0, 4)

  return (
    <main className="home-page">

      {/* ============================
          HERO SECTION
          ============================ */}
      <section className="hero-section">
        {/* Animated background blobs */}
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />

        <div className="hero-inner container">
          <div className="hero-content">
            <span className="hero-badge">● Educational Resource</span>
            <h1 className="hero-title">
              Learn Computer Drivers<br />
              <span className="hero-highlight">the Simple Way</span>
            </h1>
            <p className="hero-desc">
              Explore beginner-friendly information about printer, scanner, audio,
              graphics, USB, network, Bluetooth, chipset, and other device driver topics.
            </p>

            {/* Search bar */}
            <div className="hero-search">
              <FaSearch className="search-icon" size={15} />
              <input
                type="text"
                placeholder="Search driver topics..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="search-input"
              />
              <button className="search-btn">Search</button>
            </div>

            {/* CTA buttons */}
            <div className="hero-buttons">
              <Link to="/driver-topics" className="btn-primary">
                Explore Driver Topics <FaArrowRight size={13} />
              </Link>
              <Link to="/about" className="btn-outline-dark">
                About Us
              </Link>
            </div>
          </div>

          {/* Hero right - stats card */}
          <div className="hero-card">
            <div className="hero-stat-card">
              <div className="hero-stat-item">
                <span className="hero-stat-num">14+</span>
                <span className="hero-stat-label">Driver Categories</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat-item">
                <span className="hero-stat-num">Easy</span>
                <span className="hero-stat-label">Learning Format</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat-item">
                <span className="hero-stat-num">10+</span>
                <span className="hero-stat-label">Device Types</span>
              </div>
            </div>
            <div className="hero-card-features">
              <div className="hero-feature"><FaCheckCircle color="#10b981" size={13} /> Simple beginner-friendly guides</div>
              <div className="hero-feature"><FaCheckCircle color="#10b981" size={13} /> Organized by driver category</div>
              <div className="hero-feature"><FaCheckCircle color="#10b981" size={13} /> Clear concepts, no jargon</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          MARQUEE TICKER
          ============================ */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot" /> {item}
            </span>
          ))}
        </div>
      </div>

      {/* ============================
          POPULAR TOPICS SECTION
          ============================ */}
      <section className="popular-section">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label">Popular Topics</span>
            <h2 className="section-title">Popular driver learning guides</h2>
            <p className="section-desc">
              Explore simple educational topics about printer, audio, scanner, and video drivers.
            </p>
          </div>

          <div className="popular-grid stagger">
            {featuredDrivers.map((driver) => {
              const Icon = driver.icon
              return (
                <Link to="/driver-topics" key={driver.id} className="popular-card fade-in">
                  <div className="popular-icon" style={{ background: driver.bgColor }}>
                    <Icon size={30} color={driver.color} />
                  </div>
                  <h3 className="popular-card-title">{driver.title}</h3>
                  <p className="popular-card-desc">{driver.shortDesc}</p>
                  <span className="popular-card-link">
                    Explore Guide <FaArrowRight size={11} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================
          ALL DRIVERS GRID
          ============================ */}
      <section className="all-drivers-section">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label">Driver topics learners explore most</span>
            <h2 className="section-title">14+ Driver categories explained</h2>
            <p className="section-desc">
              Browse all driver topics — from printer and audio to chipset and BIOS.
            </p>
          </div>

          <div className="drivers-grid stagger">
            {drivers.map((driver) => {
              const Icon = driver.icon
              return (
                <Link to="/driver-topics" key={driver.id} className="driver-mini-card fade-in">
                  <div className="driver-mini-icon" style={{ background: driver.bgColor }}>
                    <Icon size={22} color={driver.color} />
                  </div>
                  <span className="driver-mini-title">{driver.title}</span>
                  <FaArrowRight size={10} className="driver-mini-arrow" />
                </Link>
              )
            })}
          </div>

          <div className="drivers-cta fade-in">
            <Link to="/driver-topics" className="btn-primary">
              View All Driver Topics <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================
          STATS + ABOUT SECTION
          ============================ */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-wrapper">
            <div className="stats-left fade-left">
              <span className="section-label">About Driver Learner</span>
              <h2 className="section-title">Driver learning made simple for everyone</h2>
              <p className="section-desc">
                Driver Learner is an educational platform built to explain how computer drivers work
                behind everyday devices. Our guides focus on clear concepts, simple language, and
                organized learning for users who want to understand device communication.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">✓</div>
                  <div>
                    <strong>Simple explanations</strong>
                    <p>Easy guide format for driver basics</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">✓</div>
                  <div>
                    <strong>Organized topics</strong>
                    <p>Clean categories for faster learning</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn-primary" style={{ marginTop: '8px' }}>
                More About Us <FaArrowRight size={13} />
              </Link>
            </div>

            <div className="stats-right fade-right">
              <div className="stat-box">
                <span className="stat-num">14+</span>
                <span className="stat-label">Driver categories explained in simple words</span>
              </div>
              <div className="stat-box stat-box-blue">
                <span className="stat-num">Easy</span>
                <span className="stat-label">Beginner-friendly guides with clear topic flow</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">10+</span>
                <span className="stat-label">Printer, audio, USB, network, graphics and more</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          FAQ SECTION
          ============================ */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-wrapper">
            <div className="faq-left fade-left">
              <span className="section-label">Asked Questions</span>
              <h2 className="section-title">Answers to common driver questions</h2>
              <p className="section-desc">
                Find simple answers about computer drivers, hardware communication,
                and common driver learning topics.
              </p>
              <Link to="/ask-us" className="faq-ask-link">
                Want to understand driver basics? <strong>Ask your question →</strong>
              </Link>
            </div>

            <div className="faq-right fade-right">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`faq-item ${openFaq === faq.id ? 'open' : ''}`}
                >
                  <button className="faq-question" onClick={() => toggleFaq(faq.id)}>
                    <span className="faq-num">0{faq.id}</span>
                    <span>{faq.question}</span>
                    {openFaq === faq.id ? <FaMinus size={13} /> : <FaPlus size={13} />}
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          FEATURED DRIVERS (ACCORDION STYLE)
          ============================ */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label">Driver learning topics</span>
            <h2 className="section-title">Featured driver guides</h2>
            <p className="section-desc">
              Explore educational topics that explain how different computer drivers support
              device communication and hardware behavior.
            </p>
          </div>

          <div className="featured-grid stagger">
            {drivers.slice(0, 6).map((driver) => {
              const Icon = driver.icon
              return (
                <div key={driver.id} className="featured-card fade-in">
                  <div className="featured-card-header">
                    <div className="featured-card-meta">
                      <span className="featured-category" style={{ color: driver.color, background: driver.bgColor }}>
                        {driver.category}
                      </span>
                    </div>
                    <div className="featured-icon-wrap" style={{ background: driver.bgColor }}>
                      <Icon size={26} color={driver.color} />
                    </div>
                  </div>
                  <h3 className="featured-card-title">{driver.title}</h3>
                  <p className="featured-card-desc">{driver.description}</p>
                  <ul className="featured-issues">
                    {driver.issues.map((issue, i) => (
                      <li key={i}>
                        <span className="issue-dot" style={{ background: driver.color }} />
                        {issue}
                      </li>
                    ))}
                  </ul>
                  <Link to="/driver-topics" className="featured-link" style={{ color: driver.color }}>
                    Explore Driver Guide <FaArrowRight size={11} />
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="featured-cta fade-in">
            <Link to="/driver-topics" className="btn-primary">
              View All Driver Topics <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================
          BLOG SECTION
          ============================ */}
      <section className="blog-section">
        <div className="container">
          <div className="section-header-row fade-in">
            <div>
              <span className="section-label">Educational Blog</span>
              <h2 className="section-title">Driver Insights & Ideas</h2>
              <p className="section-desc">
                Simple articles about driver basics, hardware communication, and device learning topics.
              </p>
            </div>
            <Link to="/blog" className="see-all-link">
              See all posts <FaArrowRight size={12} />
            </Link>
          </div>

          <div className="blog-grid stagger">
            {blogs.map((post) => (
              <Link to="/blog" key={post.id} className="blog-card fade-in">
                <div className="blog-card-top">
                  <span
                    className="blog-category"
                    style={{ color: post.categoryColor, background: post.categoryBg }}
                  >
                    {post.category}
                  </span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-read">{post.readTime}</span>
                  <span className="blog-arrow">Read more ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================
          CTA BANNER
          ============================ */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-banner fade-in">
            <div className="cta-text">
              <h2>Start learning driver basics today</h2>
              <p>Explore all 14+ driver categories with simple, beginner-friendly educational guides.</p>
            </div>
            <div className="cta-buttons">
              <Link to="/driver-topics" className="btn-primary">
                Explore Driver Topics <FaArrowRight size={13} />
              </Link>
              <Link to="/ask-us" className="cta-ask-link">
                Ask a question →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
