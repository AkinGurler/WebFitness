import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { borderRadius } from '@mui/system'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'
import { useSelector, useDispatch } from "react-redux"
import { getAllbodyParts, getAllEquipments, getExercisesWithEquipment, getSearchExercieses } from '../actions'
import { Search } from '@mui/icons-material'


const SearchExercieses = () => {
  const [search, setSearch] = useState('')

  const [bodyParts, setBodyParts] = useState([])

  const [targets, setTargets] = useState([])

  const equipmentsFromReducer = useSelector((state) => state.equipments)
  const bodyPartsFromReducer = useSelector((state) => state.bodyParts)
  const exercisesFromReducer = useSelector((state) => state.exercises)
  const equipment = useSelector((state) => state.selectedEquipment)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getAllEquipments())
    dispatch(getAllbodyParts())


  }, [])




  const handleSearch = async () => {

    
    if (search) {
      
      if (equipment==='all') {
        dispatch(getSearchExercieses(search))
      } else {
        Promise.resolve(dispatch(getSearchExercieses(search))).then(
          () => dispatch(getExercisesWithEquipment(equipment)));
      }
      setSearch('');
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
      ,
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
          placeholder="If you want search exercise with equipment you need to select equipment first"
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
     
      <Typography align='left' variant="h4" mb="46px" fontWeight={400}>
       Select Body Part
      </Typography>
      <Box sx={{
        position: 'relative',
        width: '100%',
        p: '20px'
      }} >

        <HorizontalScrollbar data={bodyPartsFromReducer}
          /*  bodyParts  */
          isBodyParts />

      </Box>
      <Typography align='left' variant="h4" mb="46px" fontWeight={400}>
        Select Equipment
      </Typography>
      <Box sx={{
        marginTop: "20px",
        position: 'relative',
        width: '100%',
        p: '20px'
      }} >

        <HorizontalScrollbar data={equipmentsFromReducer}
          isEquipments />

      </Box>

    </Stack>
  )
}

export default SearchExercieses