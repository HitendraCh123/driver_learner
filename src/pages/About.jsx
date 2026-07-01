import { Link } from 'react-router-dom'
import { FaArrowRight, FaBookOpen, FaLightbulb, FaShieldAlt, FaUsers } from 'react-icons/fa'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './About.css'

const values = [
  {
    icon: FaBookOpen,
    color: '#2563eb',
    bg: '#eff6ff',
    title: 'Simple and Clear',
    desc: 'We skip the confusing tech talk and explain things using everyday words. Anyone can learn how computer parts work here, no tech background needed.',
  },
  {
    icon: FaLightbulb,
    color: '#d97706',
    bg: '#fffbeb',
    title: 'Real-World Examples',
    desc: 'Code can feel boring without real-world examples. We connect the inner workings of computers to the actual devices you use every single day.',
  },
  {
    icon: FaShieldAlt,
    color: '#059669',
    bg: '#ecfdf5',
    title: 'Easy to Find',
    desc: 'No more wasting hours searching through confusing online forums. Everything we write is put into organized groups so you can find your answer in seconds.',
  },
  {
    icon: FaUsers,
    color: '#7c3aed',
    bg: '#f5f3ff',
    title: 'Made for Everyone',
    desc: 'Whether you are trying to fix a quick computer issue or you are just curious about how your machine works behind the scenes, this space is for you.',
  },
]

const stats = [
  { num: '14+', label: 'Main Topics', sub: 'Easy-to-read guides' },
  { num: '10+', label: 'Computer Parts', sub: 'From sound to storage' },
  { num: '100%', label: 'Beginner Friendly', sub: 'No coding skills required' },
  { num: 'Free', label: 'No Annoying Ads', sub: 'Just pure learning' },
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
            Who We Are
          </span>
          <h1 className="page-hero-title">
            Showing you how software <br />
            <span className="page-hero-highlight">talks to your hardware</span>
          </h1>
          <p className="page-hero-desc">
            Driver Learner is a friendly learning space created to show you how device drivers work. 
            We pull back the curtain on how your computer's main system talks to physical parts, 
            offering simple, step-by-step guides for everyday learners.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-left fade-left">
              <span className="section-label">Our Purpose</span>
              <h2 className="section-title">Making computer hardware easy for everyone</h2>
              <p className="section-desc">
                Every single part of your computer needs a "driver" to work properly. Unfortunately, 
                finding a simple explanation about them can be really frustrating. Driver Learner solves 
                this problem by breaking down how your everyday gadgets talk to your computer.
              </p>
              <p className="section-desc" style={{ marginTop: '16px' }}>
                We cover a wide variety of topics, including how printers and scanners print, how your 
                sound and speakers work, screen and graphics updates, USB plug-ins, Bluetooth, storage 
                drives, webcams, and internet connections—all without boring you with heavy manuals.
              </p>
              <Link to="/driver-topics" className="btn-primary" style={{ marginTop: '28px' }}>
                Explore Our Guides <FaArrowRight size={13} />
              </Link>
            </div>
            <div className="mission-right fade-right">
              <div className="mission-visual">
                <div className="mission-blob" />
                <div className="mission-card-grid">
                  {['Printers', 'Sound', 'Graphics', 'Internet', 'USB Plugs', 'Bluetooth'].map((item) => (
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
            <span className="section-label">Our Core Values</span>
            <h2 className="section-title">How we like to teach tech</h2>
            <p className="section-desc">
              We believe that understanding your computer shouldn't require a fancy college degree. 
              Here is how we make learning tech simple and fun.
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
            <h2>Ready to see how your computer actually works?</h2>
            <p>Take a look at our easy topics and learn how your computer parts speak to each other today.</p>
            <div className="about-cta-buttons">
              <Link to="/driver-topics" className="btn-primary">
                Browse All Topics <FaArrowRight size={13} />
              </Link>
              <Link to="/ask-us" className="about-ask-link">
                Have a question? Ask us here →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default About