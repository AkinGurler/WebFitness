import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
import { textTransform } from '@mui/system'

const ExerciseCard = ({ exercise }) => {
    
    return (
        <Link className="exercise-card" underline="none" to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl}
                alt={exercise.name} loading="lazy" />
           {/*  By using lazy load,
            you can delay the loading of images
            that are not on the screen, make the site open faster,
            and prevent unnecessary load on the site. */}
            <Stack direction="row" >
                <Button sx={{
                    ml:'21px', 
                    color :'#fff',
                    background:'#b8860b',
                    fontSize:'14px',
                    borderRadius:'20px',//like a border slope
                    textTransform:'capitalize'
                }}>
                    {exercise.bodyPart}
                </Button>
                <Button sx={{
                    ml:'21px', 
                    color :'#fff',
                    background:'#ffa9a9',
                    fontSize:'14px',
                    borderRadius:'20px',//like a border slope
                    textTransform:'capitalize'
                }}>
                    {exercise.target}
                </Button>
            </Stack>
            <Typography ml="21px" color="#000000" fontWeight="bold" fontSize="20px"
            pb="10px"  mt="11px" textTransform="capitalize">
                {exercise.name}
            </Typography>
            

        </Link>
    )
}

export default ExerciseCard