import getStackClient from '@/lib/stack/getStackClient'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const address = searchParams.get('address')

  if (!address) {
    return NextResponse.json({ error: 'Address is required' }, { status: 400 })
  }

  try {
    const response = await fetch(`https://api.myco.wtf/api/profile?address=${address}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    const stackClient = getStackClient()
    const identify = await stackClient.getTags(address, 'custom identity')
    return NextResponse.json({
      ...data,
      connectedZoraProfile: identify?.tagData.identity ? true : false,
    })
  } catch (error) {
    console.error('Error fetching profile:', error)
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 })
  }
}
