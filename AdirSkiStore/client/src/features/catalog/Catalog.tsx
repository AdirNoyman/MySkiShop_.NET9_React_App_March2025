import ProductList from './ProductList';
import { Product } from '../../app/models/product';
import { useEffect, useState } from 'react';


const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);


  return (
    <>
      {' '}
      <ProductList products={products} />
    </>
  );
};

export default Catalog;
