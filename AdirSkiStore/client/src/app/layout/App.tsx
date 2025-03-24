import { useEffect, useState } from 'react';
import '../../App.css';
import { Product } from '../models/product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <>
      <h1>My Store 🤓</h1>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
