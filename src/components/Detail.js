import React, { useEffect } from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipments/equipment.png'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSelectedExercisesDetails } from '../actions'



const Detail = () => {

  
  const { id } = useParams(); 
  const exerciseDetail=useSelector((state)=>state.selectedExercise)
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(getSelectedExercisesDetails(id))
  },[id])
  

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;//object destructuring

  
      const extraDetail = [
        {
          icon: TargetImage,
          name: bodyPart,
        },
        {
          icon: TargetImage,
          name: target,
        },
        {
          icon: TargetImage,
          name: equipment,
        },
      ];
  

  return (
    <Stack gap="60px" sx={{
      flexDirection: { lg: 'row' },
      p: '20px',
      alignItems: 'center'
    }}>
     
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{
        gap:{lg:'35px',xs:'20px'}
      }}>
        <Typography variant='h3'>
          {name}
        </Typography>
        <Typography  variant='h6'>
          It is a good Exercise for {target}
        </Typography>
        
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
        
      </Stack>
    </Stack>
  )
}

export default Detail