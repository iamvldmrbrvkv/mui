import "./App.css";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid2';
import { TourCard } from "./TourCard";

export default function App() {

  return (
    <Container>
      <Grid container spacing={2}>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </Grid>
    </Container>
  );
}
