import { Badge } from '../ui/Badge'

const SocialBadge = ({ href, icon: Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Badge variant="outline" className="ml-2 text-black border-black p-1">
      <Icon size={16} />
    </Badge>
  </a>
)

export default SocialBadge
