import { BsFillArrowDownSquareFill } from "react-icons/bs";
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import web1 from "../public/movie.png";
import web2 from "../public/bookit.png";
import web3 from "../public/magic.png";
import web4 from "../public/go-clone.png";
import web5 from "../public/tic-toc.png";
import web6 from "../public/personal.png";
import logo from "../public/logobg.svg";

import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const down = () => {
    window.scroll({
      top: 500,
      left: 100,
      behavior: 'smooth'
    });
    
}
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Hüseyin Battal || Full Stack Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="-mb-4">
          <nav className="py-10 mb-12 flex justify-between dark:text-white ">
            <Link href="/">
              <a>
                <div className="hover:scale-150 transition-transform duration-500 cursor-pointer">
                  <Image
                    className="rounded-full"
                    height={45}
                    width={45}
                    src={logo}
                    alt="logo"
                  />
                </div>
              </a>
            </Link>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  target="blank"
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1BTxlhjgQVa4L6_S0WgFhghGF_9nQJ0Bc/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-2xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Hüseyin Battal
            </h2>
            <h3 className="py-2 dark:text-white md:text-3xl">
              Full Stack Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Let`s connect and build amazing projects together!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <div className="cursor-pointer hover:text-blue-400 dark:hover:text-white">
                <Link href="https://twitter.com/hsyn_bttl">
                  <a target="blank">
                    <AiFillTwitterCircle />
                  </a>
                </Link>
              </div>
              <div className="cursor-pointer hover:text-blue-600 dark:hover:text-white">
                <Link href="https://www.linkedin.com/in/huseyinbattal42/">
                  <a target="blank">
                    <AiFillLinkedin />
                  </a>
                </Link>
              </div>
              <div className="cursor-pointer hover:text-black dark:hover:text-white">
                <Link href="https://github.com/huseyinbattal">
                  <a target="blank">
                    <AiFillGithub />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="py-10">
          <h1 className=" text-2xl md:text-3xl py-1  dark:text-white text-center text-blue-900 mb-12 -mt-6 ">
            <div className="flex justify-center space-x-4">
              <span>My Projects</span> <BsFillArrowDownSquareFill size={35} className="hover:text-red-800 text-teal-600 cursor-pointer dark:hover:text-white dark:text-gray-400 " onClick={down} />
            </div>
          </h1>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">

            {/* Projects */}

            {/* Book It */}
            <div className="bg-red-900 hover:bg-green-700 basis-1/3 flex-1 border-2 border-red-500 rounded-xl p-4 hover:shadow-xl hover:shadow-teal-900 hover:border-teal-500 hover:border-double duration-500 hover:scale-105 transition h-96">
              <Link href="https://github.com/huseyinbattal/book-it">
                <a target="blank">
                  <h1 className="text-white font-bold text-center hover:cursor-pointer hover:text-blue-700 dark:text-white -mb-12 mt-1">
                    Book IT
                  </h1>

                  <Image
                    className="rounded-lg object-contain"
                    width={200}
                    height={200}
                    layout="responsive"
                    src={web2}
                  />
                </a>
              </Link>
            </div>

            {/* Google Clone */}
            <div className="bg-red-900 hover:bg-green-700 basis-1/3 flex-1 border-2 border-red-500 rounded-2xl p-4 hover:shadow-xl hover:shadow-teal-900 hover:border-teal-500 hover:border-double duration-500 hover:scale-105 transition h-96">
              <Link href="https://github.com/huseyinbattal/google-clone">
                <a target="blank">
                  <h1 className="text-white font-bold text-center hover:cursor-pointer hover:text-blue-700 dark:text-white -mb-12 mt-1">
                    Google Clone
                  </h1>

                  <Image
                    className="rounded-lg object-contain"
                    width={200}
                    height={200}
                    layout="responsive"
                    src={web4}
                  />
                </a>
              </Link>
            </div>

            {/* Movie App */}
            <div className="bg-red-900 hover:bg-green-700 basis-1/3 flex-1 border-2 border-red-500 rounded-2xl p-4 hover:shadow-xl hover:shadow-teal-900 hover:border-teal-500 hover:border-double duration-500 hover:scale-105 transition h-96">
              <Link href="https://github.com/huseyinbattal/Movie-App-with-React-Redux">
                <a target="blank">
                  <h1 className="text-white font-bold text-center hover:cursor-pointer hover:text-blue-700 dark:text-white -mb-12 mt-1">
                    Movie App
                  </h1>

                  <Image
                    className="rounded-lg object-contain"
                    width={200}
                    height={200}
                    layout="responsive"
                    src={web1}
                  />
                </a>
              </Link>
            </div>

            {/* Magic Form */}
            <div className=" bg-red-900 hover:bg-green-700 basis-1/3 flex-1 border-2 border-red-500 rounded-2xl p-4 hover:shadow-xl hover:shadow-teal-900 hover:border-teal-500 hover:border-double duration-500 hover:scale-105 transition h-96">
              <Link href="https://github.com/huseyinbattal/magic-form">
                <a target="blank">
                  <h1 className="text-white font-bold text-center hover:cursor-pointer hover:text-blue-700 dark:text-white -mb-12 mt-1">
                    Magic Form
                  </h1>

                  <Image
                    className="rounded-lg object-contain"
                    width={200}
                    height={200}
                    layout="responsive"
                    src={web3}
                  />
                </a>
              </Link>
            </div>

            {/* XOX Game */}
            <div className="bg-red-900 hover:bg-green-700 basis-1/3 flex-1 border-2 border-red-500 rounded-2xl p-4 hover:shadow-xl hover:shadow-teal-900 hover:border-teal-500 hover:border-double duration-500 hover:scale-105 transition h-96">
              <Link href="https://github.com/huseyinbattal/React-Tic-Tac-Toe-Game">
                <a target="blank">
                  <h1 className="text-white font-bold text-center hover:cursor-pointer hover:text-blue-700 dark:text-white -mb-12 mt-1">
                  Tic-Tac-Toe
                  </h1>

                  <Image
                    className="rounded-lg object-contain"
                    width={200}
                    height={200}
                    layout="responsive"
                    src={web5}
                  />
                </a>
              </Link>
            </div>

            {/* Personal Website */}
            <div className="bg-red-900 hover:bg-green-700 basis-1/3 flex-1 border-2 border-red-500 rounded-2xl p-4 hover:shadow-xl hover:shadow-teal-900 hover:border-teal-500 hover:border-double duration-500 hover:scale-105 transition h-96">
              <Link href="https://github.com/huseyinbattal/huseyin-battal-portfolio-site">
                <a target="blank">
                  <h1 className="text-white font-bold text-center hover:cursor-pointer hover:text-blue-700 dark:text-white -mb-12 mt-1">
                    Personal Website
                  </h1>

                  <Image
                    className="rounded-lg object-contain"
                    width={200}
                    height={200}
                    layout="responsive"
                    src={web6}
                  />
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
     
        <Footer/>

    </div>
  );
}
