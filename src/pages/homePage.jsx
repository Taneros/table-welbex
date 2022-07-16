import React from 'react'
import { Featured } from '../components/Featured'
import { Hero } from '../components/Hero'
import { Signup } from '../components/Signup'

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Signup />
    </>
  )
}
