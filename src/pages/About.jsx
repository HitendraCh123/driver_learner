import { Link } from 'react-router-dom'
import { FaArrowRight, FaBookOpen, FaLightbulb, FaShieldAlt, FaUsers } from 'react-icons/fa'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './About.css'

const values = [
  {
    icon: FaBookOpen,
    color: '#2563eb',
    bg: '#eff6ff',
    title: 'Educational First',
    desc: 'Every guide is crafted for clarity. We focus on simple language that beginners can understand without prior technical knowledge.',
  },
  {
    icon: FaLightbulb,
    color: '#d97706',
    bg: '#fffbeb',
    title: 'Simple Explanations',
    desc: 'We break down complex driver concepts into easy-to-understand explanations with real-world device examples.',
  },
  {
    icon: FaShieldAlt,
    color: '#059669',
    bg: '#ecfdf5',
    title: 'Organized Learning',
    desc: 'Topics are organized by driver category so learners can navigate directly to what they need without confusion.',
  },
  {
    icon: FaUsers,
    color: '#7c3aed',
    bg: '#f5f3ff',
    title: 'For Everyone',
    desc: 'Whether you are a student, a home user, or just curious about how devices work, our content is built for you.',
  },
]

const stats = [
  { num: '14+', label: 'Driver Categories', sub: 'Explained clearly' },
  { num: '10+', label: 'Device Types', sub: 'Covered in guides' },
  { num: 'Easy', label: 'Learning Format', sub: 'Beginner friendly' },
  { num: '100%', label: 'Educational', sub: 'No sales content' },
]

function About() {
  useScrollAnimation()

  return (
    <main className="about-page">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-blob page-hero-blob-1" />
        <div className="page-hero-blob page-hero-blob-2" />
        <div className="container page-hero-inner">
          <span className="section-label" style={{ background: 'rgba(96,165,250,0.2)', color: '#93c5fd' }}>
            About Us
          </span>
          <h1 className="page-hero-title">
            Making driver education <br />
            <span className="page-hero-highlight">simple for everyone</span>
          </h1>
          <p className="page-hero-desc">
            Driver Learner is an educational platform built to explain how computer drivers work
            behind everyday devices. Our guides focus on clear concepts, simple language, and
            organized learning.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-left fade-left">
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">Driver learning made simple for everyone</h2>
              <p className="section-desc">
                Driver Learner is an educational platform built to explain how computer drivers work
                behind everyday devices. Our guides focus on clear concepts, simple language, and
                organized learning for users who want to understand device communication.
              </p>
              <p className="section-desc" style={{ marginTop: '16px' }}>
                From printer and scanner drivers to audio, graphics, USB, Bluetooth, chipset, storage,
                webcam, and network drivers, we help readers explore the basic role of each driver
                without confusing technical terms.
              </p>
              <Link to="/driver-topics" className="btn-primary" style={{ marginTop: '28px' }}>
                Explore Driver Topics <FaArrowRight size={13} />
              </Link>
            </div>
            <div className="mission-right fade-right">
              <div className="mission-visual">
                <div className="mission-blob" />
                <div className="mission-card-grid">
                  {['Printer', 'Audio', 'Graphics', 'Network', 'USB', 'Bluetooth'].map((item) => (
                    <div key={item} className="mission-mini-card">
                      <span>{item}</span>
                      <span className="mission-mini-badge">Guide</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section">
        <div className="container">
          <div className="about-stats-grid stagger">
            {stats.map((s) => (
              <div key={s.label} className="about-stat-card fade-in">
                <span className="about-stat-num">{s.num}</span>
                <span className="about-stat-label">{s.label}</span>
                <span className="about-stat-sub">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Our approach to driver education</h2>
            <p className="section-desc">
              We believe hardware knowledge should be accessible to everyone.
              Here's how we make that happen.
            </p>
          </div>

          <div className="values-grid stagger">
            {values.map((val) => {
              const Icon = val.icon
              return (
                <div key={val.title} className="value-card fade-in">
                  <div className="value-icon" style={{ background: val.bg }}>
                    <Icon size={24} color={val.color} />
                  </div>
                  <h3 className="value-title">{val.title}</h3>
                  <p className="value-desc">{val.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-banner fade-in">
            <h2>Ready to start learning?</h2>
            <p>Browse all driver categories and start understanding how your devices communicate.</p>
            <div className="about-cta-buttons">
              <Link to="/driver-topics" className="btn-primary">
                Explore Driver Topics <FaArrowRight size={13} />
              </Link>
              <Link to="/ask-us" className="about-ask-link">
                Have a question? Ask us →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default About
