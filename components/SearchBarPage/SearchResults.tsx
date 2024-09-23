import { Avatar, AvatarImage } from '../ui/Avatar'
import { Badge } from '../ui/Badge'
import SocialBadges from './SocialBadges'

const SearchResults = ({ results }) => (
  <div className="absolute w-full mt-2 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden border border-black">
    {results.map((result) => (
      <div key={result.profileId} className="flex items-center p-2">
        <Avatar className="w-10 h-10 mr-3">
          <AvatarImage src={result.avatar} />
        </Avatar>
        <div className="flex-grow text-left">
          <div className="text-sm font-medium text-black">
            {result.displayName || result.username || result.ensName || 'Unknown User'}
          </div>
          <div className="text-xs text-gray-600">{result.description}</div>
          <SocialBadges result={result} />
        </div>
        <Badge variant="secondary" className="ml-2 text-black">
          {result.type}
        </Badge>
      </div>
    ))}
  </div>
)

export default SearchResults
