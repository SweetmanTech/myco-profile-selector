const getZoraPfpLink = (pfp: string) => {
  if (pfp.startsWith('/api/avatar')) return `https://zora.co${pfp}`

  return pfp
}

export default getZoraPfpLink
