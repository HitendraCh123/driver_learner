import { useEffect } from 'react'

// This hook watches all elements with .fade-in, .fade-left, .fade-right classes
// and adds .visible to them when they scroll into view

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe all animated elements on the page
    const elements = document.querySelectorAll('.fade-in, .fade-left, .fade-right')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export default useScrollAnimation
