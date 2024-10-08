'use client'

import { Link } from 'react-scroll'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import pfp from '../../public/images/pfp.png'
import project1 from '../../public/images/project1.png'
import project2 from '../../public/images/project2.png'
import project3 from '../../public/images/project3.jpg'
import { useState, useRef } from 'react'
import { HiOutlineX } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiInstagram, FiExternalLink } from "react-icons/fi";
import { LiaDiscord } from "react-icons/lia";
import { AiOutlineFolder } from "react-icons/ai";
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
          <a href='/'>
            <Image alt='LOGO' className='z-50' src={logo} width={100}
            />
          </a>
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
                  <a className='text-xs text-bright-green border-2 p-3 rounded-md border-solid border-bright-green' href="https://www.reecebailey.com/images/RESUME.pdf" target='_blank' rel='noopener noreferrer'>Resume</a>
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
              <li className='animate-dropIn4'> <a className='text-xs text-bright-green border-2 p-3 rounded-md border-solid border-bright-green' href="https://www.reecebailey.com/images/RESUME.pdf" target='_blank' rel='noopener noreferrer'>Resume</a></li>
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
          <div id='about' className='md:mt-0 sm:mb-64 mt-24 w-1/2 lg:w-3/4 xl:w-3/4 2xl:w-3/4 grid grid-cols-2 gap-4 sm:flex md:flex sm:flex-col md:flex-col sm:w-full  md:w-full'>
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
                className='shadow-offset hover:shadow-offset-hover hover:transform hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 rounded-xl self-center border-4 border-bright-green translate-x-1 translate-y-1'
                width={300}
                src={pfp}
              />
            </div>
          </div>

          {/* PROJECTS */}
          <div id='projects' className='sm:w-full md:w-full sm:px-10 md:px-10 md:mt-0 mt-36 sm:mt-0 w-1/2 lg:w-3/4 xl:w-3/4 2xl:w-3/4 grid grid-cols-8 grid-flow-col place-content-center auto-cols-min gap-4 '>
            <div className='h-fit row-start-1 row-span-1 col-start-1 col-span-full w-full flex flex-row items-center'>
              <div className='font-bold sm:text-xl font-roboto text-light-gray text-3xl text-left flex flex-row w-full'>
                <h1 className='text-bright-green'>02.</h1>
                <h1 className='indent-4'> Projects</h1>
                <div className="sm:hidden w-2/12 h-[0.04rem] opacity-40 bg-slate my-auto mx-3"></div>
              </div>
            </div>


            {/* HOT POTATO */}
            <div className='relative sm:w-screen flex justify-center items-center sm:justify-self-center md:justify-self-center row-start-2 row-span-1 col-start-1 col-span-5 sm:col-span-full md:col-span-full sm:px-10 md:px-10 font-roboto text-light-gray text-3xl sm:text-base'>
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
            <div className='z-10 sm:w-screen row-start-2 row-span-1 col-start-3 col-span-6 sm:col-span-full md:col-span-full justify-self-center sm:px-14 md:px-14 sm:py-4 md:py-4 flex justify-center sm:justify-start md:justify-start items-center'>
              <div className='flex flex-col justify-end sm:items-center sm:justify-start md:justify-start'>
                <p className='py-3 sm:py-0 md:py-0 text-bright-green text-base sm:text-sm lg:text-sm md:text-sm text-right sm:text-center md:text-center'>Featured Project</p>
                <h1 className='py-3 sm:py-0 md:py-0 text-right sm:text-center md:text-center text-light-gray text-2xl font-bold sm:text-base font-roboto'>Onchain Hot Potato</h1>
                <div className="rounded-md bg-navy sm:bg-transparent md:bg-transparent py-5 text-right">
                  <p className='p-5 sm:p-0 md:p-0 text-light-slate text-sm sm:text-xs sm:text-center md:text-center'>
                    A blockchain hot potato game where users mint ERC721 tokens represented by hand images on-chain. Combining the thrill of a traditional hot potato game with blockchain&apos;s collectibility and security for a unique gaming experience.
                  </p>
                </div>
                <p className='text-right sm:text-center md:text-center font-roboto text-light-slate sm:text-xs md:text-xs tracking-widest'>Next.js Solidity Hardhat Mongodb Prisma</p>
                <div className='flex flex-row items-center justify-end mt-4 sm:justify-center md:justify-center'>
                  <a href="https://github.com/reecebaileyy/Hot-Potato" target='_blank'>
                    <FiGithub className='self-end mr-5 text-light-gray hover:text-bright-green' size={20} />
                  </a>
                  <a href="https://onchainhotpotato.vercel.app/" target='_blank'>
                    <FiExternalLink className='self-end text-light-gray hover:text-bright-green' size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* SORTIFY */}
            <div className='relative sm:w-screen flex justify-center items-center sm:justify-self-center md:justify-self-center row-start-3 row-span-1 col-start-4 col-span-5 sm:col-span-full md:col-span-full sm:px-10 md:px-10 font-roboto text-light-gray text-3xl sm:text-base'>
              <a href="https://sortifyyy.vercel.app/" className='h-[75%] w-full sm:h-full md:h-full' target='_blank'>
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
            <div className='z-10 sm:w-screen row-start-3 row-span-1 col-start-1 col-span-5 sm:col-span-full md:col-span-full justify-self-center sm:px-14 md:px-14 sm:py-4 md:py-4 flex justify-center sm:justify-start md:justify-start items-center'>
              <div className='flex flex-col justify-start sm:items-center sm:justify-start md:justify-start'>
                <p className='py-3 sm:py-0 md:py-0 text-bright-green text-base sm:text-sm lg:text-sm md:text-sm text-left sm:text-center md:text-center'>Featured Project</p>
                <h1 className='py-3 sm:py-0 md:py-0 text-left sm:text-center md:text-center text-light-gray text-2xl font-bold sm:text-base font-roboto'>Sortify</h1>
                <div className="rounded-md bg-navy sm:bg-transparent md:bg-transparent py-5 text-right">
                  <p className='p-5 sm:p-0 md:p-0 text-light-slate text-sm sm:text-xs sm:text-center md:text-center'>
                    Sortify is a powerful sorting algorithm visualizer that allows users to observe and understand various sorting algorithms in action, providing a comprehensive tool for learning and analyzing the efficiency of different sorting techniques.
                  </p>
                </div>
                <p className='text-left sm:text-center md:text-center font-roboto text-light-slate sm:text-xs md:text-xs tracking-widest'>Next.js Javascript(ES6+) </p>
                <div className='flex flex-row items-center justify-start mt-4 sm:justify-center md:justify-center'>
                  <a href="https://github.com/reecebaileyy/sortify" target='_blank'>
                    <FiGithub className='self-start mr-5 text-light-gray hover:text-bright-green' size={20} />
                  </a>
                  <a href="https://sortifyyy.vercel.app/" target='_blank'>
                    <FiExternalLink className='self-start text-light-gray hover:text-bright-green' size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* ROLODEX HASH TABLE */}
            <div className='relative sm:w-screen flex justify-center items-center sm:justify-self-center md:justify-self-center row-start-4 row-span-1 col-start-1 col-span-5 sm:col-span-full md:col-span-full sm:px-10 md:px-10 font-roboto text-light-gray text-3xl sm:text-base'>
              <a href="https://github.com/reecebaileyy/CPSC-131-Labs/tree/main/P4%20-%20Rolodex%20Hash%20Table" className='h-[80%] w-full sm:h-full md:h-full' target='_blank'>
                <div className='relative h-full w-full'>
                  <Image
                    alt='ROLODEX'
                    className='rounded-md h-full w-full'
                    src={project3}
                  />
                  <div className='rounded-md absolute h-full inset-0 self-center bg-dark-green sm:bg-navy md:bg-navy sm:opacity-95 md:opacity-95 opacity-80 hover:bg-transparent'></div>
                </div>
              </a>
            </div>
            <div className='z-10 sm:w-screen row-start-4 row-span-1 col-start-3 col-span-6 sm:col-span-full md:col-span-full justify-self-center sm:px-14 md:px-14 sm:py-4 md:py-4 flex justify-center sm:justify-start md:justify-start items-center'>
              <div className='flex flex-col justify-end sm:items-center sm:justify-start md:justify-start'>
                <p className='py-3 sm:py-0 md:py-0 text-bright-green text-base sm:text-sm lg:text-sm md:text-sm text-right sm:text-center md:text-center'>Featured Project</p>
                <h1 className='py-3 sm:py-0 md:py-0 text-right sm:text-center md:text-center text-light-gray text-2xl font-bold sm:text-base font-roboto'>Rolodex Hash Table</h1>
                <div className="rounded-md bg-navy sm:bg-transparent md:bg-transparent py-5 text-right">
                  <p className='p-5 sm:p-0 md:p-0 text-light-slate text-sm sm:text-xs sm:text-center md:text-center'>
                    Crafted a C++ program featuring a robust rolodex hash table employing efficient hashing functions. This project enables quick storage and retrieval of contacts, showcasing my proficiency in data structures and hashing algorithms.
                  </p>
                </div>
                <p className='text-right sm:text-center md:text-center font-roboto text-light-slate sm:text-xs md:text-xs tracking-widest'>C++ Makefile</p>
                <div className='flex flex-row items-center justify-end mt-4 sm:justify-center md:justify-center'>
                  <a href="https://github.com/reecebaileyy/CPSC-131-Labs/tree/main/P4%20-%20Rolodex%20Hash%20Table" target='_blank'>
                    <FiGithub className='self-end  text-light-gray hover:text-bright-green' size={20} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* MORE PROJECTS */}
          <div className='sm:w-full md:w-full sm:px-0 md:px-10 md:mt-0 mt-36 sm:mt-0 w-1/2 lg:w-3/4 xl:w-3/4 2xl:w-3/4 flex flex-col items-center justify-center'>
            <h1 className='font-bold sm:text-xl font-roboto text-light-gray text-3xl text-center mb-10 sm:mb-0'>More of my Projects</h1>
            <h3 className='md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden text-bright-green font-roboto text-xs'>scroll right for more</h3>
            <div className='sm:overflow-x-auto sm:snap-x sm:snap-mandatory grid grid-rows-3 grid-cols-3 md:grid-cols-2 md:grid-rows-5 sm:flex sm:flex-row gap-3 w-full justify-items-center content-center sm:p-5'>
              <a className='bg-navy flex flex-col items-start justify-start sm:snap-center transform transition-transform duration-200 hover:-translate-y-1 row-start-1 row-span-1 md:col-start-2 md:col-span-1 min-w-full min-h-full p-5' href='https://pivot-agency.com/' target='_blank'>
                <div className='flex justify-between items-center w-full'>
                  <AiOutlineFolder className='text-bright-green self-center' size={40} />
                  <FiExternalLink className='cursor-pointer text-light-gray hover:text-bright-green self-center' size={20} />
                </div>
                <h1 className='py-4 mt-2 text-light-gray font-bold text-sm2 sm:text-sm lg:text-sm md:text-sm font-roboto'>Sentiment Analysis Tool</h1>
                <p className='text-light-gray text-xs font-roboto font-light '>Used natural language processing (NLP) techniques to extract and identify the sentiment behind given textual data. The model is capable of analyzing the sentiment in real-time and can be adaptable to various domains, from product reviews to social media content.</p>
                <p className='mt-auto py-2 font-roboto text-light-slate text-labels tracking-widest'>Python TensorFlow PyTorch Scikit-learn NLTK SpaCy</p>
              </a>
              <a className='bg-navy flex flex-col items-start justify-start sm:snap-center transform transition-transform duration-200 hover:-translate-y-1 row-start-1 row-span-1 md:row-start-1 md:col-start-1 md:col-span-1 min-w-full min-h-full p-5' href='https://github.com/reecebaileyy/CPSC-131-Labs/tree/main/P3%20-%20Palindrome%20Detector' target='_blank'>
                <div className='flex justify-between items-center w-full'>
                  <AiOutlineFolder className='text-bright-green self-center' size={40} />
                  <FiExternalLink className='cursor-pointer text-light-gray hover:text-bright-green self-center' size={20} />
                </div>
                <h1 className='py-4 mt-2 text-light-gray font-bold text-sm2 sm:text-sm lg:text-sm md:text-sm font-roboto'>Palindrome Detector</h1>
                <p className='text-light-gray text-xs font-roboto font-light '>Developed a sleek C++ program that instantly identifies palindromes—words or phrases that read the same both ways. The efficient console application showcases my strong C++ skills and provides a handy tool for language enthusiasts.</p>
                <p className='mt-auto py-2 font-roboto text-light-slate text-labels tracking-widest'>C++ Makefile</p>
              </a>
              <a className='bg-navy flex flex-col items-start justify-start sm:snap-center transform transition-transform duration-200 hover:-translate-y-1 row-start-1 sm:row-start-1  md:row-start-2 row-span-1 md:col-start-1 md:col-span-1 min-w-full min-h-full p-5' href='https://github.com/reecebaileyy/CPSC-121-Labs/tree/main/TUFFLE%20PROJECT' target='_blank'>
                <div className='flex justify-between items-center w-full'>
                  <AiOutlineFolder className='text-bright-green self-center' size={40} />
                  <FiExternalLink className='cursor-pointer text-light-gray hover:text-bright-green self-center' size={20} />
                </div>
                <h1 className='py-4 mt-2 text-light-gray font-bold text-sm2 sm:text-sm lg:text-sm md:text-sm font-roboto'>Wordle (Backend)</h1>
                <p className='text-light-gray text-xs font-roboto font-light '>Created a simple backend infrastructure in C++ for a wordle game that mimics the original New York Times Wordle game </p>
                <p className='mt-auto py-2 font-roboto text-light-slate text-labels tracking-widest'>C++ Makefile</p>
              </a>
              <a className='bg-navy flex flex-col items-start justify-start sm:snap-center transform transition-transform duration-200 hover:-translate-y-1 row-start-2 sm:row-start-1 md:row-start-3 row-span-1 md:col-start-1 md:col-span-1 min-w-full min-h-full p-5' href='https://github.com/reecebaileyy/CPSC-131-Labs/tree/main/P2%20-%20BookStore' target='_blank'>
                <div className='flex justify-between items-center w-full'>
                  <AiOutlineFolder className='text-bright-green self-center' size={40} />
                  <FiExternalLink className='cursor-pointer text-light-gray hover:text-bright-green self-center' size={20} />
                </div>
                <h1 className='py-4 mt-2 text-light-gray font-bold text-sm2 sm:text-sm lg:text-sm md:text-sm font-roboto'>Bookstore Program</h1>
                <p className='text-light-gray text-xs font-roboto font-light '> C++ application utilizing doubly linked lists and sorting algorithms to manage a virtual bookstore. Allows users to add, search, and remove books, ensuring an organized collection by title, author, or genre.</p>
                <p className='mt-auto py-2 font-roboto text-light-slate text-labels tracking-widest'>C++ Makefile</p>
              </a>
              <a className='bg-navy flex flex-col items-start justify-start sm:snap-center transform transition-transform duration-200 hover:-translate-y-1 row-start-2 sm:row-start-1 md:row-start-3 row-span-1 md:col-start-2 md:col-span-1 min-w-full min-h-full p-5' href='https://www.bobo.vision/' target='_blank'>
                <div className='flex justify-between items-center w-full'>
                  <AiOutlineFolder className='text-bright-green self-center' size={40} />
                  <FiExternalLink className='cursor-pointer text-light-gray hover:text-bright-green self-center' size={20} />
                </div>
                <h1 className='py-4 mt-2 text-light-gray font-bold text-sm2 sm:text-sm lg:text-sm md:text-sm font-roboto'>Bobo Vision NFT Project</h1>
                <p className='text-light-gray text-xs font-roboto font-light '>A decentralized application that empowers users to mint NFTs, engage in chat, compare rankings and explore their profile. The website encompasses advanced database manipulation features.</p>
                <p className='mt-auto py-2 font-roboto text-light-slate text-labels tracking-widest'>Solidity Mongodb Next.js Javascript(ES6+) Prisma </p>
              </a>
              <a className='bg-navy flex flex-col items-start justify-start sm:snap-center transform transition-transform duration-200 hover:-translate-y-1 row-start-2 sm:row-start-1 md:row-start-2 row-span-1 md:col-start-2 md:col-span-1 min-w-full min-h-full p-5' href='https://github.com/reecebaileyy/CPSC-131-Labs/tree/main/P1%20-%20Vector' target='_blank'>
                <div className='flex justify-between items-center w-full'>
                  <AiOutlineFolder className='text-bright-green self-center' size={40} />
                  <FiExternalLink className='cursor-pointer text-light-gray hover:text-bright-green self-center' size={20} />
                </div>
                <h1 className='py-4 mt-2 text-light-gray font-bold text-sm2 sm:text-sm lg:text-sm md:text-sm font-roboto'>Custom Vector Program</h1>
                <p className='text-light-gray text-xs font-roboto font-light '>Developed a C++ program creating a vector from scratch, demonstrating dynamic array resizing and essential vector operations. The custom vector supports insertion, deletion, and retrieval, showcasing my proficiency in C++ and data structure design</p>
                <p className='mt-auto py-2 font-roboto text-light-slate text-labels tracking-widest'>C++ Makefile</p>
              </a>
              <a className='bg-navy flex flex-col items-start justify-start sm:snap-center transform transition-transform duration-200 hover:-translate-y-1 row-start-3 md:row-start-4 sm:row-start-1 row-span-1 md:col-start-1 md:col-span-1 min-w-full min-h-full p-5' href='https://github.com/reecebaileyy/Sentiment-Analysis-for-Text' target='_blank'>
                <div className='flex justify-between items-center w-full'>
                  <AiOutlineFolder className='text-bright-green self-center' size={40} />
                  <FiExternalLink className='cursor-pointer text-light-gray hover:text-bright-green self-center' size={20} />
                </div>
                <h1 className='py-4 mt-2 text-light-gray font-bold text-sm2 sm:text-sm lg:text-sm md:text-sm font-roboto'>Pivot Marketing Agencies Website</h1>
                <p className='text-light-gray text-xs font-roboto font-light '>Contributed to the Pivot Marketing Agency website by adding firewalls, form submission, and UI/UX additions</p>
                <div className='mt-auto py-2 font-roboto text-light-slate text-labels tracking-widest'>Wordpress SQL Python</div>

              </a>
              <a className='bg-navy flex flex-col items-start justify-start sm:snap-center transform transition-transform duration-200 hover:-translate-y-1 row-start-3 md:row-start-4 sm:row-start-1 row-span-1 md:col-start-2 md:col-span-1 min-w-full min-h-full p-5' href='https://github.com/reecebaileyy/Weather-Data-Analysis' target='_blank'>
                <div className='flex justify-between items-center w-full'>
                  <AiOutlineFolder className='text-bright-green self-center' size={40} />
                  <FiExternalLink className='cursor-pointer text-light-gray hover:text-bright-green self-center' size={20} />
                </div>
                <h1 className='py-4 mt-2 text-light-gray font-bold text-sm2 sm:text-sm lg:text-sm md:text-sm font-roboto'>Weather Data Analysis</h1>
                <p className='text-light-gray text-xs font-roboto font-light '>This script is a Python program that fetches weather forecast data for a specific city from the OpenWeatherMap API, processes the data, and then plots the temperature trends using matplotlib and seaborn libraries.</p>
                <p className='mt-auto py-2 font-roboto text-light-slate text-labels tracking-widest'>Python Pandas Seaborn Matplotlib</p>
              </a>
              <a className='bg-navy flex flex-col items-start justify-start sm:snap-center transform transition-transform duration-200 hover:-translate-y-1 row-start-3 md:row-start-5 sm:row-start-1 row-span-1 md:col-start-1 md:col-span-1 min-w-full min-h-full p-5' href='https://github.com/reecebaileyy/Image-Classification' target='_blank'>
                <div className='flex justify-between items-center w-full'>
                  <AiOutlineFolder className='text-bright-green self-center' size={40} />
                  <FiExternalLink className='cursor-pointer text-light-gray hover:text-bright-green self-center' size={20} />
                </div>
                <h1 className='py-4 mt-2 text-light-gray font-bold text-sm2 sm:text-sm lg:text-sm md:text-sm font-roboto'>Image Classification</h1>
                <p className='text-light-gray text-xs font-roboto font-light '>This is a Python implementation of a neural network model using TensorFlow/Keras for classifying handwritten digits from the MNIST dataset. The MNIST dataset is a widely used benchmark dataset in the field of machine learning, and it consists of a large collection of grayscale images, each representing a handwritten digit between 0 and 9.</p>
                <p className='mt-auto py-2 font-roboto text-light-slate text-labels tracking-widest'>Python TensorFlow Keras</p>
              </a>
            </div>
          </div>

          {/* CONTACT ME */}
          <div id="contact" className='flex flex-col items-center justify-center w-1/2 lg:w-3/4 xl:w-3/4 2xl:w-3/4 mt-36 sm:mt-0 md:mt-0 sm:py-20 md:py-20'>
            <p className='font-roboto text-bright-green text-center text-sm sm:text-xs'>04. Contact Me</p>
            <h1 className='font-roboto text-light-gray text-center text-4xl sm:text-xl font-extrabold'>Get In Touch</h1>
            <p className='mb-10 sm:p-0 md:p-0 text-light-slate text-sm sm:text-xs text-center'>I am actively looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll be happy to hear from you and will try my best to get back to you!</p>
            <a className='text-xl sm:text-base text-center font-roboto text-bright-green p-3 shadow-offset-email hover:shadow-offset-hover-email hover:transform hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 rounded-xl self-center border-4 border-bright-green translate-x-1 translate-y-1' href='mailto:Reece.bailey8857@yahoo.com'>Email Me</a>
          </div>

          {/* FOOTER */}
          <div className='lg:hidden xl:hidden 2xl:hidden 3xl:hidden inset-x-0 bottom-0 sm:-mb-96 flex flex-row justify-items-center items-center justify-center py-3'>
            <a href="https://discordapp.com/users/unknowntxn" target='_blank'>
              <div className='px-8 text-slate hover:text-bright-green'>
                <LiaDiscord size={20} />
              </div>
            </a>
            <a href="https://github.com/reecebaileyy" target='_blank'>
              <div className='px-8 text-slate hover:text-bright-green'>
                <FiGithub size={20} />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/reecebailey-/" target='_blank'>
              <div className='px-8 text-slate hover:text-bright-green'>
                <FiLinkedin size={20} />
              </div>
            </a>
            <a href="https://www.instagram.com/rreecebailey/" target='_blank'>
              <div className='px-8 text-slate hover:text-bright-green'>
                <FiInstagram size={20} />
              </div>
            </a>
          </div>

          <div className='sm:hidden md:hidden inset-x-0 bottom-0 flex flex-row justify-items-center items-center justify-center py-3 mt-20'>
            <a href="https://www.youtube.com/watch?v=XfqOB4hvxlY&ab_channel=MooseAntlers" target="_blank" className='text-xs sm:text-xxs text-center text-light-slate hover:text-bright-green hover:underline'>🛸 Crafted & Constructed by Reece Bailey 🛸</a>
          </div>

        </div>


        {/* SOCIALS LEFT */}
        <div className='sm:hidden md:hidden fixed bottom-10 left-5'>
          <a href="https://github.com/reecebaileyy" target='_blank'>
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
          <a href="https://discordapp.com/users/unknowntxn" target='_blank'>
            <div className='mb-1 p-4 text-slate hover:text-bright-green hover:transform hover:-translate-y-2 transition-transform duration-300'>
              <LiaDiscord size={20} />
            </div>
          </a>
          <div className="w-[3%] h-10 bg-slate absolute left-1/2 transform -translate-x-1/2"></div>
        </div>

        {/* EMAIL RIGHT */}
        <div className='sm:hidden md:hidden fixed bottom-10 text-xs -right-12 text-center leading-none text-light-gray'>
          <p className='font-roboto font-thin rotate-90 mb-28'>Reece.bailey8857@yahoo.com</p>

          <div className=" w-0.5 h-10 bg-slate absolute left-1/2 transform -translate-x-1/2"></div>
        </div>




      </div>
    </>
  )
}
