import { useCallback, useEffect, useState } from 'react'

const usePageHash = () => {
  const [hash, setHash] = useState('')
  const [scrollFirstTime, setScrollFirstTime] = useState(true)

  const hashChangeHandler = useCallback(() => {
    setHash(window.location.hash)
  }, [])

  useEffect(() => {
    setHash(() => window.location.hash)

    window.addEventListener('hashchange', hashChangeHandler)

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler)
    }
  }, [hashChangeHandler])

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.slice(1)

        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 900)

      setScrollFirstTime(false)
    }
  }, [hash, scrollFirstTime])

  return { hash }
}

export default usePageHash
