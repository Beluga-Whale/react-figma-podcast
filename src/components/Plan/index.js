import React from 'react'
import './plan.css'
import Img1 from '../../images/start12$.svg'
import Img2 from '../../images/start17$.svg'
import Img3 from '../../images/start22$.svg'
import { Link } from 'react-scroll'

const Plan = () => {
    return (
        <>
            <section id="bg">
                <div className="h-full flex justify-around flex-col">
                    <div className=" flex  justify-around p-36 ">
                        <img className="hover:-translate-y-3 duration-500" src={Img1} alt="" />
                        <img className="hover:-translate-y-3 duration-500" src={Img2} alt="" />
                        <img className="hover:-translate-y-3 duration-500" src={Img3} alt="" />
                    </div>

                    <div className="text-center relative bottom-16 ">
                        <Link id="btn-link" >Get a free trial</Link>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Plan