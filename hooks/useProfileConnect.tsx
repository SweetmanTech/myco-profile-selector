import { useState } from 'react'

const useProfileConnect = () => {
  const [connecting, setConnecting] = useState(false)

  const handleConnect = async (result: any) => {
    setConnecting(true)
    const params = new URLSearchParams()
    params.append('address', result.address)
    params.append('username', result.displayName || result.username || result.ensName)
    params.append('pfp', result.avatar || '')
    params.append(
      'zora',
      `https://zora.co/@${result.displayName || result.username || result.ensName}`,
    )

    try {
      const response = await fetch(`/api/profile/connect?${params.toString()}`, {
        method: 'GET',
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      await response.json()
    } catch (error) {
      console.error('Error connnect profile:', error)
    }

    setConnecting(false)
  }

  return { handleConnect, connecting }
}

export default useProfileConnect
