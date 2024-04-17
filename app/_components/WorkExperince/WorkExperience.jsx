"use client"
import React, { useRef } from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '@/app/utils/data'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function WorkExperience() {

  return (
    <section className='experience-container'>
      <h5>Work Experience</h5>
      <Carousel>
  <CarouselContent>
    {WORK_EXPERIENCE.map((item) => (
      <CarouselItem key={item.title}>
        <ExperienceCard details={item} />
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious className='text-black' />
  <CarouselNext className='text-black' />
</Carousel>
      
    </section>
  )
}

export default WorkExperience
