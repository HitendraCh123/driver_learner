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
    title: 'What Happens When Audio Drivers Fail',
    excerpt: 'Explore the common causes of audio driver failure and how they affect sound hardware communication in different operating systems.',
    readTime: '5 min read',
  },
  {
    id: 6,
    category: 'USB',
    categoryColor: '#047857',
    categoryBg: '#ecfdf5',
    date: 'June 15, 2025',
    title: 'Understanding USB Driver Recognition',
    excerpt: 'Learn why USB devices sometimes go unrecognized and how USB drivers manage communication between external devices and your PC.',
    readTime: '4 min read',
  },
  {
    id: 7,
    category: 'Bluetooth',
    categoryColor: '#4338ca',
    categoryBg: '#eef2ff',
    date: 'June 12, 2025',
    title: 'Bluetooth Driver Basics Explained',
    excerpt: 'A simple guide to understanding how Bluetooth drivers manage wireless communication for headphones, keyboards, and other devices.',
    readTime: '3 min read',
  },
  {
    id: 8,
    category: 'Storage',
    categoryColor: '#9333ea',
    categoryBg: '#faf5ff',
    date: 'June 10, 2025',
    title: 'How Storage Drivers Manage Your Data',
    excerpt: 'Discover the role storage drivers play in managing SSDs, hard drives, and system storage controllers for reliable data access.',
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
            Educational Blog
          </span>
          <h1 className="page-hero-title">
            Driver Insights <span className="page-hero-highlight">&amp; Ideas</span>
          </h1>
          <p className="page-hero-desc">
            Simple articles about driver basics, hardware communication, and device learning topics.
            Written for beginners and curious minds.
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
              <p>No posts found in this category.</p>
              <button className="filter-btn active" onClick={() => setActiveCategory('All')}>
                Show All Posts
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
                        Read Article <FaArrowRight size={12} />
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
                      <h3>Driver Learning</h3>
                      <p>Educational Resource</p>
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
                        <span className="post-arrow">Read ↗</span>
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
              <span className="section-label">Have a question?</span>
              <h2>Want to understand a driver topic better?</h2>
              <p>
                Ask us anything about computer drivers, hardware basics, or device communication —
                we'll help you understand it in simple words.
              </p>
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

export default Blog
