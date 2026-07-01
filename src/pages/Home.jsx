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
            <span className="hero-badge">● Free Educational Resource</span>
            <h1 className="hero-title">
              Master Computer Drivers<br />
              <span className="hero-highlight">The Easy Way</span>
            </h1>
            <p className="hero-desc">
              Discover beginner-friendly tutorials and step-by-step guides on how printer, audio, 
              graphics, scanner, network, Bluetooth, and chipset drivers connect your hardware to your PC.
            </p>

            {/* Search bar */}
            <div className="hero-search">
              <FaSearch className="search-icon" size={15} />
              <input
                type="text"
                placeholder="Search driver topics (e.g., printer, audio)..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="search-input"
              />
              <button className="search-btn">Search</button>
            </div>

            {/* CTA buttons */}
            <div className="hero-buttons">
              <Link to="/driver-topics" className="btn-primary">
                Explore Driver Guides <FaArrowRight size={13} />
              </Link>
              <Link to="/about" className="btn-outline-dark">
                About Our Mission
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
                <span className="hero-stat-label">Step-by-Step Format</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat-item">
                <span className="hero-stat-num">10+</span>
                <span className="hero-stat-label">Device Types</span>
              </div>
            </div>
            <div className="hero-card-features">
              <div className="hero-feature"><FaCheckCircle color="#10b981" size={13} /> Simple, jargon-free explanations</div>
              <div className="hero-feature"><FaCheckCircle color="#10b981" size={13} /> Fully organized hardware categories</div>
              <div className="hero-feature"><FaCheckCircle color="#10b981" size={13} /> Perfect for beginners and tech students</div>
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
            <span className="section-label">Most Viewed Categories</span>
            <h2 className="section-title">Popular Driver Learning Guides</h2>
            <p className="section-desc">
              Start with our most-read introductory topics covering printer setups, sound settings, scanner connectivity, and display drivers.
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
                    Read Full Guide <FaArrowRight size={11} />
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
            <span className="section-label">Comprehensive Index</span>
            <h2 className="section-title">14+ Complete Driver Categories Explained</h2>
            <p className="section-desc">
              Browse through every essential device driver topic—from local USB peripherals to internal motherboard components and BIOS basics.
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
              View All Topics <FaArrowRight size={13} />
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
              <span className="section-label">Welcome To Driver Learner</span>
              <h2 className="section-title">Making Computer Hardware Simple for Everyone</h2>
              <p className="section-desc">
                Driver Learner is an online educational portal dedicated to explaining how computers communicate with everyday devices. 
                Our conceptual guides avoid complex programming terms to focus purely on helping you understand hardware basics.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">✓</div>
                  <div>
                    <strong>Plain English Explanations</strong>
                    <p>Clear, easy-to-follow definitions for everyday learners.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">✓</div>
                  <div>
                    <strong>Structured Topic Flow</strong>
                    <p>Logically grouped lessons to save you time and confusion.</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn-primary" style={{ marginTop: '8px' }}>
                Learn More About Us <FaArrowRight size={13} />
              </Link>
            </div>

            <div className="stats-right fade-right">
              <div className="stat-box">
                <span className="stat-num">14+</span>
                <span className="stat-label">Driver categories broken down in plain, simple text</span>
              </div>
              <div className="stat-box stat-box-blue">
                <span className="stat-num">Easy</span>
                <span className="stat-label">Beginner-focused curriculum with zero complex coding</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">10+</span>
                <span className="stat-label">Hardware tutorials spanning audio, printers, networks & graphics</span>
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
              <span className="section-label">Helpful Answers</span>
              <h2 className="section-title">Answers to Common Driver Questions</h2>
              <p className="section-desc">
                Find straightforward, quick answers to frequently asked questions about device communication and driver management.
              </p>
              <Link to="/ask-us" className="faq-ask-link">
                Curious about a specific hardware concept? <strong>Ask Your Question Here →</strong>
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
            <span className="section-label">Curated Lesson Plans</span>
            <h2 className="section-title">Featured Device Driver Lessons</h2>
            <p className="section-desc">
              Explore curated educational overviews that dive a bit deeper into hardware roles, device tasks, and basic system behaviors.
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
                    Explore This Category <FaArrowRight size={11} />
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="featured-cta fade-in">
            <Link to="/driver-topics" className="btn-primary">
              View All Driver Lessons <FaArrowRight size={13} />
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
              <h2 className="section-title">Driver Insights & Informative Articles</h2>
              <p className="section-desc">
                Read interesting articles, troubleshooting concepts, and fundamental tips about computer peripherals.
              </p>
            </div>
            <Link to="/blog" className="see-all-link">
              Read All Posts <FaArrowRight size={12} />
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
                  <span className="blog-arrow">Read Article ↗</span>
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
              <h2>Start Learning Driver Basics Today</h2>
              <p>Unlock our library of 14+ driver categories with simplified, easy-to-digest student guides.</p>
            </div>
            <div className="cta-buttons">
              <Link to="/driver-topics" className="btn-primary">
                Explore Driver Topics <FaArrowRight size={13} />
              </Link>
              <Link to="/ask-us" className="cta-ask-link">
                Ask a Question →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home