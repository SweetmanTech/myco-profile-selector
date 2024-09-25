import getStackClient from './getStackClient'

const setIdentify = async (account, username, pfp, externalUrl) => {
  const stackClient = getStackClient()

  await stackClient.setIdentity(account, {
    identity: username,
    pfpUrl: pfp || '',
    externalUrl: externalUrl || '',
  })
}

export default setIdentify
