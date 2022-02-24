import React from 'react'
import { Link } from 'react-scroll'
import BgLogo from '../../images/Ellipse.svg'
import ImgF from '../../images/facebook.svg'
import ImgI from '../../images/instagram.svg'
import ImgS from '../../images/spotify.svg'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <nav id="nav" className=" h-16 fixed w-full " >
                <div className="w-full flex justify-between items-center h-full px-24  ">
                    <ul className="flex justify-between w-96 text-white font-medium cursor-pointer ">

                        <li className="transition ease-in-out  hover:-translate-y-1 duration-300" >
                            <Link to='/' >Home</Link>
                        </li>

                        <li className="transition ease-in-out  hover:-translate-y-1 duration-300">
                            <Link to='/'>Artivles</Link>
                        </li>

                        <li className="transition ease-in-out  hover:-translate-y-1 duration-300" >
                            <Link to='/'>Blog</Link>
                        </li>
                    </ul>

                    <div className="w-13.5 mr-60 h-full">
                        <img className="relative left-6" src={BgLogo} alt="" />
                        <h1 className="font-caveat absolute text-5xl top-2  text-white" >Podcaster</h1>
                    </div>

                    <div className="flex w-40 justify-between">
                        <Link  id="link-btn"  to="/" className=" p-1 rounded-full cursor-pointer transition ease-in-out hover:-translate-y-1 duration-300 " > <img src={ImgF} alt="" /> </Link>
                        <Link id="link-btn"  to="/" className=" p-1 rounded-full cursor-pointer transition ease-in-out hover:-translate-y-1 duration-300 "> <img src={ImgI} alt="" /> </Link>
                        <Link id="link-btn"  to="/" className=" p-1 rounded-full cursor-pointer transition ease-in-out hover:-translate-y-1 duration-300 "> <img src={ImgS} alt="" /> </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar