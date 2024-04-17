import React from 'react'
import './Hero.css'
import Image from 'next/image'

function Hero() {
  return (
    <section className='hero-container'>
      <div className="hero-content">
        <h2>Building Digital Experinces that inspires</h2>
        <p><span className='text-red-600 text-2xl font-semibold'>Passionate Web Developer</span> | Transforming Ideas into Seamless and Visually Stunning Web Solutions</p>
      </div>
      <div className="hero-img">
        <div>
            <div className="tech-icon">
            <Image src='/r.png' alt='' width={50} height={50}/>
            </div>
            <Image className='rounded-3xl' src='/b-3.jpeg' alt='' width={300} height={300}/>
        </div>
        <div> 
        <div className="tech-icon">
            <Image src='/js.png' alt='' width={50} height={50}/> 
        </div> 
        <div className="tech-icon"> 
            <Image src='/n.png' alt='' width={50} height={50}/> 
        </div> 
        <div className="tech-icon"> 
            <Image src='/c.png' alt='' width={50} height={50}/> 
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
