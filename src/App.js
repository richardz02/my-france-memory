import { Container, Grid, Typography } from '@mui/material';
import './App.css';
import MemoryCard from './components/MemoryCard';
import AppBar from './components/AppBar';
import cities from './data.json'

function App() {
  return (
    <div className="App">
      <AppBar />
      <Container>
        {cities.map((city) => (
          <>
          <Typography variant='h4' component="h3" marginTop={5} marginBottom={3}>
            {city.city}
          </Typography>
          <Grid container spacing={5}>
          {city.places.map((places, index) => (
            <MemoryCard places={places} key={index}/>
          ))}
          </Grid>
          </>
        ))}
      </Container>
    </div>
  );
}

export default App;
