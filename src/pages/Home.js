import React, { useState } from 'react'
import { Box } from '@mui/material'
import Exercises from "../components/Exercises"
import SearchExercieses from "../components/SearchExercieses"
import HeroBanner from "../components/HeroBanner"

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [equipment, setEquipment] = useState('all') 
  const [bodyPart, setBodyPart] = useState('all')
   
  
  
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
        setEquipment={setEquipment}
        exercises={exercises} />
    </Box>
  )
}

export default Home