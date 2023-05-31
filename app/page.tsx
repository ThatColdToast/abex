'use client';

import Navbar from '@/components/navbar'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen min-w-full bg-slate-500">
      <Head><title>Home</title></Head>
      <Navbar {...{tab:'home'}}/>
      <div className='p-2 flex flex-col justify-center items-center'>
          <div className='flex flex-col p-2 bg-zinc-400 text-black rounded-lg'>
            <p className='text-center text-white'>Text</p>
        </div>
      </div>
    </main>
  )
}
