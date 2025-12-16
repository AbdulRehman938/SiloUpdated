import React from 'react'
import Hero from '../components/servicee/Hero.jsx'
import { usePageMeta } from '../hooks/usePageMeta'

const servicee = () => {
  usePageMeta(
    'Our Services | Silo Creative - UGC & Content Production',
    'Discover our comprehensive UGC and content creation services. From strategy to production, we help brands create authentic content that converts.'
  )

  return (
    <div className='w-full h-auto'>
      <Hero />
    </div>
  )
}

export default servicee
