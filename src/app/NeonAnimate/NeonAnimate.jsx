// components/NeonObserver.jsx

'use client'

import { useEffect } from 'react'

export default function NeonObserver() {

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }

      })

    }, {
      threshold: 0.4
    })

    const elements = document.querySelectorAll('[data-neon]')

    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()

  }, [])

  return null
}