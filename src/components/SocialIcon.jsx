import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

export default function SocialIcon({isArabic}) {
  return (
    <div className={`fixed top-[50%] ${isArabic ? "right-24" : "left-24"} -translate-y-1/2 text-white flex items-center gap-6 -rotate-90`}>
        <h1 className='text-2xl font-bold'>Follow Us</h1>

        <div className='flex flex-row-reverse gap-4'>
            <Link target='_blank' href={'https://www.facebook.com/profile.php?id=61579836350585'} className='border p-2  w-10 h-10'>
            <Icon className='text-2xl rotate-90 hover:text-red-700 hover:p-0.5 duration-300' icon="bi:facebook" />
            </Link>
            <Link target='_blank' href={'https://www.instagram.com/scannoqa'} className='border p-2  w-10 h-10'>
            <Icon className='text-2xl rotate-90 hover:text-red-700 hover:p-0.5 duration-300' icon="hugeicons:instagram" />
            </Link>
            <Link target='_blank' href={"https://api.whatsapp.com/send/?phone=97466534745&text&type=phone_number&app_absent=0"} className='border p-2  w-10 h-10'>
            <Icon className='text-2xl rotate-90 hover:text-red-700 hover:p-0.5 duration-300' icon="mdi:whatsapp" />
            </Link>
        </div>
        
    </div>
  )
}
