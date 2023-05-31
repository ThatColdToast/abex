'use client';

import Navbar from '@/components/navbar'
import { Database } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Head from 'next/head'
import { useEffect, useState } from 'react';
type Profile = Database["public"]["Tables"]["profiles"]["Row"];
type Message = Database["public"]["Tables"]["messages"]["Row"];

export default function Home() {
  const supabase = createClientComponentClient<Database>()

  const [users, setUsers] = useState<Profile[] | null>(null);
  const [messages, setMessages] = useState<Message[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("profiles").select();
      // const { data } = await supabase.from("friends").select('friender, profiles(id, public_key, updated_at, username)');
      // const friends = data?.map((record) => {record.profiles})
      // const friends = data?.reduce((record) => {record.profiles})
      setUsers(data);
    };

    getData();
  }, []);

  const updateMessages = async () => {
    const me = (await supabase.auth.getSession()).data.session?.user
    const { data } = await supabase.from("messages").select().filter('sender', 'eq', me?.id) // or 'recipient' = me
    setMessages(data);
  };

  return (
    <main className="min-h-screen min-w-full bg-slate-500">
      <Head><title>Home</title></Head>
      <Navbar {...{tab:'home'}}/>

      <div className='flex flex-row min-h-screen min-w-full bg-black'>
        <div className='flex flex-col bg-zinc-500'>
          {
          users ?
            users.map(user => (<button key={user.id} className='m-2 p-2 rounded-lg bg-gray-600'>{user.username}</button>)) :
            <button className='m-2 p-2 rounded-lg bg-gray-600'>Loading...</button>
          }
        </div>

        <div className='p-4 flex flex-grow flex-col bg-zinc-600'>
          <p className='hover:bg-zinc-600'>Jacob - I like Messages Here</p>
          <p className='hover:bg-zinc-600'>Brice - I also like messages here</p>
          <div className='m-2 flex flex-row rounded-lg justify-end bg-zinc-400 text-black'>
            <input className='m-2 p-2 flex flex-grow rounded-lg' />
            <button className='m-2 text-white'>Send</button>
          </div>
        </div>
      </div>
    </main>
  )
}
