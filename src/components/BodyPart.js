import React from 'react'
import { Stack, Typography } from '@mui/material'
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


const BodyPart = ({item, setBodyPart, bodyPart}) => {
    console.log("item", item)

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
    
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart === item ? '4px solid #b8860b' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
            }}
            onClick={()=>{
                setBodyPart(item);
                window.scrollTo({
                    top:1800,
                    left:'100',
                    behavior:'smooth'})
            }}


        >   { 
            <img src={getImageByKey(item)} alt="dumbell" style={{
                width: '40px',
                height: '40px'
            }} />}
         
            <Typography fontSize="24px"
                fontWeight="bold"
                fontFamily="Alegreya"
                color="#3A1212"
                textTransform="capitalize">{item}</Typography>
        </Stack>
    )
}

export default BodyPart