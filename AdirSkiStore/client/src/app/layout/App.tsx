import { useEffect, useState } from 'react';
import { Product } from '../models/product';
import Catalog from '../../features/catalog/Catalog';
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import NavBar from './NavBar';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      background: {
        default: isDarkMode ? '#121212' : '#eaeaea',
    }
  }
  });

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <NavBar changeTheme={handleDarkMode} isDarkMode={isDarkMode}/>
      <Box sx={{minHeight: '100vh', bgcolor: 'background.default'}}>
      <Container maxWidth="xl" sx={{ mt: 13 }}>
        <Catalog products={products} />
      </Container>
      </Box>      
    </ThemeProvider>
  );
}

export default App;
