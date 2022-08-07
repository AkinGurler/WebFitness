import React from 'react'
import { Stack, Typography } from '@mui/material'
import equipmentImage from '../assets/icons/equipments/equipment.png'
import { getExercisesWithBodyPart, getExercisesWithEquipment, setSelectedEquipment } from '../actions'
import {useSelector,useDispatch} from "react-redux"


const Equipment = ({item}) => {
    const bodyPart=useSelector((state)=>state.selectedBodyPart)
    const equipment=useSelector((state)=>state.selectedEquipment)
    const dispatch=useDispatch()

    // maybe later
    /* const images = {
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
      } */
    
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop: equipment === item ? '4px solid #b8860b' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
            }}
            onClick={()=>{
                dispatch(setSelectedEquipment(item));
                
                
                window.scrollTo({
                    top:1800,
                    left:'100',
                    behavior:'smooth'})
            }}


        >   { 
            <img src={equipmentImage} alt="dumbell" style={{
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

export default Equipment