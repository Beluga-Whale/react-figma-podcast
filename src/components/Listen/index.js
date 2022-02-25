import React from 'react'
import './Listen.css'
import { Link } from 'react-scroll'
import Img1 from '../../images/Person.svg'

const Listen = () => {
    return (
        <>
            <section id="listenBg" className=" flex justify-between items-center h-2/4">
                <div className="text-white p-16 w-1/2 ">
                    <div className="w-3/4">
                        <h1 className="font-bold text-5xl">Listen from one of the best singers</h1>
                        <p className="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ad, deserunt fugiat minus nostrum non.</p>
                        <div className="btn ">
                            <Link className="font-semibold" to="/" >Talk to us</Link>
                        </div>
                    </div>


                </div>
                <div className="w-1/2 overflow-hidden  ">
                    <img className="w-full object-cover bg-cover transition-all duration-700 hover:scale-125    " src={Img1} alt="" />
                </div>
            </section>
        </>
    )
}

export default Listen