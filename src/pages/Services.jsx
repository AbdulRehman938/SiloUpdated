import React from 'react'
import Hero from '../components/servicee/Hero.jsx'
import { usePageMeta } from '../hooks/usePageMeta'

const servicee = () => {
  usePageMeta(
    'Social, Branding, Web & Content Strategy Agency',
    'Explore services in social media management, content strategy, brand design, UX UI design, website development and motion design for modern brands.'
  )

  return (
    <div className='w-full h-auto'>
      <Hero />
    </div>
  )
}

export default servicee
