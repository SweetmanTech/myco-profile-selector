import { createConfig, http } from 'wagmi'
import { base } from 'wagmi/chains'
import { coinbaseWallet } from 'wagmi/connectors'

const wagmiConfig = createConfig({
  ssr: true,
  chains: [base],
  connectors: [
    coinbaseWallet({
      appName: 'myco',
      preference: 'smartWalletOnly',
    }),
  ],
  transports: {
    [base.id]: http(),
  } as any,
})

export default wagmiConfig
