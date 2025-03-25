import { useEffect, useState } from 'react';
import { Product } from '../models/product';
import Catalog from '../../features/catalog/Catalog';
import { Box, Button, Container, Typography } from '@mui/material';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <Container maxWidth="xl">
      <Box display='flex' justifyContent='center' gap={3} marginY={3}>
      <Typography variant='h4'>My Store 🤓</Typography>
      <Button variant="contained" color="primary">
        Add product
      </Button>
      </Box>
     
      <Catalog products={products}/>
   
    </Container>
  );
}

export default App;
