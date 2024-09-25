const connectProfile = async (address, username, pfp, zoraAddress) => {
  const params = new URLSearchParams()
  params.append('address', address)
  params.append('username', username)
  params.append('pfp', pfp)
  params.append('zora', `https://zora.co/@${zoraAddress}`)

  try {
    const response = await fetch(`/api/profile/connect?${params.toString()}`, {
      method: 'GET',
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error connnect profile:', error)
    return { error }
  }
}

export default connectProfile
