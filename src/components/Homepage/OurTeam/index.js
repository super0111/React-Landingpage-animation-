
import { Container, Grid, Box, Typography } from "@mui/material"

const items = [
  { url: "/images/ourTeam/1.png", name: "Coleman", id: "@cy_coleman", btn: "Project manager" },
  { url: "/images/ourTeam/2.png", name: "Fizzy", id: "@fizzysports", btn: "Founder" },
  { url: "/images/ourTeam/3.png", name: "Jordy", id: "@jhoweybeattie", btn: "Graphic Design/Artist" },
  { url: "/images/ourTeam/4.png", name: "TZM", id: "@TZMCrypto", btn: "Head of Ops" },
]

const OurTeam = () => {
  return(
    <Box id="ourTeam" sx={{
      padding: "40px 0 80px 0",
      overflow: "hidden",
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
      </div>
      <Container>
        <Typography variant="main_title" sx={{
          marginTop: "15px",
          marginBottom: "15px",
          paddingLeft: "10px",
          background: "linear-gradient(148.99deg, #E069DD 1.54%, #8F0B8B 101.04%)",
          backgroundClip: "text",
          textFillColor: "transparent",
        }}>
          Our
          <Typography component="span" sx={{
            fontFamily: 'lazer84',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "52px",
            lineHeight: "84px",
            letterSpacing: "0.06em",
            background: "white",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}>Team</Typography>
        </Typography>
        <Grid container spacing={2}>
          { items.map((item, i)=>(
            <Grid key={i} item md={3} xs={6} className="team_item">
              <Box key={i} component="img" src={`${item.url}`} alt="img" className="jump" sx={{
                width: "100%",
                ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                  width: "70%",
                },
              }} />
              <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "15px",
              }}>
                <Box sx={{}}>
                  <Typography sx={{
                    fontFamily: 'Gilroy',
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "15px",
                    lineHeight: "20px",
                    color: "#FFFFFF",
                  }}>{item.name}</Typography>
                  <Typography sx={{
                    fontFamily: 'Gilroy',
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "#7D70BF",
                  }}>{item.id}</Typography>
                </Box>
                <Typography sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: 'center',
                  background: "rgba(178, 44, 174, 0.2)",
                  fontFamily: 'Gilroy',
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "16px",
                  padding: "8px",
                  color: "#FF11F7",
                }}>{item.btn}</Typography>
              </Box>
            </Grid>
          )) }
        </Grid>
      </Container>

    </Box>
  )
}
export default OurTeam