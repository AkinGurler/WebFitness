import React, { useState } from 'react'
import { Box } from '@mui/material'
import Exercises from "../components/Exercises"
import SearchExercieses from "../components/SearchExercieses"
import HeroBanner from "../components/HeroBanner"

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
  const [equipment, setEquipment] = useState('all')  
  
  
  return (
    <Box>
      <HeroBanner />
      <SearchExercieses
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        equipment={equipment}
        setEquipment={setEquipment} />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        equipment={equipment}
        exercises={exercises} />
    </Box>
  )
}

export default Home