"use client";

import { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import clsx from 'clsx';
import Link from 'next/link';

const Navlink = () => {
    const [open, setOpen] = useState(false);

 return (
    <>
        <div className={clsx('w-full md:block md:w-auto', { hidden: !open })}>
            <ul className="flex flex-col font-semibold text-l uppercase p-4 mt-4 rounded-b-sm bg-gray-100 md:flex-row md:items-center space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-white">
                <li>
                    <Link href="#home"
                    className='block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="#about"
                    className='block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0'>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="#service"
                    className='block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0'>
                        Service
                    </Link>
                </li>
                <li>
                    <Link href="#contact-us"
                    className='block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0'>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>
        <button onClick={()=> setOpen(!open)} className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-md md-hidden hover:bg-gray-100">
            {!open ? <IoMenu className='size-8'/> : <IoClose className='size-8'/>}
        </button>
        
    </>
    )
}

export default Navlink;
