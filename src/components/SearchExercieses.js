import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { borderRadius } from '@mui/system'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'


const SearchExercieses = ({setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState('')
  
  const [bodyParts,setBodyParts]=useState([])
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
        setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData();
  }, [])
  const handleSearch = async () => {
  
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('');
      setExercises(searchedExercises)
    }

  }

  return (
    <Stack alignItems="center" mt="37px"
      justifyContent="center" p="20px"> {/* alignItems where in page */}
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px' }
        }}
        mb="50px" textAlign="center"
      >
        We're All Gonna <br /> Make It
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '1000px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className='search-btn'
          sx={{
            backgroundColor: '#b8860b',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: "absolute"//button comes to right of screen
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{
        position:'relative',
        width:'100%',
        p:'20px'
      }} >
      
        <HorizontalScrollbar data={bodyParts} 
        bodyParts 
        setBodyPart={setBodyPart} 
        bodyPart={bodyPart}
        isBodyParts />
      </Box>

    </Stack>
  )
}

export default SearchExercieses