import { useParams, Link, useNavigate } from 'react-router-dom'
import { FaArrowRight, FaArrowLeft, FaCheckCircle } from 'react-icons/fa'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { drivers } from '../data/allData'
import { driverDetails } from '../data/driverDetails'
import './DriverDetail.css'

function DriverDetail() {
  useScrollAnimation()
  const { slug } = useParams()
  const navigate = useNavigate()

  // Find driver from allData (for icon, color, etc.)
  const driver = drivers.find((d) => d.slug === slug)
  // Find detail content
  const detail = driverDetails[slug]

  // 404 fallback
  if (!driver || !detail) {
    return (
      <main className="detail-not-found">
        <div className="container">
          <h2>Driver topic not found</h2>
          <p>The driver page you are looking for does not exist.</p>
          <Link to="/driver-topics" className="btn-primary">
            Back to Driver Topics <FaArrowRight size={13} />
          </Link>
        </div>
      </main>
    )
  }

  const Icon = driver.icon

  // Related drivers
  const relatedDrivers = detail.relatedSlugs
    .map((s) => drivers.find((d) => d.slug === s))
    .filter(Boolean)

  return (
    <main className="detail-page">


      {/* ── HERO ── */}
      <section className="detail-hero" style={{ '--accent-color': driver.color, '--accent-bg': driver.bgColor }}>
        <div className="detail-hero-blob detail-hero-blob-1" />
        <div className="detail-hero-blob detail-hero-blob-2" />
        <div className="container detail-hero-inner">

          <div className="detail-hero-left fade-left">
            <span className="section-label detail-hero-label" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
              {detail.heroLabel}
            </span>
            <h1 className="detail-hero-title">{detail.heroTitle}</h1>
            <p className="detail-hero-desc">{detail.heroDesc}</p>

            <div className="detail-hero-btns">
              <a href="#concepts" className="btn-primary">
                Explore Concepts <FaArrowRight size={13} />
              </a>
              <button className="detail-back-btn" onClick={() => navigate('/driver-topics')}>
                <FaArrowLeft size={12} /> All Driver Topics
              </button>
            </div>
          </div>

          <div className="detail-hero-right fade-right">
            <div className="detail-hero-icon-card" style={{ background: driver.bgColor }}>
              <div className="detail-hero-icon" style={{ background: driver.color }}>
                <Icon size={52} color="#fff" />
              </div>
              <h3 style={{ color: driver.color }}>{driver.title}</h3>
              <p>{driver.shortDesc}</p>
              <div className="detail-hero-badge" style={{ background: driver.color + '22', color: driver.color }}>
                {driver.category}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CORE CONCEPTS ── */}
      <section className="detail-concepts-section" id="concepts">
        <div className="container">
          <div className="detail-section-head fade-in">
            <span className="section-tag" style={{ color: driver.color, background: driver.bgColor }}>Core Concepts</span>
            <h2 className="detail-section-title">How {driver.title.toLowerCase()} work</h2>
            <p className="detail-section-desc">
              These concepts explain the role of {driver.title.toLowerCase()} without complex technical wording.
            </p>
          </div>

          <div className="detail-concepts-grid stagger">
            {detail.concepts.map((concept, i) => (
              <div key={i} className="detail-concept-card fade-in">
                <div className="detail-concept-emoji">{concept.icon}</div>
                <h4 style={{ color: driver.color }}>{concept.title}</h4>
                <p>{concept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS – STEPS ── */}
      <section className="detail-steps-section">
        <div className="container">
          <div className="detail-section-head fade-in">
            <span className="section-tag" style={{ color: driver.color, background: driver.bgColor }}>Step by Step</span>
            <h2 className="detail-section-title">How {driver.title.toLowerCase()} setup usually works</h2>
          </div>

          <div className="detail-steps-grid stagger">
            {detail.steps.map((step, i) => (
              <div key={i} className="detail-step-card fade-in">
                <div className="detail-step-num" style={{ background: driver.bgColor, color: driver.color }}>
                  {step.num}
                </div>
                <div className="detail-step-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Flow label */}
          <div className="detail-flow-bar fade-in">
            <div className="detail-flow-label" style={{ borderColor: driver.color + '44', background: driver.bgColor }}>
              <span className="detail-flow-tag" style={{ color: driver.color }}>Driver Flow</span>
              <p style={{ color: driver.color }}>{detail.flowLabel}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON ISSUES ── */}
      <section className="detail-issues-section">
        <div className="container">
          <div className="detail-section-head fade-in">
            <span className="section-tag" style={{ color: driver.color, background: driver.bgColor }}>Common Topics</span>
            <h2 className="detail-section-title">Learning topics for {driver.title.toLowerCase()}</h2>
            <p className="detail-section-desc">
              Explore what these common driver situations look like and what they typically involve.
            </p>
          </div>

          <div className="detail-issues-grid stagger">
            {detail.issues.map((issue, i) => (
              <div key={i} className="detail-issue-card fade-in">
                <div className="detail-issue-num" style={{ color: driver.color }}>{String(i + 1).padStart(2, '0')}</div>
                <div className="detail-issue-content">
                  <h4>{issue.title}</h4>
                  <p>{issue.desc}</p>
                </div>
                <div className="detail-issue-dot" style={{ background: driver.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY POINTS ── */}
      <section className="detail-keypoints-section">
        <div className="container">
          <div className="detail-keypoints-inner fade-in">
            <div className="detail-keypoints-left">
              <span className="section-tag" style={{ color: driver.color, background: driver.bgColor }}>Key Learning Points</span>
              <h2>What to remember about {driver.title.toLowerCase()}</h2>
            </div>
            <div className="detail-keypoints-right">
              {detail.keyPoints.map((point, i) => (
                <div key={i} className="detail-key-item">
                  <FaCheckCircle size={16} color={driver.color} className="key-check" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED DRIVERS ── */}
      {relatedDrivers.length > 0 && (
        <section className="detail-related-section">
          <div className="container">
            <div className="detail-section-head fade-in">
              <span className="section-tag" style={{ color: driver.color, background: driver.bgColor }}>Related Guides</span>
              <h2 className="detail-section-title">Explore related driver topics</h2>
            </div>

            <div className="detail-related-grid stagger">
              {relatedDrivers.map((rel) => {
                const RelIcon = rel.icon
                return (
                  <Link
                    key={rel.id}
                    to={`/driver-topics/${rel.slug}`}
                    className="detail-related-card fade-in"
                  >
                    <div className="detail-related-icon" style={{ background: rel.bgColor }}>
                      <RelIcon size={22} color={rel.color} />
                    </div>
                    <div className="detail-related-info">
                      <span style={{ color: rel.color }}>{rel.category}</span>
                      <h4>{rel.title}</h4>
                      <p>{rel.shortDesc}</p>
                    </div>
                    <FaArrowRight size={13} className="detail-related-arrow" style={{ color: rel.color }} />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="detail-cta-section">
        <div className="container">
          <div className="detail-cta fade-in">
            <div className="detail-cta-text">
              <h2>Still have questions about {driver.title.toLowerCase()}?</h2>
              <p>Send us your question and we'll help you understand it in simple terms.</p>
            </div>
            <div className="detail-cta-btns">
              <Link to="/ask-us" className="btn-primary">
                Ask Us a Question <FaArrowRight size={13} />
              </Link>
              <Link to="/driver-topics" className="detail-cta-outline">
                View All Topics
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default DriverDetail
