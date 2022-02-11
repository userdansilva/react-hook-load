import { useState } from 'react'

export default function useLoad() {
  interface Load {
    name: string
    isLoading: boolean
  }

  const [loads, setLoads] = useState<Load[]>([])

  function getLoad(name: string) {
    return loads.find(load => load.name == name)
  }

  function isLoading(name: string): boolean {
    const load = getLoad(name)

    if (load) {
      return load.isLoading
    } else {
      setLoads([...loads, { name, isLoading: true }])
      return true
    }
  }

  function stopLoading(name: string) {
    setLoads(
      loads.map(load => {
        if (load.name == name) load.isLoading = false
        return load
      })
    )
  }

  function startLoading(name: string) {
    setLoads(
      loads.map(load => {
        if (load.name == name) load.isLoading = true
        return load
      })
    )
  }

  return {
    isLoading,
    stopLoading,
    startLoading
  }
}
