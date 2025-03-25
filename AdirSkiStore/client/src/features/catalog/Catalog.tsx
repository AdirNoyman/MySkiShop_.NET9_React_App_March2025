import ProductList from './ProductList';
import { Product } from '../../app/models/product';

type Props = {
  products: Product[];
};

const Catalog = ({ products }: Props) => {
  return (
    <>
      {' '}
      <ProductList products={products} />
    </>
  );
};

export default Catalog;
