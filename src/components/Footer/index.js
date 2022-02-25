import React from 'react'
import imgB from '../../images/Ellipse.svg'

const Footer = () => {
    return (
        <>
            <footer className="flex justify-between items-center p-12 bg-invert-purple h-96">
                <div className="flex h-48 w-72 justify-between">
                    <ul className="flex flex-col justify-between text-white">
                        <h3 className="text-text-purple font-bold ">Navigation</h3>
                        <li>Home</li>
                        <li>Articles</li>
                        <li>Blog</li>
                    </ul>
                    <ul className="flex flex-col justify-between text-white" >
                        <h3 className="text-text-purple font-bold" >Our cocials</h3>
                        <li>Instagram</li>
                        <li>Spotify</li>
                        <li>Facebook</li>
                    </ul>
                </div>

                <div className="center">
                    <h1 className="font-caveat absolute  text-5xl z-50  text-white" >Podcast</h1>
                    <img className=" relative bottom-5 " src={imgB} alt="" />
                </div>

                <div className="flex h-48 w-96 justify-between">
                    <ul className="flex flex-col justify-between text-white" >
                        <h3 className="text-text-purple font-bold" >Usefull links</h3>
                        <li>Privacy policy</li>
                        <li>Terms & conditions</li>
                        <li>Exchange and return policy</li>
                    </ul>
                    <ul className="flex flex-col justify-between text-white" >
                        <h3 className="text-text-purple font-bold" >Infomation</h3>
                        <li>Contact us</li>
                        <li>Blogs</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer