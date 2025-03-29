import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";

const ProductDetails = () => {

  // Get the product ID from the URL
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {

    fetch(`https://localhost:5001/api/products/${id}`).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok 😫');
    }
    ).then(data => {
      setProduct(data);
    }
    ).catch(error => {
      console.error('Oops! - problem fetching the product 😫', error);
    })

  }, [id]);

  return (
    <div>ProductDetails: {product?.name}</div>
  )
}

export default ProductDetails