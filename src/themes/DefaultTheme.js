import { createTheme, responsiveFontSizes } from '@mui/material';

const createTypographySystem = (fontFamily) => {
    return {

        main_title: {
            fontFamily: 'lazer84',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: "52px",
            lineHeight: "84px",
            letterSpacing: "0.06em",
            ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: "40px",
                lineHeight: "64px",
            },
        },
        main_text: {
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
        },
        h1: {
            color: '#191A15',
            fontFamily,
            fontSize: 55,
            fontWeight: 700,
            fontStyle: 'normal',
            lineHeight: 1.1,
        },
     
        roadmap_text: {
            fontFamily: 'Gilroy',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '23px',
            color: 'rgba(255, 255, 255, 0.5)',
            ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: '13px',
                lineHeight: '18px',
                color: '#b4b4b4',
            },
        },
        phase_text: {
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            background: "rgba(178, 44, 174, 0.2)",
            width: "125px",
            height: "36px",
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "20px",
            color: "#FF11F7",
            cursor: "pointer",
            ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                width: "85px",
                height: "25px",
                fontSize: "12px",
                lineHeight: "16px",
            },

        },
        complete_text: {
            fontFamily: 'Gilroy',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '19px',
            letterSpacing: '0.06em',
            color: '#FF11F7',
            display: "flex",
            alignItems: "center",
            ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
                fontSize: '14px',
                lineHeight: '17px',
            },
        },
        number_text: {
            fontFamily: 'Gilroy',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '23px',
            color: '#FFFFFF',
            opacity: 0.5,
        },
        

    };
};

const createPaletteSystem = () => ({

})
const createComponentSystem = () => ({
    MuiButton: {
        styleOverrides: {
            root: {
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 18,
                lineHeight: '22px',
                ['@media (max-width:769px)']: { // eslint-disable-line no-useless-computed-key
                    fontSize: 16,
                    lineHeight: '20px',
                },
            },
        },
        variants: [
            {
                props: { variant: 'contained' },
                style: ({ theme }) => ({
                    background: theme.palette.primary.main,
                    borderRadius: 70,
                    padding: 20,
                    ['@media (max-width:769px)']: { // eslint-disable-line no-useless-computed-key
                        padding: 18,
                    },
                })
            },
            {
                props: { variant: 'secondary' },
                style: ({ theme }) => ({
                        background: theme.palette.primary.main,
                        borderRadius: 12,
                        color: theme.palette.common.white,
                        padding: 20,
                })
            }
        ]
    },
		
})
let theme = createTheme({
    components: createComponentSystem(),
    typography: createTypographySystem(),
    palette: createPaletteSystem(),
});

// theme = responsiveFontSizes(theme)
export { theme }
export const palette = theme.palette