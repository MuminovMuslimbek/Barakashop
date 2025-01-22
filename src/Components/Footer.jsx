import React from 'react'
import TikTok from '../assets/images/tik-tok.png'
import Insta from '../assets/images/icon/insta.svg'
import Tg from '../assets/images/icon/tg.svg'
import YouTube from '../assets/images/icon/you-tube.svg'

function Footer() {
    return (
        <footer className='sticky flex flex-col items-center dark:border-[#1c1c1e] bg-white dark:bg-[#121212] px-2 py-4 border-t text-black text-center dark:text-white'>
            <h3 className='mb-4 text-md'>Ijtimoiy Tarmoqlarda</h3>
            <ul className='flex items-center gap-4 mb-6'>
                <a target='_blank' href="https://www.instagram.com/musl.imbek_008/"> <img className='w-10' src={Insta} /> </a>
                <a target='_blank' href="https://t.me/muminovmuslimbek_008"> <img className='w-10' src={Tg} /> </a>
                <a target='_blank' href="https://www.tiktok.com/muminovmuslimbek"> <img src={TikTok} className='w-10' /> </a>
                <a target='_blank' href="https://www.youtube.com/@MuslimbekMuminov-k4r"> <img className='w-10' src={YouTube} /> </a>
            </ul>
            <p className='font-medium text-[14px]'>Maxfiylik kelishuvi</p>
            <p className='font-medium text-[14px]'>Foydalanuvchi kelishuvi</p>
            <p className='mt-2 text-[10px] text-gray-400'>«2025© XK MCHJ «Barakashop». Barcha huquqlar himoyalangan»</p>
        </footer>
    )
}

export default React.memo(Footer);