import SocialBadge from './SocialBadge'
import { FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa'
import { SiFarcaster } from 'react-icons/si'
import Image from 'next/image'

const SocialBadges = ({ result }) => (
  <div className="mt-1 flex flex-wrap gap-1">
    {result.extension?.links?.twitter && (
      <SocialBadge
        icon={FaTwitter}
        href={`https://twitter.com/${result.extension.links.twitter}`}
      />
    )}
    {result.extension?.links?.instagram && (
      <SocialBadge
        icon={FaInstagram}
        href={`https://instagram.com/${result.extension.links.instagram}`}
      />
    )}
    {result.extension?.links?.farcaster && (
      <SocialBadge
        icon={SiFarcaster}
        href={`https://warpcast.com/${result.extension.links.farcaster}`}
      />
    )}
    {result.extension?.links?.website && (
      <SocialBadge icon={FaGlobe} href={result.extension.links.website} />
    )}
    {result.username && (
      <SocialBadge
        icon={() => <Image src="/images/zorb.png" width={16} height={16} alt="Zora" />}
        href={`https://zora.co/${result.username}`}
      />
    )}
  </div>
)

export default SocialBadges
