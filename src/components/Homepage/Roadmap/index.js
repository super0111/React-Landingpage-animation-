import { useLayoutEffect, useState } from 'react';
import { Container, Box, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const Roadmap = () => {
  const [scrollPosition, setPosition] = useState(0);
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return(
    <Box id="roadmap" sx={{
      padding: "40px 150px 120px 150px",
      overflow: "hidden",
      ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
        padding: "40px 0px 120px 0px",
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
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <Container>
        <Box display="flex" justifyContent="center" sx={{marginBottom: "45px"}}>
          <Typography variant="main_title" component="span" sx={{
            background: "linear-gradient(148.99deg, #E069DD 1.54%, #8F0B8B 101.04%)",
            backgroundClip: "text",
            textFillColor: "transparent",
            zIndex: 1,
            padding: "0 15px"
          }}>
            ROAD
            <Typography variant="main_title" component="span" sx={{
              background: "white",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}>
              MAP
            </Typography>
          </Typography>
        </Box>
        
        <Box sx={{
          padding: "100px 115px 0 115px",
          position: "relative",
        }}>
          {
            scrollPosition > 2830 ? 
            <Box id="firestar" component="img" src="/images/roadmap_arrow.png" sx={{
              width: "130px",
              position: "absolute",
              left: "47%",
              top: "36px",
              zIndex: 100,
            }} /> : 
            <Box id="" component="img" src="/images/roadmap_arrow.png" sx={{
              width: "130px",
              position: "absolute",
              left: "47%",
              top: "36px",
              zIndex: 100,
            }} />
          } 
          <Box sx={{
            position: "relative",
            height: "125px"
          }}>
            <Box sx={{
              position: "absolute",
              top: "-80px",
              left: "0px",
              width: "35%",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid #FF11F7",
              padding: "30px 50px 30px 40px",
              ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                padding: "15px !important",
                width: "40%",
                top: "-58px",
              },
            }}>
              <Box sx={{ display: "flex", alignItems: "center", marginBottom: "25px",
                ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                  marginBottom: "5px",
                },
              }}>
                <Typography variant="phase_text" sx={{
                  marginRight: "15px",
                }}>PHASE 1</Typography>
                <Typography variant="complete_text">
                  <CheckIcon sx={{ marginRight: "5px" }} />
                  COMPLETE
                </Typography>
              </Box>
              <Typography variant="roadmap_text"> 
                Launch dedicated socials for <Typography variant="roadmap_text" component="span" sx={{color: "white !important", marginRight: "5px"}}>Baby Bulls & Collaborate</Typography>
                with fellow migrating projects
              </Typography>
              <Box sx={{
                position: "absolute",
                top: "50%",
                left: "-21px",
                borderBottom: "1px solid #FF11F7",
                width: "20px",
              }}></Box>
              <Box sx={{
                  position: "absolute",
                  top: "62px",
                  left: "-48px",
                  ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                    top: "40px",
                    left: "-40px",
                  },
              }}>
                <Box component="img" src="/images/roadmap/1.png" alt="img" sx={{
                  position: 'absolute',
                  top: 0,
                  left: "-60px",
                  zIndex: 1,
                  ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                    left: "-50px",
                    zIndex: 1,
                    width: "70px",
                  },
                }}/>
                <Typography variant="number_text" sx={{
                  position: "absolute",
                  top: "12px",
                  left: "-22px",
                  zIndex: 100,
                  opacity: "1",
                  ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                    fontSize: "14px",
                    lineHeight: "20px",
                    left: "-16px",
                  },
                }}>1</Typography>
              </Box>
            </Box>
            <Box sx={{
              position: "absolute",
              right: "0",
              top: "0",
              width: "52%",
              height: "170px",
              borderTop: "3px dashed #FF11F7",
              borderRight: "3px dashed #FF11F7",
              borderTopRightRadius: "40px",
            }}></Box>
          </Box>

          <Box sx={{
            position: "relative",
            height: "125px",
            marginTop: "-15px",
          }}>
            <Box sx={{
              position: "absolute",
              top: "15px",
              right: "45px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              padding: "30px 20px 30px 40px !important",
              width: "42%",
              ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                padding: "15px !important",
                width: "50%",
              },
            }}>
              <Box sx={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
                <Typography variant="phase_text" sx={{
                  marginRight: "15px",
                }}>PHASE 2</Typography>
                <Typography variant="complete_text">
                  <CheckIcon sx={{ marginRight: "5px" }} />
                  COMPLETE
                </Typography>
              </Box>
              <Typography variant="roadmap_text"> Migrate the collection from Terra to Polygon </Typography>
            </Box>
            <Box sx={{
              position: "absolute",
              top: "50%",
              right: "-28px",
            }}>
              <Box component="img" src="/images/roadmap/2.png" alt="img" sx={{
                position: 'absolute',
                top: 0,
                left: "-60px",
                zIndex: 1,
                ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
                  width:  "50px",
                  top: '-13px',
                  left: "-54px"
                }
              }}/>
              <Typography variant="number_text" sx={{
                position: "absolute",
                top: "17px",
                left: "-34px",
                zIndex: 100,
                ['@media (max-width: 768px)']: { //eslint-disable-line no-useless-computed-key 
                  top: "3px",
                  fontSize: "16px !important",
                }
              }}>2</Typography>
            </Box>

            <Box sx={{
              position: "absolute",
              right: "0px",
              top: "50%",
              width: "95%",
              height: "170px",
              borderBottom: "3px dashed #4E4775",
              borderRight: "3px dashed #4E4775",
              borderBottomRightRadius: "40px",
            }}></Box>
          </Box>

          <Box sx={{
            position: "relative",
            height: "125px",
            marginTop: "46px",
          }}>
            <Box sx={{
              position: "absolute",
              top: "110px",
              left: "45px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              padding: "30px 20px 30px 40px !important",
              width: "42%",
              ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                padding: "15px !important",
                width: "50%",
              },
            }}>
              <Box sx={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
                <Typography variant="phase_text" sx={{
                  marginRight: "15px",
                }}>PHASE 3</Typography>
                <Typography variant="complete_text">
                  <CheckIcon sx={{ marginRight: "5px" }} />
                  COMPLETE
                </Typography>
              </Box>
              <Typography variant="roadmap_text">
                New Website Launch - Meeting with 
                Game Developers regarding Baby Bulls mini game
              </Typography>

              <Box sx={{
                position: "absolute",
                top: "55px",
                left: "-16px",
              }}>
                <Box component="img" src="/images/roadmap/3.png" alt="img" sx={{
                  position: 'absolute',
                  top: 0,
                  left: "-60px",
                  zIndex: 1,
                  ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
                    width:  "50px",
                    top: '-13px',
                    left: "-54px"
                  }
                }}/>
                <Typography variant="number_text" sx={{
                  position: "absolute",
                  top: "17px",
                  left: "-34px",
                  zIndex: 100,
                  ['@media (max-width: 768px)']: { //eslint-disable-line no-useless-computed-key 
                    top: "2px",
                    left: "-32px",
                    fontSize: "16px !important",
                  }
                }}>3</Typography>
              </Box>
            </Box>
            

            <Box sx={{
              position: "absolute",
              left: "0px",
              top: "50%",
              width: "4%",
              height: "120px",
              borderTop: "3px dashed #4E4775",
              borderLeft: "3px dashed #4E4775",
              borderTopLeftRadius: "40px",
            }}></Box>
          </Box>

          <Box sx={{
            position: "relative",
            height: "125px",
            marginTop: "15px",
          }}>
            <Box sx={{
              position: "absolute",
              left: "0px",
              top: "50%",
              width: "95%",
              height: "120px",
              borderBottom: "3px dashed #4E4775",
              borderLeft: "3px dashed #4E4775",
              borderBottomLeftRadius: "40px",
            }}></Box>
          </Box>

          <Box sx={{
            position: "relative",
            height: "125px",
            marginTop: "-4px",
          }}>
            <Box sx={{
              position: "absolute",
              right: "0px",
              top: "50%",
              width: "4%",
              height: "130px",
              borderTop: "3px dashed #4E4775",
              borderRight: "3px dashed #4E4775",
              borderTopRightRadius: "40px",
            }}></Box>
          </Box>

          <Box sx={{
            position: "relative",
            height: "125px",
            marginTop: "-4px",
          }}>
            <Box sx={{
              position: "absolute",
              top: "0",
              right: "45px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              padding: "30px 20px 30px 40px !important",
              width: "42%",
              ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                padding: "15px !important",
                width: "50%",
              },
            }}>
              <Box sx={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
                <Typography variant="phase_text" sx={{
                  marginRight: "15px",
                }}>PHASE 4</Typography>
              </Box>
              <Typography variant="roadmap_text">
                Limited Mint of Un Migrated Baby Bulls
              </Typography>
              <Box sx={{
                position: "absolute",
                top: "43px",
                right: "-67px",
              }}>
                <Box component="img" src="/images/roadmap/4.png" alt="img" sx={{
                  position: 'absolute',
                  top: 0,
                  left: "-60px",
                  zIndex: 1,
                  ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
                    width:  "50px",
                    top: '-12px',
                    left: "-48px"
                  }
                }}/>
                <Typography variant="number_text" sx={{
                  position: "absolute",
                  top: "19px",
                  left: "-28px",
                  zIndex: 100,
                  ['@media (max-width: 768px)']: { //eslint-disable-line no-useless-computed-key 
                    top: "-1px",
                    fontSize: "16px !important",
                  }
                }}>4</Typography>
              </Box>
            </Box>
            <Box sx={{
              position: "absolute",
              right: "0px",
              top: "50%",
              width: "95%",
              height: "130px",
              borderBottom: "3px dashed #4E4775",
              borderRight: "3px dashed #4E4775",
              borderBottomRightRadius: "40px",
            }}></Box>
          </Box>

          <Box sx={{
            position: "relative",
            height: "125px",
            marginTop: "5.5px",
          }}>
            <Box sx={{
              position: "absolute",
              left: "0px",
              top: "50%",
              width: "4%",
              height: "130px",
              borderTop: "3px dashed #4E4775",
              borderLeft: "3px dashed #4E4775",
              borderTopLeftRadius: "40px",
            }}></Box>
          </Box>

          <Box sx={{
            position: "relative",
            height: "125px",
          }}>
            <Box sx={{
              position: "absolute",
              left: "45px",
              top: "0",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              padding: "30px 20px 30px 40px !important",
              width: "42%",
              ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                padding: "15px !important",
                width: "50%",
              },
            }}>
              <Box sx={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
                <Typography variant="phase_text" sx={{
                  marginRight: "15px",
                }}>PHASE 5</Typography>
              </Box>
              <Typography variant="roadmap_text">
                Launch of #BBFAM merch 
              </Typography>
              <Box sx={{
                position: "absolute",
                top: "30px",
                left: "-15px",
              }}>
                <Box component="img" src="/images/roadmap/5.png" alt="img" sx={{
                  position: 'absolute',
                  top: 0,
                  left: "-60px",
                  zIndex: 1,
                  ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
                    width:  "50px",
                    top: '-18px',
                    left: "-55px"
                  }
                }}/>
                <Typography variant="number_text" sx={{
                  position: "absolute",
                  top: "32px",
                  left: "-35px",
                  zIndex: 100,
                  ['@media (max-width: 768px)']: { //eslint-disable-line no-useless-computed-key 
                    top: "7px",
                    fontSize: "16px !important",
                  }
                }}>5</Typography>
              </Box>
            </Box>
            <Box sx={{
              position: "absolute",
              left: "0px",
              top: "50%",
              width: "4%",
              height: "130px",
              borderBottom: "3px dashed #4E4775",
              borderLeft: "3px dashed #4E4775",
              borderBottomLeftRadius: "40px",
            }}></Box>
          </Box>

          <Box sx={{
            position: "relative",
            height: "125px",
            marginTop: "5.5px",
          }}>
            <Box sx={{
              position: "absolute",
              right: "0px",
              top: "50%",
              width: "95%",
              height: "130px",
              borderTop: "3px dashed #4E4775",
              borderRight: "3px dashed #4E4775",
              borderTopRightRadius: "40px",
            }}></Box>
          </Box>

          <Box sx={{
            position: "relative",
            height: "125px",
            marginTop: "5.5px",
          }}>
            <Box sx={{
              position: "absolute",
              top: "0",
              right: "45px",
              background: "rgba(255, 255, 255, 0.03)",
              padding: "30px 20px 30px 40px !important",
              width: "42%",
              ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                padding: "15px !important",
                width: "50%",
              },
            }}>
              <Box sx={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
                <Typography variant="phase_text" sx={{
                  marginRight: "15px",
                }}>PHASE 6</Typography>
              </Box>
              <Typography variant="roadmap_text">
                Launch of New Project Codename “Vintage”
              </Typography>
              <Box sx={{
                position: "absolute",
                top: "43px",
                right: "-72px",
              }}>
                <Box component="img" src="/images/roadmap/6.png" alt="img" sx={{
                  position: 'absolute',
                  top: 0,
                  left: "-60px",
                  zIndex: 1,
                  ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
                    width:  "50px",
                    top: '-7px',
                    left: "-55px"
                  }
                }}/>
                <Typography variant="number_text" sx={{
                  position: "absolute",
                  top: "18px",
                  left: "-32px",
                  zIndex: 100,
                  ['@media (max-width: 768px)']: { //eslint-disable-line no-useless-computed-key 
                    top: "3px",
                    fontSize: "16px !important",
                  }
                }}>6</Typography>
              </Box>
            </Box>
            <Box sx={{
              position: "absolute",
              right: "0px",
              top: "50%",
              width: "4%",
              height: "130px",
              borderBottom: "3px dashed #4E4775",
              borderRight: "3px dashed #4E4775",
              borderBottomRightRadius: "40px",
            }}></Box>
          </Box>

          <Box sx={{
            position: "relative",
            height: "125px",
            marginTop: "5.5px",
          }}>
            <Box sx={{
              position: "absolute",
              left: "0px",
              top: "50%",
              width: "95%",
              height: "130px",
              borderTop: "3px dashed #4E4775",
              borderLeft: "3px dashed #4E4775",
              borderTopLeftRadius: "40px",
            }}></Box>
          </Box>

          <Box sx={{
            position: "relative",
            height: "125px",
            marginTop: "5.5px",
          }}>
            <Box sx={{
              position: "absolute",
              top: "0",
              left: "45px",
              width: "50%",
              padding: "30px 20px 30px 40px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                width: "50%",
                padding: "15px !important",
              },
            }}>
              <Box sx={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
                <Typography variant="phase_text" sx={{
                  marginRight: "15px",
                }}>PHASE 7</Typography>
              </Box>
              <Typography variant="roadmap_text">
                Our team is working hard on conceptual projects to add 
                additional value to the project and benefit the holders 
              </Typography>
              <Box sx={{
                position: "absolute",
                top: "50px",
                left: "-17px",
              }}>
                <Box component="img" src="/images/roadmap/7.png" alt="img" sx={{
                  position: 'absolute',
                  top: 0,
                  left: "-60px",
                  zIndex: 1,
                  ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
                    width:  "50px",
                    top: '-7px',
                    left: "-53px"
                  }
                }}/>
                <Typography variant="number_text" sx={{
                  position: "absolute",
                  top: "18px",
                  left: "-32px",
                  zIndex: 100,
                  ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
                    fontSize: "16px !important",
                    top: "8px",
                    left: "-31px",
                  }
                }}>7</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

      </Container>
    </Box>
  )
}
export default Roadmap