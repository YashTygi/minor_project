import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs } from 'fs'

export async function GET() {
  try {
    const jsonDirectory = path.join(process.cwd(), 'src', 'data')
    console.log('Looking for file in:', jsonDirectory)
    
    // Check if directory exists
    try {
      await fs.access(jsonDirectory)
      console.log('Directory exists')
    } catch {
      console.error('Directory does not exist:', jsonDirectory)
      return NextResponse.json(
        { error: 'Data directory not found' },
        { status: 500 }
      )
    }
    
    // Try to read the file
    try {
      const fileContents = await fs.readFile(jsonDirectory + '/customers.json', 'utf8')
      console.log('File read successfully')
      const data = JSON.parse(fileContents)
      return NextResponse.json(data)
    } catch (error) {
      console.error('Error reading or parsing file:', error)
      return NextResponse.json(
        { error: 'Failed to read or parse customer data' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Unexpected error occurred' },
      { status: 500 }
    )
  }
}