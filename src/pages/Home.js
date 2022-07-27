import React, { useState } from 'react'
import { Box } from '@mui/material'
import Exercises from "../components/Exercises"
import SearchExercieses from "../components/SearchExercieses"
import HeroBanner from "../components/HeroBanner"

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  
  return (
    <Box>
      <HeroBanner />
      <SearchExercieses
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart} />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises} />
    </Box>
  )
}

export default Home