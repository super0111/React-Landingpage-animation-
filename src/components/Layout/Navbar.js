import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import { HiOutlineKey } from "react-icons/hi";

const items = [
  {text: 'Main', link: '#main'},
  {text: 'About us', link: '#about-us'},
  {text: 'Arcade', link: '#arcade'},
  {text: 'Merch', link: '#merch'},
  {text: 'Trading post', link: '#trading-post'},
  {text: 'Roadmap', link: '#roadmap'},
  {text: 'Team', link: '#ourTeam'},
];

function Navbar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar id="main" position="static" sx={{
      background: "#211751",
      padding: "8px 10px",
    }}>
      <Container maxWidth="xl" sx={{
        ['@media (max-width:992px)']: { // eslint-disable-line no-useless-computed-key
          paddingLeft: "12px !important",
          paddingRight: "12px !important",
        },
           
      }}>
        <Toolbar disableGutters>
          <Box component="img" src="/images/LOGO.png" sx={{ 
            width: '65px', 
            cursor: "pointer",
            marginLeft: "30px",
            ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key
              marginLeft: "0px",
            },
          }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, position: 'relative' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                position: 'absolute',
                right: "-20px",
                top: "-25px",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {items.map((item, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{
                    fontFamily: 'Gilroy',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '21px',
                    textAlign: 'center',
                    color: '#7D70BF !important',
                  }}>{item.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ 
            flexGrow: 1, display: { xs: 'none', md: 'flex', marginLeft: '50px',        
            ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key
              marginLeft: "0px",
            }, } 
          }}>
            {items.map((item, i) => (
              <Link key={i} href={item.link} style={{ textDecoration: "none" }}>
                <Button
                  sx={{ 
                    my: 2, 
                    display: 'block',
                    fontFamily: 'Gilroy',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '21px',
                    textAlign: 'center',
                    color: i===0 ? 'white' : '#7D70BF !important',
                    textTransform: 'initial',
                    '&:hover': {
                      color: "white !important",
                    }
                  }}
                >
                  {item.text}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box display='flex' alignItems='center' sx={{
              ['@media (max-width:1120px)']: { // eslint-disable-line no-useless-computed-key
                display: "none"
              },
            }} >
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
                }}  />
              </Link>
            </Box>

            <Box sx={{ margin: '0 20px', cursor: 'pointer' }}
              onClick={()=>navigate('/account')}
            >
              <PersonIcon size={40} />
            </Box>

            <Button sx={{
                background: 'linear-gradient(124.5deg, #B22CAE 29.63%, rgba(198, 74, 194, 0) 188.05%, #B80BB2 188.05%)',
                outline: 'none',
                border: 'none',
                borderRadius: '0',
                display: 'flex',
                alignItems: 'center',
                padding: '10px 20px',
                transform: "skewX(-25deg)",
              }}
              onClick={()=>navigate('/account')}
            >
              <HiOutlineKey color="white" size={20} />
              <Typography component='div' sx={{
                fontFamily: 'Gilroy',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '14px',
                color: 'white',
                lineHeight: '19px',
                marginLeft: '10px',
                textTransform: 'initial',
                transform: "skewX(25deg)",
                marginBottom: "-3px",
                ['@media (max-width:992px)']: { // eslint-disable-line no-useless-computed-key
                  fontSize: '13px',  marginBottom: "-1px",
                },
              }}>
                Connect Wallet
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;