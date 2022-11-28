import { Container, Box, Typography, Link } from "@mui/material";

const AboutUs  = () => {
  return (
    <Box id="about-us" sx={{
      backgroundImage: `url(/images/aboutUs_bg.png)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      marginTop: "-5px",
      overflow: "hidden",
      position: "relative",
    }}>
      <Container sx={{
        padding: "0px 150px",
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
        </div>
        <Box component="img" src="/images/aboutUs_line.png" alt="line" sx={{
          position: 'absolute',
          top: "-90px",
          left: "0px",
          right: "0px",
          margin: '30px 0px 0',
          width: '100%',
          ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
            margin: "30px -24px 0 -24px",
          },
        }} />
        <Box sx={{
          position: 'absolute',
          top: "10px",
          left: "0px",
          right: "0px",
        }}>
          <Box component="img" src="/images/aboutUs_line.png" alt="line" sx={{
            margin: '30px 0px',
            width: '100%',
            ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
              margin: "30px -24px 0 -24px",
            },
          }} />
          <Box component="img" src="/images/plant.png" alt="img" sx={{
            position: 'absolute',
            left: '45%',
            top: "78px",
            width: '105px',
          }} />
          {/* <Box  sx={{
            position: "absolute",
            bottom: "233px",
            left: "35%",
            zIndex: 100,
          }}>
                <div class='container'>
                  <div class="full-planet"></div>
                  <div class='elipse'></div>
                  <div class="half-planet"></div>
                </div>
          </Box> */}
          {/* <Box component="img" src="/images/plant2.png" alt="img" sx={{
            position: 'absolute',
            left: '45%',
            top: "72px",
            width: '120px',
          }} /> */}
        </Box>


        <Box display="flex" alignItems="center" sx={{
          padding: "150px 0 45px 0",
          ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
            padding: "65px 0 10px 0",
          },
        }}>
          <Typography variant="main_title" sx={{
            color: "#E069DD",
          }}>About</Typography>
          <Typography variant="main_title" sx={{
            color: "white",
            marginLeft: "15px"
          }}>Us</Typography>
        </Box>
        <Box sx={{
          display: "flex",
          justifyContent: 'space-between',
        }}>
          <Box sx={{
            width: "60%",
            ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
              width: "50%",
            },
          }}>
            <Typography component="span" sx={{
              fontFamily: 'Gilroy',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '28px',
              color: '#7D70BF',
              ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: '15px',
                lineHeight: '24px',
              },
            }}>
              Baby Bulls is a project incubated by <Link sx={{ textDecoration: "none", "&:hover": {textDecoration: "none"}}} href="#"><Typography component="span" sx={{color: "#FF11F7"}}>Matador Labs</Typography></Link> and currently live on the Polygon network.
            </Typography>
            <Typography sx={{
              fontFamily: 'Gilroy',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '28px',
              color: '#7D70BF',
              marginTop: "15px",
              ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: '15px',
                lineHeight: '24px',
              },
            }}>
              The collection was launched as a charity drop with 100% of the proceeds going to <Link sx={{ textDecoration: "none", "&:hover": {textDecoration: "none"}}} href="https://twitter.com/AngelProtocol"> <Typography component="span" sx={{color: "#FF11F7"}}> Angel Protocol.</Typography></Link>
              Since then, due to the power & support of the community, the Baby Bulls have become 
              a standalone project on Polygon.  
            </Typography>
            <Typography sx={{
              fontFamily: 'Gilroy',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '28px',
              color: '#7D70BF',
              marginTop: "15px",
              ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: '15px',
                lineHeight: '24px',
              },
            }}>
              The Terra crash was a big catalyst that led us in a completely new direction and forced us
              to rethink the broader roadmap and scope of the Baby Bulls. We are actively working to make
              the experience bigger and better. A lot of new exciting products and utlities are in the pipeline. 
              Join the ride! 
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" sx={{
            width: "40%",
            ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
              width: "50%",
            },
          }}>
            <Box component='img' src='/images/aboutUs.png' alt="img" sx={{
              width: "90%",
              marginTop: "-40px",
            }}/>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default AboutUs