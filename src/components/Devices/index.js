import React from 'react'
import ImgP from '../../images/iphone.svg'
import ImgD from '../../images/desktop.svg'

const Devices = () => {
    return (
        <>
            <div className="flex bg-regula-purple justify-between items-center p-52 ">
                <div className="text-white p-12 w-2/4 ">
                    <h1 className="text-5xl font-bold ">Listen on desktop or moblie</h1>
                    <p className="text-sm mt-8 " >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quasi repellat laborum! Eligendi, asperiores reprehenderit.</p>
                </div>
                <div className=" flex w-2/4 ">
                    <img className="mx-8 relative left-36 bottom-6" src={ImgD} alt="" />
                    <img className="mx-8 absolute " src={ImgP} alt="" />
                </div>
            </div>
        </>
    )
}

export default Devices