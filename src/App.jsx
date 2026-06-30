import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import DriverTopics from './pages/DriverTopics'
import DriverDetail from './pages/DriverDetail'
import Blog from './pages/Blog'
import AskUs from './pages/AskUs'
import './App.css'

// Scroll to top on every page change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/driver-topics" element={<DriverTopics />} />
        <Route path="/driver-topics/:slug" element={<DriverDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ask-us" element={<AskUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
