import handleTxError from '@/lib/handleTxError'
import { useState } from 'react'
import { toast } from 'react-toastify'
import useConnectSmartWallet from './useConnectSmartWallet'
import { useAccount } from 'wagmi'
import getZoraPfpLink from '@/lib/getZoraPfpLink'

const useProfileConnect = () => {
  const [connecting, setConnecting] = useState(false)
  const { connect } = useConnectSmartWallet()
  const { address } = useAccount()

  const handleConnect = async (result: any) => {
    if (!address) {
      connect()
      return
    }
    setConnecting(true)
    const params = new URLSearchParams()
    params.append('address', address)
    params.append('username', result.displayName || result.username || result.ensName)
    params.append('pfp', getZoraPfpLink(result.avatar) || '')
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

      toast.success('Connected!')
    } catch (error) {
      console.error('Error connnect profile:', error)
      handleTxError(error)
    }

    setConnecting(false)
  }

  return { handleConnect, connecting }
}

export default useProfileConnect
