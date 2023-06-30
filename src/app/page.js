'use client'

import { Link } from 'react-scroll'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import pfp from '../../public/images/pfp.jpg'
import project1 from '../../public/images/project1.png'
import project2 from '../../public/images/project2.png'
import project3 from '../../public/images/project3.jpg'
import { useState, useRef } from 'react'
import { HiOutlineX } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiInstagram, FiExternalLink } from "react-icons/fi";
import { LiaDiscord } from "react-icons/lia";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";



export default function Home() {

  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false);
  const menuRef = useRef()

  const divClass1 = isOpen ? 'hidden' : 'flex items-center px-3 py-2 border rounded text-bright-green border-bright-green';
  const divClass2 = isOpen ? 'translate-x-0' : 'translate-x-full';
  const divClass3 = isOpen ? 'blur-sm' : '';


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
                <li className='mt-5 text-xs text-bright-green'>01.</li>
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
                    About
                  </Link>
                </li>
                <li className='mt-5 text-xs text-bright-green'>02.</li>
                <li>
                  <Link className='cursor-pointer text-xs text-light-gray hover:text-bright-green'
                    to="projects"
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

        {/* MAIN CONTENT*/}
        <div className={`${divClass3} flex flex-col items-center justify-center`}>

          {/* HEADER */}
          <div style={{ height: 'calc(100vh - 125px)' }} className="lg:w-3/4 xl:w-3/4 2xl:w-3/4 3xl:w-3/4 px-36 top-2/3 sm:px-5 md:px-5 text-center flex flex-col place-content-center">
            <h3 className="animate-appearFromBottom1 font-roboto font-thin text-bright-green mb-6 text-base tracking-wide	">Hi, my name is</h3>
            <h1 className="animate-appearFromBottom2 font-sans font-bold text-light-gray text-6xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">Reece Bailey.</h1>
            <h1 className="animate-appearFromBottom3 font-sans font-bold text-slate text-6xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">I build things for the web.</h1>
            <p className='animate-appearFromBottom4 font-roboto font-light text-sm sm:text-xs text-slate mt-5'>As a student at California State University Fullerton, I specialize in building exceptional, accessible, and human-centered digital experiences. With a focus on high performance full-stack applications, I delve into diverse fields like <span className='text-bright-green'>blockchain</span>, <span className='text-bright-green'>machine learning</span>, and <span className='text-bright-green'>database manipulation</span> to create intelligent solutions.</p>
          </div>

          {/* ABOUT */}
          <div id='about' className='md:mt-0 w-1/2 md:3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 grid grid-cols-2 gap-4 sm:flex md:flex sm:flex-col md:flex-col sm:w-full  md:w-full'>
            <div className='sm:w-full sm:px-10 md:px-10 font-roboto text-light-gray text-3xl sm:text-base'>
              <div className='flex flex-row items-center justify-start mb-8'>
                <h1 className='font-bold sm:text-xl font-roboto text-light-gray text-3xl text-left flex-none'>
                  <span className='text-bright-green'>01.</span> About Me
                </h1>
                <div className="sm:hidden w-1/5 h-[0.04rem] opacity-40 bg-slate my-auto mx-3"></div>
              </div>
              <h1 className='font-roboto font-light text-sm sm:text-xs lg:text-xs md:text-xs text-slate'>
                Hello! My name is Reece, I&apos;m an aspiring software engineer passionate about solving complex problems. My software development journey took off in 2021 when I decided to begin creating ethereum smart contracts and ethereum decentralized applications — turns out hacking together an NFT project taught me a lot about object oriented programming. <br /><br /> Fast Forward today and I have had the privilege to compete in <span className='text-bright-green'>multiple hackathons</span>, honing my skills in <span className='text-bright-green'>rapid prototyping and collaboration</span>. I thrive on the thrill of coding challenges and find joy in <span className='text-bright-green'>crafting efficient and robust software</span>.<br /><br />Beyond coding, I enjoy snowboarding, playing video games, and diving into a good book. Let&apos;s connect and create something amazing together!<br /><br /> Here just a few of the technologies I&apos;ve been working with recently:<br /><br />
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
            <div className='justify-self-center sm:p-14 md:p-14 col-start-2 col-span-1 flex justify-center items-center'>
              <Image
                alt='ITS ME REECE'
                className=' shadow-offset hover:shadow-offset-hover hover:transform hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 rounded-xl self-center border-4 border-bright-green translate-x-1 translate-y-1'
                width={300}
                src={pfp}
              />
            </div>
          </div>

          {/* PROJECTS */}
          <div id='about' className='sm:px-10 md:px-10 md:mt-0 mt-36 w-1/2 lg:w-3/4 xl:w-3/4 2xl:w-3/4 grid grid-cols-8 grid-flow-col place-content-center auto-cols-min gap-4 sm:w-full md:w-full'>
            <div className='h-fit row-start-1 row-span-1 col-start-1 col-span-full w-full flex flex-row items-center'>
              <div className='font-bold sm:text-xl font-roboto text-light-gray text-3xl text-left flex flex-row w-full'>
                <h1 className='text-bright-green'>02.</h1>
                <h1 className='indent-4'> Projects</h1>
                <div className="sm:hidden w-2/12 h-[0.04rem] opacity-40 bg-slate my-auto mx-3"></div>
              </div>
            </div>


            {/* HOT POTATO */}
            <div className='relative sm:w-screen flex justify-center items-center sm:justify-self-center md:justify-self-center row-start-2 row-span-1 col-start-1 col-span-4 sm:col-span-full md:col-span-full sm:px-10 md:px-10 font-roboto text-light-gray text-3xl sm:text-base'>
              <a href="https://onchainhotpotato.vercel.app/" className='h-[60%] w-full sm:h-full md:h-full' target='_blank'>
                <div className='relative h-full w-full'>
                  <Image
                    alt='Hot Potato'
                    className='rounded-md h-full w-full'
                    src={project1}
                  />
                  <div className='rounded-md absolute h-full inset-0 self-center bg-dark-green sm:bg-navy md:bg-navy sm:opacity-95 md:opacity-95 opacity-80 hover:bg-transparent'></div>
                </div>
              </a>
            </div>
            <div className='z-10 sm:w-screen row-start-2 row-span-1 col-start-3 col-span-6 sm:col-span-full md:col-span-full justify-self-center sm:p-14 md:p-14 flex justify-center sm:justify-start md:justify-start items-center'>
              <div className='flex flex-col justify-end sm:items-center sm:justify-start md:justify-start'>
                <p className='py-3 sm:py-0 md:py-0 text-bright-green text-base sm:text-sm lg:text-sm md:text-sm text-right sm:text-center md:text-center'>Featured Project</p>
                <h1 className='py-3 sm:py-0 md:py-0 text-right sm:text-center md:text-center text-light-gray text-2xl font-bold sm:text-base font-roboto'>Onchain Hot Potato</h1>
                <div className="rounded-md bg-navy sm:bg-transparent md:bg-transparent py-5 text-right">
                  <p className='p-5 sm:p-0 md:p-0 text-light-slate text-sm sm:text-xs sm:text-center md:text-center'>
                    A blockchain hot potato game where users mint ERC721 tokens represented by hand images on-chain. Combining the thrill of a traditional hot potato game with blockchain&apos;s collectibility and security for a unique gaming experience.
                  </p>
                </div>
                <p className='text-right sm:text-center md:text-center font-roboto text-light-slate sm:text-xxs md:text-xs tracking-widest'>Node.js Next.js Solidity Hardhat Mongodb</p>
                <div className='flex flex-row items-center justify-end mt-4 sm:justify-center md:justify-center'>
                  <a href="https://github.com/UNKNOWNtxn/Hot-Potato" target='_blank'>
                    <FiGithub className='self-end mr-5 text-light-gray hover:text-bright-green' size={20} />
                  </a>
                  <a href="https://onchainhotpotato.vercel.app/" target='_blank'>
                    <FiExternalLink className='self-end text-light-gray hover:text-bright-green' size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* PROJECT 2 */}
            <div className='relative sm:w-screen flex justify-center items-center sm:justify-self-center md:justify-self-center row-start-3 row-span-1 col-start-4 col-span-5 sm:col-span-full md:col-span-full sm:px-10 md:px-10 font-roboto text-light-gray text-3xl sm:text-base'>
              <a href="https://onchainhotpotato.vercel.app/" className='h-[75%] w-full sm:h-full md:h-full' target='_blank'>
                <div className='relative h-full w-full'>
                  <Image
                    alt='Hot Potato'
                    className='rounded-md h-full w-full'
                    src={project2}
                  />
                  <div className='rounded-md absolute h-full inset-0 self-center bg-dark-green sm:bg-navy md:bg-navy sm:opacity-95 md:opacity-95 opacity-80 hover:bg-transparent'></div>
                </div>
              </a>
            </div>
            <div className='z-10 sm:w-screen row-start-3 row-span-1 col-start-1 col-span-4 sm:col-span-full md:col-span-full justify-self-center sm:p-14 md:p-14 flex justify-center sm:justify-start md:justify-start items-center'>
            <div className='flex flex-col justify-start sm:items-center sm:justify-start md:justify-start'>
                <p className='py-3 sm:py-0 md:py-0 text-bright-green text-base sm:text-sm lg:text-sm md:text-sm text-left sm:text-center md:text-center'>Featured Project</p>
                <h1 className='py-3 sm:py-0 md:py-0 text-left sm:text-center md:text-center text-light-gray text-2xl font-bold sm:text-base font-roboto'>Onchain Hot Potato</h1>
                <div className="rounded-md bg-navy sm:bg-transparent md:bg-transparent py-5 text-right">
                  <p className='p-5 sm:p-0 md:p-0 text-light-slate text-sm sm:text-xs sm:text-center md:text-center'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod mi quis sapien iaculis, id sollicitudin mauris ullamcorper. Sed suscipit, est nec viverra rutrum, ligula elit maximus dui, vitae hendrerit nisl turpis ut mi.
                  </p>
                </div>
                <p className='text-left sm:text-center md:text-center font-roboto text-light-slate sm:text-xxs md:text-xs tracking-widest'>Node.js Next.js Solidity Hardhat Mongodb</p>
                <div className='flex flex-row items-center justify-start mt-4 sm:justify-center md:justify-center'>
                  <a href="https://github.com/UNKNOWNtxn/Hot-Potato" target='_blank'>
                    <FiGithub className='self-start mr-5 text-light-gray hover:text-bright-green' size={20} />
                  </a>
                  <a href="https://onchainhotpotato.vercel.app/" target='_blank'>
                    <FiExternalLink className='self-start text-light-gray hover:text-bright-green' size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* PROJECT 3 */}
            <div className='relative sm:w-screen flex justify-center items-center sm:justify-self-center md:justify-self-center row-start-4 row-span-1 col-start-1 col-span-4 sm:col-span-full md:col-span-full sm:px-10 md:px-10 font-roboto text-light-gray text-3xl sm:text-base'>
              <a href="https://onchainhotpotato.vercel.app/" className='h-[70%] w-full sm:h-full md:h-full' target='_blank'>
                <div className='relative h-full w-full'>
                  <Image
                    alt='Hot Potato'
                    className='rounded-md h-full w-full'
                    src={project3}
                  />
                  <div className='rounded-md absolute h-full inset-0 self-center bg-dark-green sm:bg-navy md:bg-navy sm:opacity-95 md:opacity-95 opacity-80 hover:bg-transparent'></div>
                </div>
              </a>
            </div>
            <div className='z-10 sm:w-screen row-start-4 row-span-1 col-start-3 col-span-6 sm:col-span-full md:col-span-full justify-self-center sm:p-14 md:p-14 flex justify-center sm:justify-start md:justify-start items-center'>
            <div className='flex flex-col justify-end sm:items-center sm:justify-start md:justify-start'>
                <p className='py-3 sm:py-0 md:py-0 text-bright-green text-base sm:text-sm lg:text-sm md:text-sm text-right sm:text-center md:text-center'>Featured Project</p>
                <h1 className='py-3 sm:py-0 md:py-0 text-right sm:text-center md:text-center text-light-gray text-2xl font-bold sm:text-base font-roboto'>Onchain Hot Potato</h1>
                <div className="rounded-md bg-navy sm:bg-transparent md:bg-transparent py-5 text-right">
                  <p className='p-5 sm:p-0 md:p-0 text-light-slate text-sm sm:text-xs sm:text-center md:text-center'>
                  Vivamus et orci vel dolor scelerisque iaculis. Nam auctor felis a ex tincidunt, a consectetur nisi egestas. Nullam sed lorem a neque dictum bibendum eget sed odio. Aliquam erat volutpat. Proin vulputate leo eu sem scelerisque, et tincidunt justo venenatis.
                  </p>
                </div>
                <p className='text-right sm:text-center md:text-center font-roboto text-light-slate sm:text-xxs md:text-xs tracking-widest'>Node.js Next.js Solidity Hardhat Mongodb</p>
                <div className='flex flex-row items-center justify-end mt-4 sm:justify-center md:justify-center'>
                  <a href="https://github.com/UNKNOWNtxn/Hot-Potato" target='_blank'>
                    <FiGithub className='self-end mr-5 text-light-gray hover:text-bright-green' size={20} />
                  </a>
                  <a href="https://onchainhotpotato.vercel.app/" target='_blank'>
                    <FiExternalLink className='self-end text-light-gray hover:text-bright-green' size={20} />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>


        {/* SOCIALS LEFT */}
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

        {/* EMAIL RIGHT */}
        <div className='sm:hidden md:hidden fixed bottom-10 text-xs -right-12 text-center leading-none text-light-gray'>
          <p className='font-roboto font-thin rotate-90 mb-28'>Reece.bailey8857@yahoo.com</p>

          <div className=" w-0.5 h-10 bg-slate absolute left-1/2 transform -translate-x-1/2"></div>
        </div>


        {/* FOOTER */}
        <div className='lg:hidden xl:hidden 2xl:hidden 3xl:hidden inset-x-0 bottom-0 flex flex-row justify-items-center items-center justify-center'>
          <a href="https://discordapp.com/users/unknowntxn" target='_blank'>
            <div className='p-8 text-slate hover:text-bright-green'>
              <LiaDiscord size={20} />
            </div>
          </a>
          <a href="https://github.com/UNKNOWNtxn" target='_blank'>
            <div className='p-8 text-slate hover:text-bright-green'>
              <FiGithub size={20} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/reecebailey-/" target='_blank'>
            <div className='p-8 text-slate hover:text-bright-green'>
              <FiLinkedin size={20} />
            </div>
          </a>
          <a href="https://www.instagram.com/rreecebailey/" target='_blank'>
            <div className='p-8 text-slate hover:text-bright-green'>
              <FiInstagram size={20} />
            </div>
          </a>
        </div>

      </div>
    </>
  )
}
