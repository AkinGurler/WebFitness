import React from 'react'
import {Box,Stack,Typography,} from "@mui/material"
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'


const SimilarExercises = ({targetMuscleExercises,equipmentExercises,target,equipment}) => {
  return (
    <Box sx={{
      mt:{lg:'100px',xs:'0'}
    }}>
      <Typography variant="h3" mb={5}  >
        Exercises that target <span style={{ color: '#b8860b', textTransform: "capitalize" }}>{target}
        </span>
      </Typography>
      <Stack sx={{
        p:'2',
        position:'relative'
      }} direction="row">
        {targetMuscleExercises.length ?
         <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader/>}
      </Stack>

      <Typography variant="h3" mb={5}  >
        Exercises that used the same <span style={{ color: '#b8860b', textTransform: "capitalize" }}>{equipment}
        </span>
      </Typography>
      <Stack sx={{
        p:'2',
        position:'relative'
      }} direction="row">
        {equipmentExercises.length ?
         <HorizontalScrollbar data={equipmentExercises}/> : <Loader/>}
      </Stack>

    </Box>
  )
}

export default SimilarExercises