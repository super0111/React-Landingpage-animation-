import { Container, Box, Typography, Button } from "@mui/material"

const Merch = () => {
  return(
    <Box id="merch" sx={{
      background: "linear-gradient(98.38deg, #120943 0.44%, #0B052C 98.84%)",
      padding: "55px 150px",
      overflow: "hidden",
      ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
        padding: "45px 0px",
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
      </div>
      <Container sx={{ display: "flex", justifyContent: 'space-between' }}>
        <Box sx={{ width: "55%" }}>
          <Typography variant="phase_text">MERCH</Typography>
          <Typography variant="main_title" sx={{
            marginTop: "15px",
            paddingLeft: "10px",
            background: "linear-gradient(148.99deg, #E069DD 1.54%, #8F0B8B 101.04%)",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}>
            BABY Bulls
            <Typography variant="main_title" component="span" sx={{
              background: "white",
              backgroundClip: "text",
              textFillColor: "transparent",
              marginLeft: "15px",
            }}>MERCH</Typography>
          </Typography>
          <Typography sx={{
            fontFamily: 'Gilroy',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '21px',
            lineHeight: '31px',
            color: "#7D70BF",
            marginTop: "15px",
            maxWidth: "70%",
            ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
              maxWidth: "100%",
              fontSize: '18px',
              lineHeight: '26px',
            },
          }}>
            We created a few selected pieces of merch for the #BBFAM who wish to rep the brand.
          </Typography>
          <Button sx={{
            backgroundImage: `url(/images/Shop_Btn.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "center center",
            fontFamily: 'Gilroy',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '19px',
            textAlign: 'center',
            color: '#FF11F7',
            padding: "30px 80px",
            marginTop: "40px",
          }}>
            Shop Collection
          </Button>
        </Box>
        <Box sx={{display: "flex", alignItems: 'center', width: '45%'}}>
          <Box component="img" src="/images/Merch_item.png" alt="img" sx={{
            width: '100%'
          }} />
        </Box>
      </Container>
    </Box>
  )
}

export default Merch