'use client'

import { Link } from 'react-scroll'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import pfp from '../../public/images/pfp.jpg'
import { useState, useRef, useEffect } from 'react'
import { HiOutlineX } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { LiaDiscord } from "react-icons/lia";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";



export default function Home() {

  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false);
  const menuRef = useRef()

  const divClass1 = isOpen ? 'hidden' : 'flex items-center px-3 py-2 border rounded text-bright-green border-bright-green';
  const divClass2 =  isOpen ? 'translate-x-0' : 'translate-x-full';
  const divClass3 =  isOpen ? 'blur-sm' : '';


  return (
    <>
      <div>

        <nav className="font-roboto font-light pt-10 px-5 md:px-10 flex justify-between items-center relative">
          <Link href='/'>
            <Image alt='LOGO' className='z-50' src={logo} width={100}
            />
          </Link>
          <div className="xl:hidden 2xl:hidden 3xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${divClass1}`}>
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" /></svg>
            </button>
            <div className={`fixed z-40 top-0 right-0 bottom-0 w-full bg-transparent overflow-auto transform ${divClass2} transition-transform duration-200 ease-in-out`}>
              <HiOutlineX className='text-light-gray absolute top-0 right-0 text-xl mt-[75px] mr-10 cursor-pointer' 
                onClick={() => {
                        setIsOpen(false)
                }}
              />
              <ul ref={menuRef} className='font-roboto items-center min-h-screen justify-center p-5 rounded-lg flex flex-col text-xl md:text-2xl'>
                <li>
                  <Link
                    className='cursor-pointer text-xs text-light-gray hover:text-bright-green'
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={100}
                    onClick={() => {
                        setIsOpen(false)
                    }}
                  >
                    <span className='text-bright-green'
                    >
                      01.
                    </span>
                    About
                  </Link>
                </li>
                <li className='mt-5 text-xs text-bright-green'>02.</li>
                <li>
                  <Link className='cursor-pointer text-xs text-light-gray hover:text-bright-green'
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={100}
                    onClick={() => {
                        setIsOpen(false)
                    }}
                  >
                    Projects
                  </Link>
                </li>
                <li className='mt-5 text-xs text-bright-green'>03.</li>
                <li>
                  <Link className='cursor-pointer text-xs text-light-gray hover:text-bright-green'
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={100}
                    onClick={() => {
                        setIsOpen(false)
                    }}
                  >
                    Contact
                  </Link>
                </li>
                <li className='mt-5'>
                  <a className='text-xs text-bright-green border-2 p-3 rounded-md border-solid border-bright-green' href="https://resume.io/r/o0pOBonqI" target='_blank' rel='noopener noreferrer'>Resume</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='animate-dropIn flex gap-2 items-center sm:hidden lg:hidden md:hidden'>
            <ul className='flex md:hidden sm:hidden lg:hidden space-x-12 md:space-x-12 text-xl md:text-2xl'>
              <li className='animate-dropIn'>
                <Link
                  className='cursor-pointer text-xs text-light-gray hover:text-bright-green'
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={100}>
                  <span className='text-bright-green'
                  >
                    01.
                  </span>
                  About
                </Link>
              </li>
              <li className='animate-dropIn2'>
                <Link
                  className='cursor-pointer text-xs text-light-gray hover:text-bright-green'
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={100}>
                  <span className='text-bright-green'
                  >
                    02.
                  </span>
                  Projects
                </Link>
              </li>
              <li className='animate-dropIn3'>
                <Link className='cursor-pointer text-xs text-light-gray hover:text-bright-green'
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}>
                  <span className='text-bright-green'>
                    03.
                  </span>
                  Contact
                </Link>
              </li>
              <li className='animate-dropIn4'> <a className='text-xs text-bright-green border-2 p-3 rounded-md border-solid border-bright-green' href="https://resume.io/r/o0pOBonqI" target='_blank' rel='noopener noreferrer'>Resume</a></li>
            </ul>
          </div>
        </nav>
        <div className={`${divClass3} flex flex-col items-center justify-center`}>

          <div style={{ height: 'calc(100vh - 125px)' }} className="px-36 top-2/3 sm:px-5 md:px-5 text-center flex flex-col place-content-center">
            <h3 className="animate-appearFromBottom1 font-roboto font-thin text-bright-green mb-6 text-base tracking-wide	">Hi, my name is</h3>
            <h1 className="animate-appearFromBottom2 font-sans font-bold text-light-gray text-6xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">Reece Bailey.</h1>
            <h1 className="animate-appearFromBottom3 font-sans font-bold text-slate text-6xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">I build things for the web.</h1>
            <p className='animate-appearFromBottom4 font-roboto font-light text-sm sm:text-xs text-slate mt-5'>As a student at California State University Fullerton, I specialize in building exceptional, accessible, and human-centered digital experiences. With a focus on high performance full-stack applications, I delve into diverse fields like blockchain, machine learning, and database manipulation to create intelligent solutions.</p>
          </div>

          <div id='about' className='mt-10 mb-36 md:grid lg:grid xl:grid 2xl:grid 3xl:grid grid-cols-2 gap-4 min-w-full px-10 md:px-24 lg:px-36 xl:px-56 2xl:px-56 3xl:px-56 4xl:px-56 5xl:px-56 6xl:px-56'>
            <div className='font-roboto text-light-gray text-3xl col-start-1 col-span-1 sm:text-base'>
              <span className='text-bright-green font-bold'>01.</span> <span className='font-bold'> About Me</span><br /><br />
              <h1 className='font-roboto font-light text-sm sm:text-xs text-slate'>
                Hello! My name is Reece, I&apos;m an aspiring software engineer passionate about solving complex problems. My software development journey took off in 2021 when I decided to begin creating ethereum smart contracts and ethereum decentralized applications — turns out hacking together an NFT project taught me a lot about object oriented programming. <br /><br /> Fast Forward today and I have had the privilege to compete in multiple hackathons, honing my skills in rapid prototyping and collaboration. I thrive on the thrill of coding challenges and find joy in crafting efficient and robust software.<br /><br />Beyond coding, I enjoy snowboarding, playing video games, and diving into a good book. Let&apos;s connect and create something amazing together!<br /><br /> Here just a few of the technologies I&apos;ve been working with recently:<br /><br />
              </h1>
              <div className='grid grid-cols-2 gap-4'>
                <div className='flex items-center'>
                  <VscDebugBreakpointDataUnverified className='text-bright-green text-sm' />
                  <p className='ml-2 font-roboto font-light text-xs text-slate'>Node.js</p>
                </div>
                <div className='flex items-center'>
                  <VscDebugBreakpointDataUnverified className='text-bright-green text-sm' />
                  <p className='ml-2 font-roboto font-light text-xs text-slate'>Python</p>
                </div>
                <div className='flex items-center'>
                  <VscDebugBreakpointDataUnverified className='text-bright-green text-sm' />
                  <p className='ml-2 font-roboto font-light text-xs  text-slate'>React</p>
                </div>
                <div className='flex items-center'>
                  <VscDebugBreakpointDataUnverified className='text-bright-green text-sm' />
                  <p className='ml-2 font-roboto font-light text-xs  text-slate'>SQL</p>
                </div>
                <div className='flex items-center'>
                  <VscDebugBreakpointDataUnverified className='text-bright-green text-sm' />
                  <p className='ml-2 font-roboto font-light text-xs  text-slate'>Solidity</p>
                </div>
                <div className='flex items-center'>
                  <VscDebugBreakpointDataUnverified className='text-bright-green text-sm' />
                  <p className='ml-2 font-roboto font-light text-xs  text-slate'>Javascript (ES6+)</p>
                </div>
                <div className='flex items-center'>
                  <VscDebugBreakpointDataUnverified className='text-bright-green text-sm' />
                  <p className='ml-2 font-roboto font-light text-xs  text-slate'>Typescript</p>
                </div>
                <div className='flex items-center'>
                  <VscDebugBreakpointDataUnverified className='text-bright-green text-sm' />
                  <p className='ml-2 font-roboto font-light text-xs  text-slate'>C++</p>
                </div>
              </div>
            </div>
            <div className='sm:p-14 md:p-14 col-start-2 col-span-1 flex justify-center items-center'>
              <Image
                alt='ITS ME REECE'
                className='shadow-offset hover:shadow-offset-hover hover:transform hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 rounded-xl self-center border-4 border-bright-green translate-x-1 translate-y-1'
                width={300}
                src={pfp}
              />
            </div>
          </div>

        </div>

        <div className='sm:hidden md:hidden fixed bottom-10 left-5'>
          <a href="https://discordapp.com/users/unknowntxn" target='_blank'>
            <div className='mb-1 p-4 text-slate hover:text-bright-green hover:transform hover:-translate-y-2 transition-transform duration-300'>
              <LiaDiscord size={20} />
            </div>
          </a>
          <a href="https://github.com/UNKNOWNtxn" target='_blank'>
            <div className='mb-1 p-4 text-slate hover:text-bright-green hover:transform hover:-translate-y-2 transition-transform duration-300'>
              <FiGithub size={20} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/reecebailey-/" target='_blank'>
            <div className='mb-1 p-4 text-slate hover:text-bright-green hover:transform hover:-translate-y-2 transition-transform duration-300'>
              <FiLinkedin size={20} />
            </div>
          </a>
          <a href="https://www.instagram.com/rreecebailey/" target='_blank'>
            <div className='mb-1 p-4 text-slate hover:text-bright-green hover:transform hover:-translate-y-2 transition-transform duration-300'>
              <FiInstagram size={20} />
            </div>
          </a>
          <div className="w-[3%] h-10 bg-slate absolute left-1/2 transform -translate-x-1/2"></div>
        </div>

        <div className='sm:hidden md:hidden fixed bottom-10 text-xs -right-12 text-center leading-none text-light-gray'>
          <p className='font-roboto font-thin rotate-90 mb-28'>Reece.bailey8857@yahoo.com</p>

          <div className=" w-0.5 h-10 bg-slate absolute left-1/2 transform -translate-x-1/2"></div>
        </div>



      </div>
    </>
  )
}
