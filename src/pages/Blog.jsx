import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaClock, FaTag } from 'react-icons/fa'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { blogs } from '../data/allData'
import './Blog.css'

// All blog posts (extended list for the blog page)
const allPosts = [
  ...blogs,
  {
    id: 5,
    category: 'Audio',
    categoryColor: '#7c3aed',
    categoryBg: '#f5f3ff',
    date: 'June 18, 2025',
    title: 'Decoding Sound Subsystem and Audio Driver Glitches',
    excerpt: 'An analytical look into what triggers sound hardware communication breakdowns and how operating system layers respond to sudden audio stack failures.',
    readTime: '5 min read',
  },
  {
    id: 6,
    category: 'USB',
    categoryColor: '#047857',
    categoryBg: '#ecfdf5',
    date: 'June 15, 2025',
    title: 'The Mechanics Behind Universal Serial Bus Handshakes',
    excerpt: 'Demystifying the technical sequence behind device recognition failures and how host controllers manage data streams from external peripherals.',
    readTime: '4 min read',
  },
  {
    id: 7,
    category: 'Bluetooth',
    categoryColor: '#4338ca',
    categoryBg: '#eef2ff',
    date: 'June 12, 2025',
    title: 'Demystifying Wireless RF and Local Stack Management',
    excerpt: 'A foundational guide explaining how low-level wireless protocols coordinate continuous connectivity for input peripherals and media endpoints.',
    readTime: '3 min read',
  },
  {
    id: 8,
    category: 'Storage',
    categoryColor: '#9333ea',
    categoryBg: '#faf5ff',
    date: 'June 10, 2025',
    title: 'How Controller Architecture Safeguards NVMe Data Flow',
    excerpt: 'Uncovering the critical role system controllers play in translating read-write commands between operational storage media and kernel layers.',
    readTime: '6 min read',
  },
]

const categories = ['All', 'Basics', 'Graphics', 'Network', 'Printer', 'Audio', 'USB', 'Bluetooth', 'Storage']

function Blog() {
  useScrollAnimation()

  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = activeCategory === 'All'
    ? allPosts
    : allPosts.filter((p) => p.category === activeCategory)

  // First post is the featured one
  const [featured, ...restPosts] = filteredPosts

  return (
    <main className="blog-page">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-blob page-hero-blob-1" />
        <div className="page-hero-blob page-hero-blob-2" />
        <div className="container page-hero-inner">
          <span className="section-label" style={{ background: 'rgba(96,165,250,0.2)', color: '#93c5fd' }}>
            Knowledge Base
          </span>
          <h1 className="page-hero-title">
            Architectural Insights <span className="page-hero-highlight">&amp; Deep Dives</span>
          </h1>
          <p className="page-hero-desc">
            Explore technical breakdowns regarding hardware abstraction, low-level system protocols, 
            and peripheral device interaction. Tailored for software enthusiasts and system learners.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="blog-filter-bar">
        <div className="container blog-filter-inner">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Content */}
      <section className="blog-main-section">
        <div className="container">

          {filteredPosts.length === 0 ? (
            <div className="no-blog-results">
              <p>No educational entries matching this structural classification.</p>
              <button className="filter-btn active" onClick={() => setActiveCategory('All')}>
                Reset Filter Context
              </button>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featured && (
                <div className="featured-post-card fade-in">
                  <div className="featured-post-content">
                    <div className="featured-post-meta">
                      <span
                        className="blog-cat-badge"
                        style={{ color: featured.categoryColor, background: featured.categoryBg }}
                      >
                        <FaTag size={10} /> {featured.category}
                      </span>
                      <span className="post-date">{featured.date}</span>
                    </div>
                    <h2 className="featured-post-title">{featured.title}</h2>
                    <p className="featured-post-excerpt">{featured.excerpt}</p>
                    <div className="featured-post-footer">
                      <span className="post-read-time">
                        <FaClock size={12} /> {featured.readTime}
                      </span>
                      <Link to="/blog" className="read-more-btn">
                        Examine Reference Module <FaArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                  <div className="featured-post-visual">
                    <div className="featured-visual-blob" />
                    <div className="featured-visual-content">
                      <span
                        className="featured-visual-cat"
                        style={{ color: featured.categoryColor }}
                      >
                        {featured.category}
                      </span>
                      <h3>Systems Engineering</h3>
                      <p>Technical Reference</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Rest of posts */}
              {restPosts.length > 0 && (
                <div className="blog-posts-grid stagger">
                  {restPosts.map((post) => (
                    <Link to="/blog" key={post.id} className="blog-post-card fade-in">
                      <div className="blog-post-top">
                        <span
                          className="blog-cat-badge"
                          style={{ color: post.categoryColor, background: post.categoryBg }}
                        >
                          <FaTag size={10} /> {post.category}
                        </span>
                        <span className="post-date">{post.date}</span>
                      </div>
                      <h3 className="blog-post-title">{post.title}</h3>
                      <p className="blog-post-excerpt">{post.excerpt}</p>
                      <div className="blog-post-footer">
                        <span className="post-read-time">
                          <FaClock size={11} /> {post.readTime}
                        </span>
                        <span className="post-arrow">Analyze ↗</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter / Ask Us CTA */}
      <section className="blog-cta-section">
        <div className="container">
          <div className="blog-cta-banner fade-in">
            <div className="blog-cta-text">
              <span className="section-label">Technical Query Helpdesk</span>
              <h2>Encountering a complex driver architecture hurdle?</h2>
              <p>
                Submit your specific inquiries regarding kernel modules, legacy port assignments, 
                or memory-mapped I/O layers, and our desk will formulate a highly structured concept breakdown.
              </p>
            </div>
            <Link to="/ask-us" className="btn-primary">
              Initiate Technical Inquiry <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Blog