import setIdentify from '@/lib/stack/setIdentify'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const address = searchParams.get('address')
  const username = searchParams.get('username')
  const pfp = searchParams.get('pfp')
  const zora = searchParams.get('zora')

  if (!address) {
    return NextResponse.json({ error: 'address is required' }, { status: 400 })
  }

  try {
    await setIdentify(address, username, pfp, zora)
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error connect profile:', error)
    return NextResponse.json({ error: 'Failed to connect profile' }, { status: 500 })
  }
}
