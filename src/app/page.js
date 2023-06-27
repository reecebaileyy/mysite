'use client'

import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import { useState, useRef, useEffect } from 'react'
import { HiOutlineX } from 'react-icons/hi'

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false);
  const menuRef = useRef()

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, setIsOpen]);

  return (
    <>
      <div className="min-h-screen min-w-screen bg-dark-blue">
        <nav className="font-roboto font-light pt-10 px-5 md:px-10 flex justify-between items-center relative">
          <Link href='/'>
            <Image src={logo} width={100}/>
          </Link>
          <div className="xl:hidden 2xl:hidden 3xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-bright-green border-bright-green">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" /></svg>
            </button>
            <div className={`fixed top-0 right-0 bottom-0 w-full bg-dark-blue overflow-auto transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-200 ease-in-out`}
              onClick={(e) => {
                if (!menuRef.current.contains(e.target)) {
                  setIsOpen(false)
                }
              }}>
              <HiOutlineX className='text-light-gray absolute top-0 right-0 text-xl mt-5 mr-5 cursor-pointer' />
              <ul ref={menuRef} className='font-roboto items-center min-h-screen justify-center p-5 rounded-lg flex flex-col text-xl md:text-2xl'>
                <li className='text-xs text-bright-green'>01.</li>
                <li><Link className='text-sm text-light-gray hover:text-bright-green' href="#About">About</Link></li>
                <li className='mt-5 text-xs text-bright-green'>02.</li>
                <li><Link className='text-sm text-light-gray hover:text-bright-green' href="#Projects">Projects</Link></li>
                <li className='mt-5 text-xs text-bright-green'>03.</li>
                <li><Link className='text-sm text-light-gray hover:text-bright-green' href="#Contact">Contact</Link></li>
                <li className='mt-5'><Link className='text-sm text-bright-green border-2 p-3 rounded-md border-solid border-bright-green' href="#Contact">Resume</Link></li>
              </ul>
            </div>
          </div>
          <div className='animate-dropIn flex gap-2 items-center sm:hidden lg:hidden md:hidden'>
          <ul className='flex md:hidden sm:hidden lg:hidden space-x-12 md:space-x-12 text-xl md:text-2xl'>
            <li className='animate-dropIn'><Link className='text-xs text-light-gray hover:text-bright-green' href="#About"><span className='text-bright-green'>01.</span> About</Link></li>
            <li className='animate-dropIn2'><Link className='text-xs text-light-gray hover:text-bright-green' href="#Projects"><span className='text-bright-green'>02.</span> Projects</Link></li>
            <li className='animate-dropIn3'><Link className='text-xs text-light-gray hover:text-bright-green' href="#Contact"><span className='text-bright-green'>03.</span> Contact</Link></li>
            <li className='animate-dropIn4'><Link className='text-xs text-bright-green border-2 p-3 rounded-md border-solid border-bright-green' href="#Contact">Resume</Link></li>
          </ul>
        </div>
        </nav>
        <div className={`${isOpen ? 'blur-sm' : ''} flex flex-col items-center justify-center pt-24`}>
          <div className="px-36 sm:px-5 md:px-5 text-center">
            <h3 className="animate-appearFromBottom1 font-roboto font-thin text-bright-green mb-6 text-base tracking-wide	">Hi, my name is</h3>
            <h1 className="animate-appearFromBottom2 font-sans font-bold text-light-gray text-6xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">Reece Bailey.</h1>
            <h1 className="animate-appearFromBottom3 font-sans font-bold text-slate text-6xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">I build things for the web.</h1>
            <p className='animate-appearFromBottom4 font-roboto font-light text-sm text-slate mt-5'>As a student at California State University Fullerton, I specialize in building exceptional, accessible, and human-centered digital experiences. With a focus on high performance full-stack applications, I delve into diverse fields like blockchain, machine learning, and database manipulation to create intelligent solutions.</p>
          </div>
        </div>
      </div>
    </>
  )
}
