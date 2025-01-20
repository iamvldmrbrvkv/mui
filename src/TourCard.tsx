import { Paper } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: {
                variant: "body2",
              },
              style: {
                fontSize: 11,
              }
            },
            {
              props: {
                variant: "body3",
              },
              style: {
                fontSize: 9,
              }
            }
          ]
        }
      }
    }
  }
})

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}


export const TourCard = () => {

  return (
    <Grid size={3}>
      <ThemeProvider theme={theme}> 
        <Paper elevation={24}>
          <img
            src="https://media.timeout.com/images/105124791/750/422/image.jpg"
            alt=""
            className="img"
          />
          <Box sx={{ paddingX: 1 }}>
            <Typography variant='subtitle1' component='h2'>
              Хороший тур
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <AccessTimeIcon sx={{ width: 12.5 }} />
              <Typography variant='body2' component='p' marginLeft={0.5}>
                5 hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 3
              }}
            >
              <Rating name="read-only"
                precision={0.5}
                value={4.5}
                readOnly
                size="small"
              />
              <Typography variant='body2' component='p' marginLeft={0.5}>
                4.5
              </Typography>
              <Typography variant='body3' component='p' marginLeft={1.5}>
                (655 reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' component='h3' marginTop={0}>
                From C $ 147
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  )
}