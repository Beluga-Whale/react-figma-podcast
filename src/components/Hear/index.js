import React from 'react'
import Img from '../../images/Image.svg'

const Hear = () => {
    return (
        <>
            <div className="bg-regula-purple ">
                <div className="flex w-full p-36  text-white flex-col justify-center items-center ">
                    <h1 className="text-5xl font-bold">Hear what others say</h1>
                    <p className="w-96 text-center mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aspernatur consequatur natus voluptates recusandae. Ipsa!</p>
                    <img className="w-2/5 mt-20" src={Img} alt="" />
                </div>
            </div>
        </>
    )
}

export default Hear