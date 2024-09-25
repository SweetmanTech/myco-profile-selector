import handleTxError from '@/lib/handleTxError'
import { useState } from 'react'
import { toast } from 'react-toastify'
import useConnectSmartWallet from './useConnectSmartWallet'
import { useAccount } from 'wagmi'
import getZoraPfpLink from '@/lib/getZoraPfpLink'
import connectProfile from '@/lib/connectProfile'

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
    const response: any = await connectProfile(
      address,
      result.displayName || result.username || result.ensName,
      getZoraPfpLink(result.avatar),
      result.address,
    )
    if (response.error) {
      handleTxError(response.error)
      setConnecting(false)
      return
    }
    toast.success('Connected!')
    setConnecting(false)
  }

  return { handleConnect, connecting }
}

export default useProfileConnect
