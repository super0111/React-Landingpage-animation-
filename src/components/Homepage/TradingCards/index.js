
import { Box, Container, Typography } from "@mui/material";

const TradingCards = () => {
  return(
    <Box id="trading-post" sx={{
      backgroundImage: `url(/images/tradingCards_bg.png)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      padding: "65px 0",
    }}>
      <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', }}>
        <Typography variant="phase_text">Trading post</Typography>
        <Box display="flex" justifyContent="center">
          <Typography variant="main_title" sx={{
              textAlign: 'cemter',
              marginTop: "15px",
              paddingLeft: "10px",
              background: "linear-gradient(148.99deg, #E069DD 1.54%, #8F0B8B 101.04%)",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}>
              PROJECT VINT AGE IS
              <Typography component="span" sx={{
                textAlign: 'cemter',
                fontFamily: 'lazer84',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "52px",
                lineHeight: "84px",
                letterSpacing: "0.06em",
                background: "white",
                backgroundClip: "text",
                textFillColor: "transparent",
                marginLeft: "15px",
              }}>COMING SOON</Typography>
            </Typography>
        </Box>
      </Container>
    </Box>
  )
}
export default TradingCards