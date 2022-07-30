import React from 'react'
import { Box, Stack, Typography, Button } from "@mui/material"
import HeroBannerImage from "../assets/images/newBannerImage.jpg"

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },//Margin Top
      ml: { sm: '50px' }//Margin Left
    }}
      position="relative" p="20px"
    >
      <Typography color='#b8860b' fontWeight="600"
        fontSize='26px'
      >
        Fitness Club
      </Typography>

      <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb="23px" mt="30px"//large devices 44 small devices 40px
      >
        Sweet,Blood <br />Tears
      </Typography>
      <Typography
        fontWeight={550}
        fontSize='22px'
        lineHeight="70px"
        mb={4}//Line height
      >
        Check out How you can Change
      </Typography>

     
      <Button variant="contained"
       /* color="error" */
       href="#exercises"
       sx={{backgroundColor:"#b8860b",
      padding:'12px'}}
       >
        Explore Exercises
      </Button>
      <img src={HeroBannerImage} alt="banner"
       className="hero-banner-img" />
        <Typography
      fontWeight={800}
      color="#b8860b"
      sx={{
        opacity:0.1,
        display: { lg:'block', xs:'none'}
      }}
      fontSize="110px"
      >
       Make <br/> Exercises
      </Typography>
    </Box>


  )
}

export default HeroBanner