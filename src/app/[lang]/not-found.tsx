'use client'

import { useRouter } from 'next/navigation'
// Next

// React
import { useEffect } from 'react'

const NotFound = () => {
  const router = useRouter()

  // Sorry but I didn't find a better option to redirect in the next.js config file
  useEffect(() => {
    router.push('/')
  })

  return null
}

export default NotFound
