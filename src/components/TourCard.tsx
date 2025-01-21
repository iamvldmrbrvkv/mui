import Paper from "@mui/material/Paper";
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

interface Tour {

  id: number;

  name: string;

  duration: number;

  rating: number;

  numberOfReviews: number;

  price: number;

  image: string;

}



interface TourCardProps {

  tour: Tour;

}

export const TourCard = ({ tour }: TourCardProps) => {

  return (
    <Grid size={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img
            src={tour.image}
            alt=""
            className="img"
          />
          <Box sx={{ paddingX: 1 }}>
            <Typography variant='subtitle1' component='h2'>
              {tour.name}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <AccessTimeIcon sx={{ width: 12.5 }} />
              <Typography variant='body2' component='p' marginLeft={0.5}>
                {tour.duration}
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
                value={tour.rating}
                readOnly
                size="small"
              />
              <Typography variant='body2' component='p' marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant='body3' component='p' marginLeft={1.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' component='h3' marginTop={0}>
                From C ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  )
}