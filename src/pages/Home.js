import React,{useState} from 'react'
import {Box} from '@mui/material'
import Exercises from "../components/Exercises"
import SearchExercieses from "../components/SearchExercieses"
import HeroBanner from "../components/HeroBanner"

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercieses />
      <Exercises />
    </Box>
  )
}

export default Home