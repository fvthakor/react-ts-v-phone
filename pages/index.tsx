import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/layout/Sidebar'
import ReactDOM from 'react-dom';
import MobileHeader from '@/components/layout/MobileHeader';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
        <div className="flex flex-shrink-0 transition-all">
          {/* mobile menu remaining */}
            <MobileHeader />
            <Sidebar />
        </div>
      </div>
    </>
  )
}


