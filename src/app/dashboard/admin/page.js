
"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import React from 'react'

export default function page() {
  const Navigate = useRouter()


  const hendleLogin = (e) => {
    e.preventDefault()

    const User_email = "amirblab@gmail.com"
    const User_password = "@m1R812334"

    const email = e.target?.email?.value;
    const password = e.target?.password?.value;


    if (email === User_email && password === User_password) {
      Navigate.push('/dashboard/admin-home')
    } else {
      alert('your Email and Password are not Match. Please write Correct Email and Password')
    }
  }

  return (
    <div
      style={{
        backgroundImage: "url('/assets/background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-screen h-screen"
    >
      <div className="bg-black/75 w-screen h-screen flex flex-col justify-center items-center">
        <div className="w-[250px] h-[111px]">
          <Link href={'/'}>
            <Image
              className="w-full h-full"
              src={"/assets/LOGO_SCANNOAI.png"}
              width={300}
              height={300}
              alt={"Scanno AI Logo"}
            />
          </Link>
        </div>

        <div className='flex flex-col justify-center items-center w-[30%] py-10 gap-6'>
          <h2 className='text-5xl font-black text-white mb-6'>Scanno AI Assistant</h2>
          <form onSubmit={hendleLogin} className='flex flex-col w-full gap-4'>
            <div>
              <label htmlFor="email" className='text-white text-xl mb-1'>Email</label>
              <input id="email" name='email' type="text" placeholder="example@gmail.com" className="input border-2 border-[#00793D] bg-transparent placeholder:text-white/50 text-white w-full" />
            </div>
            <div>
              <label htmlFor="password" className='text-white text-xl mb-1'>Password</label>
              <input id="password" name='password' type="password" placeholder="password" className="input border-2 border-[#00793D] bg-transparent placeholder:text-white/50 text-white w-full" />
            </div>

            <input type='submit' value={'Login'} className='bg-[#00793D] py-4 mt-4 text-white font-bold rounded-md' />
          </form>
        </div>
      </div>
    </div>
  )
}
