import { useEffect, useState, useCallback } from 'react'
import { debounce } from 'lodash'

const useProfileSearch = () => {
  const [results, setResults] = useState([])
  const [search, setSearch] = useState('')

  const fetchResults = useCallback(async (query: string) => {
    if (query.length > 0) {
      try {
        const encodedSearch = encodeURIComponent(query)
        const fetchUrl = `/api/profile?address=${encodedSearch}`
        const response = await fetch(fetchUrl)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        setResults([data.zoraProfile])
      } catch (error) {
        console.error('Error fetching profile:', error)
        setResults([])
      }
    } else {
      setResults([])
    }
  }, [])

  const debouncedFetchResults = useCallback(
    (query: string) => {
      const delayedFetch = debounce((q: string) => fetchResults(q), 300)
      delayedFetch(query)
      return () => delayedFetch.cancel()
    },
    [fetchResults],
  )

  useEffect(() => {
    const cancelFetch = debouncedFetchResults(search)
    return cancelFetch
  }, [search, debouncedFetchResults])

  return { results, search, setSearch }
}

export default useProfileSearch
