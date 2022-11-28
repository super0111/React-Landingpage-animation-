import React, { useState } from 'react';

import { Box, Button } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const items = [
  {url: "/images/SliderImg1.png"},
  {url: "/images/SliderImg1.png"},
  {url: "/images/SliderImg1.png"},
]

const Header = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div>
          <Button onClick={() => previous()} sx={{
            minWidth: "60px !important",
            height: "45px",
            background: "white",
            position: 'absolute',
            top: "45%",
            left: "40px",
            transform: "skewX(-15deg)",
            borderRadius: "0px !important",
            "&:hover": {
              background: "#c8c8c8",
            }
            
          }}> 
            <ArrowBackIcon sx={{ color: '#7D70BF' }} />
          </Button>
          <Button onClick={() => next()} sx={{
            minWidth: "60px !important",
            height: "45px",
            background: "#B635B2",
            position: "absolute",
            top: "45%",
            right: "40px",
            transform: "skewX(-15deg)",
            borderRadius: "0px !important",
            "&:hover": {
              background: "#8d1789",
            }
          }}>
            <ArrowForwardIcon sx={{color: 'white'}}/>
          </Button>
       </div>
    
     );
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      index,
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;
    return (
      <Button
        sx={{
          margin: "0 5px",
          marginBottom: "75px",
          minWidth: active? "40px" : "20px",
          height: "12px",
          borderRadius: active? "10px" : "40%",
          background: active ? "#541E72" : "rgba(255, 255, 255, 0.4)",
          "&:hover": {
            background: active ? "#541E72" : "rgba(255, 255, 255, 0.4)",
          }
        }}
        onClick={() => onClick()}
      >
        {React.Children.toArray(items.url)[index]}
      </Button>
    );
  };

  return (
    <Box sx={{ position: "relative", marginTop: "-30px", overflow: "hidden" }}>
      <div className="sky">
        <div className="star1"></div>
        <div className="star1"></div>
        <div className="star1"></div>
        <div className="star1"></div>
        <div className="star1"></div>
        <div className="star1"></div>
        <div className="star1"></div>
      </div>
      <Carousel 
        responsive={responsive} 
        arrows={false} 
        renderButtonGroupOutside={true} 
        customButtonGroup={<ButtonGroup />}
        showDots={true}
        customDot={<CustomDot />}
      >
      { items.map((item, i)=>(
        <Box key={i} component="img" src={`${item.url}`} sx={{
          width: '100%',
        }} />
      ))} 
      </Carousel>
    </Box>
  )
}
export default Header





