import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, paginationItemClasses, Stack, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import { useSelector, useDispatch } from "react-redux"
import { getExercises, getExercisesWithBodyPart, getExercisesWithEquipment } from '../actions'


const Exercises = () => {

  const bodyPart = useSelector((state) => state.selectedBodyPart)
  const equipment = useSelector((state) => state.selectedEquipment)
  const exercises = useSelector((state) => state.exercises)
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)
  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }


  useEffect(() => {

    if (equipment === 'all') {
      dispatch(getExercisesWithBodyPart(bodyPart))
    } else {
      Promise.resolve(dispatch(getExercisesWithBodyPart(bodyPart))).then(
        () => dispatch(getExercisesWithEquipment(equipment)));
    }


  }, [bodyPart, equipment])



  return (

    <Box id="exercises"
      sx={{
        mt: { lg: '110px' }
      }}
      mt="50px"
      p="20px"
    >
      <Typography align='center' variant="h4" mb="46px" fontWeight={700}>
        Results
      </Typography>
      <Stack direction="row"
        sx={{
          gap: { lg: '110px', xs: '50px' }
        }}
        flexWrap="wrap"
        justifyContent="center" >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center" >
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>

    </Box>
  )
}

export default Exercises