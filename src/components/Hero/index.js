import React, {useState, useEffect} from 'react'
import './hero.css'
import ImgP from '../../images/podcast.svg'

const Hero = () => {

    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () =>setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
            <section id="hero"   >
                <div style={{ transform: `translateY(${offsetY * 0.5}px )`}}  className="flex pt-72 flex-col text-white ml-24 " >
                    <h1 className="text-7xl font-bold">Night Podcast</h1>
                    <p className="text-4xl leading-relaxed" >Listen to our Podcast a night after <br /> <span>a tiring day</span></p>
                    <img className="w-40 mt-4 cursor-pointer" src={ImgP} alt="" />
                </div>
            </section>
        </>
    )
}

export default Hero