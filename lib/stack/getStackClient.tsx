import { StackClient } from '@stackso/js-core'

const getStackClient = () => {
  const stack = new StackClient({
    apiKey: process.env.STACK_KEY as string,
    pointSystemId: parseInt(process.env.STACK_SYSTEM_ID as string, 10),
  })

  return stack
}

export default getStackClient
