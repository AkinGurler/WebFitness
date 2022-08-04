import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipments/equipment.png'

import all from '../assets/icons/bodyparts/all.png'
import back from '../assets/icons/bodyparts/back.png'
import cardio from '../assets/icons/bodyparts/cardio.png'
import chest from '../assets/icons/bodyparts/chest.png'
import lowerarms from '../assets/icons/bodyparts/lower arms.png'
import neck from '../assets/icons/bodyparts/neck.png'
import shoulders from '../assets/icons/bodyparts/shoulders.png'
import waist from '../assets/icons/bodyparts/waist.png'
import lowerlegs from '../assets/icons/bodyparts/lower legs.png'
import upperlegs from '../assets/icons/bodyparts/upper legs.png'
import upperarms from '../assets/icons/bodyparts/upper arms.png'



const Detail = ({ exerciseDetail }) => {
 

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;//object destructuring

    

    const images = {
        all,
        back,
        cardio,
        chest,
        neck,
        shoulders,
        waist,
        lowerarms,
        lowerlegs,
        upperarms,
        upperlegs
      };

      function getImageByKey(key) {
        var img = key.replace(/\s/g, "");

        return images[img]
      }

  const extraDetail=[
    {
      icon:getImageByKey(bodyPart),
      name:bodyPart
    },
    {
      icon:TargetImage,
      name:target
    },
    {
      icon:EquipmentImage,
      name:equipment
    }
  ]

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