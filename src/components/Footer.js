import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
import Logo from '../assets/images/newlogo.png'

const Footer = () => {
  return (
    <Box mt="80x" bgcolor="	#fff5ee">
      <Stack gap="20px" alignItems="center" px="40px" pt="20px"
     >
        <img src={Logo} alt="logo"  width="200px" height="100px"/>
        <Typography variant="h5" pb="40px" mt="0px">
        Fitness Club Demo
      </Typography>
      </Stack>
     
    </Box>
  )
}

export default Footer