import React, { useState, useEffect, useLayoutEffect, useCallback } from "react";

import { Container, Box, Typography } from "@mui/material"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const items = [
  {url: "/images/slider_imgs/Rectangle 3.png"},
  {url: "/images/slider_imgs/Rectangle 4.png"},
  {url: "/images/slider_imgs/Rectangle 5.png"},
  {url: "/images/slider_imgs/Rectangle 6.png"},
  {url: "/images/slider_imgs/Rectangle 7.png"},
  {url: "/images/slider_imgs/Rectangle 8.png"},
  {url: "/images/slider_imgs/Rectangle 9.png"},
  {url: "/images/slider_imgs/Rectangle 10.png"},
  {url: "/images/slider_imgs/Rectangle 11.png"},
  {url: "/images/slider_imgs/Rectangle 12.png"},
  {url: "/images/slider_imgs/Rectangle 19.png"},
  {url: "/images/slider_imgs/Rectangle 20.png"},
  {url: "/images/slider_imgs/Rectangle 3.png"},
  {url: "/images/slider_imgs/Rectangle 4.png"},
  {url: "/images/slider_imgs/Rectangle 5.png"},
  {url: "/images/slider_imgs/Rectangle 6.png"},
]

const Arcade = () => {
  const [ nextSlide, setNextSlide ] = useState(false);

  const [scrollPosition, setPosition] = useState(0);
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
      if(window.pageYOffset > 2050) {
        console.log("scrollDirectionscrollDirectionscrollDirectionscrollDirection", scrollDirection)
        console.log("gbbbbbbbbbbbbbbbbbbbbbbb")
        if(scrollDirection == "down") {
          console.log("aaaaaaaaaaaaaaaaaaaaaaa")
          setNextSlide(true) 
        }  
        if(scrollDirection == "up") {
          setNextSlide(false) 

        }
        // } else if(scrollDirection === "down") {
        //   setNextSlide(true)
        // }
      }
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);


  const [y,
    setY] = useState(document.scrollingElement.scrollHeight);
  const [scrollDirection,
    setScrollDirection] = useState("you have not scrolled yet");

  const handleNavigation = useCallback((e) => {

    if (y > window.scrollY) {
      setScrollDirection("up");
    } else if (y < window.scrollY) {
      setScrollDirection("down");
    }
    setY(window.scrollY)
  }, [y]);

  useEffect(() => {

    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);




  console.log("scrollPosition", scrollPosition)
  console.log("scrollDirection", scrollDirection)
  console.log("nextSlide", nextSlide)


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8.7,
      
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const responsive1 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8.9,
      
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const mainCarousel = React.useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const handleSegmentChange = (i, e) => {
    if (currentSlide !== i || isMoving) {
      e.preventDefault();
      return;
    }
  };

  const handleBeforeCarouselChg = (nextSlide) => {
    setIsMoving(true);
    setCurrentSlide(nextSlide);
  };

  const handleAfterCarouselChg = () => {
    setIsMoving(false);
  };
  
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [isMoving1, setIsMoving1] = useState(false);

  const handleSegmentChange1 = (i, e) => {
    if (currentSlide1 !== i || isMoving1) {
      e.preventDefault();
      return;
    }
  };

  const handleBeforeCarouselChg1 = (nextSlide) => {
    setIsMoving1(true);
    setCurrentSlide1(nextSlide);
  };

  const handleAfterCarouselChg1 = () => {
    setIsMoving(false);
  };

  return(
    <Box id="arcade" sx={{
      padding: "50px 150px 70px 150px",
      position: "relative",
      overflow: "hidden",
      ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
        padding: "50px 50px 70px 50px",
      },
    }}>
      <div className="sky">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <Box component="img" src="/images/Vector 10.png" alt="img" sx={{
        position: "absolute",
        top: "20px",
        left: 0,
        width: "100%",
      }} />
      <Container sx={{marginTop: "0px"}}>
        <Box display="flex" justifyContent="center">
          <Typography variant='main_title' component="span" sx={{
            textAlign: 'center',
            background: "linear-gradient(148.99deg, #E069DD 1.54%, #8F0B8B 101.04%)",
            backgroundClip: "text",
            textFillColor: "transparent",
            padding: "0 15px",
          }}>
            Baby Bulls 
            <Typography variant='main_title' component="span" sx={{
              background: "white",
              backgroundClip: "text",
              textFillColor: "transparent",
              marginLeft: "15px",
            }}>
              Arcade
            </Typography> 
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{
          backgroundImage: `url(/images/Frame5.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          borderRadius: "70px",
          padding: "100px 0",
          marginTop: "80px",
          position: 'relative',
          ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            padding: "50px 0",
            marginTop: "20px",
            borderRadius: "30px",
          },
        }}>
          <Typography variant="phase_text">21 DAYS</Typography>
          <Typography component="span" sx={{
            fontFamily: 'Pixeboy',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '146px',
            lineHeight: '149px',
            color: '#FFFFFF',
            marginTop: "15px",
            ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
              fontSize: '60px',
              lineHeight: '80px',
            },
          }}>
            COMIMS
            <Typography component="span" sx={{
              fontFamily: 'Pixeboy',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '146px',
              lineHeight: '149px',
              color: '#FFFFFF',
              textShadow: "0px 0px 20px #FF11F7",
              marginLeft: '15px',
              animation: "flickerAnimation 2s infinite",
              ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: '60px',
                lineHeight: '80px',
              },
            }}>Soon</Typography>
          </Typography>
          <Box component="img" src="/images/01.png" alt="img" sx={{
            marginTop: "40px",
            ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
              marginTop: "10px",
              width: "80px",
            },
          }} />
          <Box component="img" src="/images/Group 40.png" alt="img" sx={{
            width: '80px',
            position: 'absolute',
            top: "-30px",
            right: "-5px",
            ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
              width: "50px",
              top: "-12px",
            },
          }} />
          <Box component="img" src="/images/plant.png" alt="img" sx={{
            position: "absolute",
            bottom: "-36px",
            left: "-100px",
            width: "140px",
            zIndex: "100",
            ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
              bottom: "-19px",
              width: "90px",
            },
          }} />

        </Box>
      </Container>

      <Box sx={{ borderBottom: "1px solid #ab08a6", position: "relative", margin: "0px -150px", }} />
      <Box sx={{
        margin: "90px -150px 3px -150px",
        paddingTop: "-30px",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
          margin: "55px -50px 3px -50px",
        },
      }}>
        <Carousel 
          arrows={false} 
          // autoPlay={nextSlide}
          autoPlaySpeed={1000}
          shouldResetAutoplay={true}
          rewind={true}
          rewindWithAnimation={true}
          ref={(el) => (mainCarousel.current = el)}
          beforeChange={handleBeforeCarouselChg}
          afterChange={handleAfterCarouselChg}
          responsive={responsive1}
          containerclassName={currentSlide === 0 ? `custom-carousel-container` : ""}
          itemclassName="big-carousel-item paddingTop-30"
        >
        { items.map((item, i)=>(
          <Box key={i} sx={{position: "relative"}}>
            <Box component="img" src={`${item.url}`} sx={{
                width: '165px',
                height: (Math.round(currentSlide) === i || Math.round(currentSlide + 1) === i || Math.round(currentSlide + 7) === i || Math.round(currentSlide + 8) === i) ? '200px' : '230px',
                cursor: 'pointer',
                marginTop: (Math.round(currentSlide) === i || Math.round(currentSlide + 1) === i || Math.round(currentSlide + 7) === i || Math.round(currentSlide + 8) === i) ? '0px' : '-30px',
                ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                  width: "123px",
                  height: (Math.round(currentSlide) === i || Math.round(currentSlide + 1) === i || Math.round(currentSlide + 7) === i || Math.round(currentSlide + 8) === i) ? '150px' : '165px',
                  marginTop: (Math.round(currentSlide) === i || Math.round(currentSlide + 1) === i || Math.round(currentSlide + 7) === i || Math.round(currentSlide + 8) === i) ? '0px' : '-16px',
                },
              }} 
              onClick={(e) => { handleSegmentChange(i, e) }}
            />

            {
              (Math.round(currentSlide) === i || Math.round(currentSlide + 1) === i || Math.round(currentSlide + 7) === i || Math.round(currentSlide + 8) === i) &&
              <Box sx={{
                  position: "absolute",
                  bottom: 0,
                  opacity: 0.7,
                  background: "black",
                  width: "100%",
                  height: "207px",
                  cursor: 'pointer',
                  ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                    bottom: "4px",
                    width: "97%",
                    height: "150px",
                  },
                }} 
                onClick={(e) => {
                  handleSegmentChange(i, e);
                }}
              />
            }
          </Box>
        ))} 
        </Carousel>
      </Box>

      <Box sx={{
        margin: "-30px -150px 0 -150px",
        paddingTop: "-30px",
        ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
          margin: "-32px -50px 3px -50px",
        },
      }}>
        <Carousel 
          arrows={false} 
          ref={(el) => (mainCarousel.current = el)}
          beforeChange={handleBeforeCarouselChg1}
          afterChange={handleAfterCarouselChg1}
          shouldResetAutoplay={false}
          responsive={responsive}
          containerclassName={currentSlide1 === 0 ? `custom-carousel-container` : ""}
          itemclassName="big-carousel-item"
        >
        { items.map((item, i)=>(
          <Box key={i} sx={{position: "relative"}}>
            <Box component="img" src={`${item.url}`} sx={{
              width: '168px',
              height: (Math.round(currentSlide1) === i || Math.round(currentSlide1 + 1) === i || Math.round(currentSlide1 + 7) === i || Math.round(currentSlide1 + 8) === i) ? '200px' : '230px',
              cursor: 'pointer',
              ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                width: "123px",
                height: (Math.round(currentSlide) === i || Math.round(currentSlide + 1) === i || Math.round(currentSlide + 7) === i || Math.round(currentSlide + 8) === i) ? '150px' : '165px',
              },
            }} 
            onClick={(e) => {
              handleSegmentChange1(i, e);
            }}
            />

            {
              (Math.round(currentSlide1) === i || Math.round(currentSlide1 + 1) === i || Math.round(currentSlide1 + 7) === i || Math.round(currentSlide1 + 8) === i) &&
              <Box sx={{
                  position: "absolute",
                  bottom: 0,
                  opacity: 0.7,
                  background: "black",
                  width: "100%",
                  height: "207px",
                  cursor: 'pointer',
                  ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                    bottom: "4px",
                    width: "97%",
                    height: "150px",
                  },
                }} 
                onClick={(e) => {
                  handleSegmentChange1(i, e);
                }}
              />
            }
          </Box>
        ))} 
        </Carousel>
      </Box>
    </Box>
  )
}

export default Arcade