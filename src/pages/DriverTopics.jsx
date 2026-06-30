import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowRight, FaChevronDown, FaSearch } from 'react-icons/fa'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { drivers } from '../data/allData'
import './DriverTopics.css'

function DriverTopics() {
  useScrollAnimation()
  const navigate = useNavigate()

  const [searchText, setSearchText] = useState('')
  // All cards open by default — initialized with every driver id
  const [openCards, setOpenCards] = useState(() => new Set(drivers.map((d) => d.id)))

  const filteredDrivers = drivers.filter(
    (d) =>
      d.title.toLowerCase().includes(searchText.toLowerCase()) ||
      d.category.toLowerCase().includes(searchText.toLowerCase()),
  )

  const toggleCard = (id) => {
    setOpenCards((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <main className="topics-page">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-blob page-hero-blob-1" />
        <div className="page-hero-blob page-hero-blob-2" />
        <div className="container page-hero-inner">
          <span className="section-label" style={{ background: 'rgba(96,165,250,0.2)', color: '#93c5fd' }}>
            Driver Topics
          </span>
          <h1 className="page-hero-title">
            All Driver <span className="page-hero-highlight">Learning Topics</span>
          </h1>
          <p className="page-hero-desc">
            Browse 14+ driver categories explained in simple beginner-friendly language.
            Click any card to explore common issues and learning details.
          </p>

          {/* Search */}
          <div className="topics-search">
            <FaSearch size={14} className="topics-search-icon" />
            <input
              type="text"
              placeholder="Search driver topics..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="topics-search-input"
            />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="topics-stats-bar">
        <div className="container topics-stats-inner">
          <div className="topics-stat">
            <strong>14+</strong>
            <span>Driver Categories</span>
          </div>
          <div className="topics-divider" />
          <div className="topics-stat">
            <strong>Easy</strong>
            <span>Learning Format</span>
          </div>
          <div className="topics-divider" />
          <div className="topics-stat">
            <strong>10+</strong>
            <span>Device Types Covered</span>
          </div>
          <div className="topics-divider" />
          <div className="topics-stat">
            <strong>100%</strong>
            <span>Educational Content</span>
          </div>
        </div>
      </div>

      {/* Main Drivers Grid */}
      <section className="drivers-main-section">
        <div className="container">

          {searchText && (
            <p className="search-result-text">
              Showing <strong>{filteredDrivers.length}</strong> result{filteredDrivers.length !== 1 ? 's' : ''} for &quot;<strong>{searchText}</strong>&quot;
            </p>
          )}

          {filteredDrivers.length === 0 ? (
            <div className="no-results">
              <p>No driver topics found for &quot;<strong>{searchText}</strong>&quot;</p>
              <button className="clear-search-btn" onClick={() => setSearchText('')}>Clear search</button>
            </div>
          ) : (
            <div className="drivers-main-grid stagger">
              {filteredDrivers.map((driver) => {
                const Icon = driver.icon
                const isOpen = openCards.has(driver.id)

                return (
                  <div
                    key={driver.id}
                    className={`driver-full-card fade-in ${isOpen ? 'open' : ''}`}
                  >
                    {/* Card Header — click to toggle expand/collapse */}
                    <div
                      className="driver-card-header"
                      onClick={() => toggleCard(driver.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && toggleCard(driver.id)}
                      aria-expanded={isOpen}
                    >
                      <div className="driver-card-icon" style={{ background: driver.bgColor }}>
                        <Icon size={26} color={driver.color} />
                      </div>
                      <div className="driver-card-info">
                        <span className="driver-card-category" style={{ color: driver.color }}>
                          {driver.category}
                        </span>
                        <h3 className="driver-card-title">{driver.title}</h3>
                      </div>
                      <FaChevronDown
                        size={14}
                        className={`driver-card-chevron ${isOpen ? 'rotated' : ''}`}
                      />
                    </div>

                    {/* Card Body — already open on page load */}
                    <div className={`driver-card-body ${isOpen ? 'open' : ''}`}>
                      <p className="driver-card-desc">{driver.description}</p>

                      <div className="driver-card-issues">
                        <h4>Common Learning Topics</h4>
                        <ul>
                          {driver.issues.map((issue, i) => (
                            <li key={i}>
                              <span
                                className="issue-bullet"
                                style={{ background: driver.color }}
                              />
                              {issue}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Navigate to driver-specific detail page */}
                      <button
                        className="driver-card-btn"
                        style={{ background: driver.bgColor, color: driver.color }}
                        onClick={(e) => {
                          e.stopPropagation()
                          navigate(`/driver-topics/${driver.slug}`)
                        }}
                      >
                        Explore Driver Guide <FaArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="topics-cta-section">
        <div className="container">
          <div className="topics-cta fade-in">
            <div className="topics-cta-text">
              <h2>Still have questions about drivers?</h2>
              <p>Send us your question and we'll help you understand it in simple terms.</p>
            </div>
            <Link to="/ask-us" className="btn-primary">
              Ask Us a Question <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

export default DriverTopics
