import { useState } from 'react'
import { FaEnvelope, FaCheckCircle, FaPlus, FaMinus, FaPaperPlane } from 'react-icons/fa'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { faqs } from '../data/allData'
import './AskUs.css'

const contactTopics = [
  'Printer Drivers',
  'Audio Drivers',
  'Scanner Drivers',
  'Graphics Drivers',
  'Network Drivers',
  'Bluetooth Drivers',
  'USB Drivers',
  'Chipset Drivers',
  'Storage Drivers',
  'Webcam Drivers',
  'Keyboard Drivers',
  'Touchpad Drivers',
  'BIOS & UEFI',
  'Other',
]

function AskUs() {
  useScrollAnimation()

  const [openFaq, setOpenFaq] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <main className="askus-page">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-blob page-hero-blob-1" />
        <div className="page-hero-blob page-hero-blob-2" />
        <div className="container page-hero-inner">
          <span className="section-label" style={{ background: 'rgba(96,165,250,0.2)', color: '#93c5fd' }}>
            Contact Us
          </span>
          <h1 className="page-hero-title">
            We're here to <span className="page-hero-highlight">help</span>
          </h1>
          <p className="page-hero-desc">
            Confused about how your devices talk to your computer? Send us your question 
            and we'll give you a simple, clear answer that’s easy to understand.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="askus-main-section">
        <div className="container">
          <div className="askus-grid">

            {/* Left — Info side */}
            <div className="askus-info fade-left">
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title">Let’s clear things up</h2>
              <p className="section-desc">
                We love helping people learn about their tech. If you have a question about 
                a driver or just want to know how your device works, we are here for you.
              </p>

              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <FaEnvelope size={18} color="#2563eb" />
                  </div>
                  <div>
                    <strong>Email Us</strong>
                    <a href="mailto:support@yourdomain.com">support@yourdomain.com</a>
                  </div>
                </div>
              </div>

              <div className="askus-features">
                <div className="askus-feature">
                  <FaCheckCircle size={15} color="#10b981" />
                  <span>Friendly, simple answers</span>
                </div>
                <div className="askus-feature">
                  <FaCheckCircle size={15} color="#10b981" />
                  <span>Help with all device types</span>
                </div>
                <div className="askus-feature">
                  <FaCheckCircle size={15} color="#10b981" />
                  <span>No confusing technical talk</span>
                </div>
                <div className="askus-feature">
                  <FaCheckCircle size={15} color="#10b981" />
                  <span>Beginner-friendly support</span>
                </div>
              </div>
            </div>

            {/* Right — Form side */}
            <div className="askus-form-wrap fade-right">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <FaCheckCircle size={40} color="#10b981" />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>
                    Thanks for asking! We’ve got your question and we'll reply soon 
                    with a clear and helpful answer.
                  </p>
                  <button className="reset-btn" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', topic: '', message: '' }) }}>
                    Ask Another Question
                  </button>
                </div>
              ) : (
                <form className="askus-form" onSubmit={handleSubmit}>
                  <h3 className="form-title">Send a Question</h3>
                  <p className="form-subtitle">Fill out the form below and we'll get back to you with the answer.</p>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="topic">What's your question about?</label>
                    <select
                      id="topic"
                      name="topic"
                      value={form.topic}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose a topic...</option>
                      {contactTopics.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Question</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Ask us anything! Don't worry about being perfect, just tell us what's on your mind."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="form-submit-btn">
                    <FaPaperPlane size={14} />
                    Send Question
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="askus-faq-section">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label">Quick Answers</span>
            <h2 className="section-title">Common questions</h2>
            <p className="section-desc">
              Here are the answers to the questions we get asked the most.
            </p>
          </div>

          <div className="askus-faq-grid stagger">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`faq-item-full fade-in ${openFaq === faq.id ? 'open' : ''}`}
              >
                <button className="faq-q-btn" onClick={() => toggleFaq(faq.id)}>
                  <span className="faq-num-badge">0{faq.id}</span>
                  <span className="faq-q-text">{faq.question}</span>
                  {openFaq === faq.id ? <FaMinus size={13} /> : <FaPlus size={13} />}
                </button>
                <div className={`faq-a-body ${openFaq === faq.id ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

export default AskUs