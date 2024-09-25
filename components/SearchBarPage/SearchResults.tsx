import useProfileConnect from '@/hooks/useProfileConnect'
import { Avatar, AvatarImage } from '../ui/Avatar'
import getZoraPfpLink from '@/lib/getZoraPfpLink'

const SearchResults = ({ results }) => {
  const { handleConnect, connecting } = useProfileConnect()

  return (
    <div className="absolute w-full mt-2 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden border border-black">
      {results.map((result) => (
        <div key={result.profileId} className="flex items-center p-2">
          <Avatar className="w-10 h-10 mr-3">
            <AvatarImage src={getZoraPfpLink(result.avatar)} />
          </Avatar>
          <div className="flex-grow text-left">
            <div className="text-sm font-medium text-black">
              {result.displayName || result.username || result.ensName || 'Unknown User'}
            </div>
            <div className="text-xs text-gray-600">{result.description}</div>
          </div>
          <button
            type="button"
            className="bg-black text-white rounded-md px-3 py-2"
            onClick={() => handleConnect(result)}
            disabled={connecting}
          >
            {connecting ? 'Connecting' : 'Connect Profile'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default SearchResults
