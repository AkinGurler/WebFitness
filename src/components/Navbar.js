import React from 'react'
import { Link } from "react-router-dom"
import { Stack } from "@mui/material"
import newlogo from "../assets/images/newlogo.png"

const Navbar = () => {
  return (
    <Stack direction="row"
      justifyContent="space-around"
      sx={{ gap: { sm: '122px', xs: '40px' },mt:{sm:'32px',xs:'20px'},
      justifyContent:"space-around"}} px='20px'
      >
      <Link to="/">
        <img src={newlogo} alt="logo"
          style={{ width: '96px', height: '48px', margin: '0 20px' }} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alingItems="flex-end"
      >
        <Link to="/"
        
          style={{
            textDecoration: 'none', color: '#3A1212',
            borderBottom: '3px solid #FF2625',
            fontWeight: 'bold'
            
          }} 
        >Home</Link>
        <a href="#exercises" style={{
          textDecoration: 'none' , color: '#3A1212',fontWeight: 'bold'
        }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar