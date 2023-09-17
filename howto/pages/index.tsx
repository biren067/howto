import Image from 'next/image'
import { Inter } from 'next/font/google'
import HowToITQuery from '@/components/HowToITQuery'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <HowToITQuery />
    </div>
  )
}
