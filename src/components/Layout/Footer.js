import { useNavigate } from "react-router-dom"
import { Box, Container, Typography, Link } from "@mui/material"

const Footer = () => {
  const navigate =  useNavigate();
  return (
    <Box sx={{
      padding: "10px 150px",
      background: "#0D0632",
      ['@media (max-width:992px)']: { // eslint-disable-line no-useless-computed-key
        padding: "10px 0px",
      },
    }}>
      <Container sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Link href="#main">
          <Box component="img" src="/images/Logo.png" alit="img" sx={{
              width: "65px",
              cursor: "pointer"
            }} 
          />
        </Link>
        <Box sx={{
          display: "flex",
          alignItems: "center",
        }}>
          <Box component="img" src="/images/Polygon-MATIC 1.png" alit="img" sx={{
            width: '100px',
            margin: '0 15px',
            cursor: "pointer"
          }} />
          <Box component="img" src="/images/angel-alliance 1.png" alit="img" sx={{
            width: '100px',
            margin: '0 25px 0 15px',
            cursor: "pointer"
          }} />
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <Box display='flex' alignItems='center' justifyContent='end' >
              <Link href='https://twitter.com/BabyBulls_'>
                <Box component='img' src='/images/Twitter - Dark.png' alt='img' sx={{
                  width: '20px', margin: '0 8px'
                }}  />
              </Link>
              <Link href='https://discord.gg/rdFbTFMH'>
                <Box component='img' src='/images/Discord - Light.png' alt='img' sx={{
                  width: '20px', margin: '0 8px'
                }}  />
              </Link>
              <Link href='https://medium.com/@babybulls'>
                <Box component='img' src='/images/Medium - Light.png' alt='img' sx={{
                  width: '20px', margin: '0 8px'
                }} />
              </Link>
            </Box>
            <Typography component="span" sx={{
              fontFamily: 'Gilroy',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '78.8%',
              color: 'rgba(255, 255, 255, 0.4)',
            }}>
              Developed by
              <Box component="img" src="/images/flag.png" alt="img" sx={{
                width: "20px",
                margin: "0 5px",
              }} />
              <Link href="#">
                <Typography component="span" sx={{
                  fontFamily: 'Gilroy',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '78.8%',
                  color: 'white',
                  textDecoration: "underline",
                }}>
                  WEBCAPITAN TEAM
                </Typography>
              </Link>

            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer