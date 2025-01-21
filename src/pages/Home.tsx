import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid2';
import { TourCard } from "../components/TourCard";
import cities from "../data.json";
import Typography from "@mui/material/Typography";

export const Home = () => {
  return (
    <>
      <Container sx={{ marginY: 5 }}>
        {cities.map(city => (
          <>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                marginTop: 5,
                marginBottom: 3
              }}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={2}>
              {city.tours.map((tour, index) => (
                <TourCard tour={tour} key={index} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </>
  )
}