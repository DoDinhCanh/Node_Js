import { type } from "os";
import { useState } from "react";


const Home = () => {
  let productInitial = {
    name: "Ten san pham chua cap nhat", price: 0
  }
  const [product, setProduct] = useState(productInitial)

  type TProduct = {
    name: String,
    price: Number
  }

  const getProduct = () => {
    setProduct( {
      name: "Laptop", price: 2000,
    })
    console.log(product)
  }
  const ShowProduct1 = (product: TProduct) => {
    return (
      <>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
      </>
    )
  }
  const ShowProduct2 = (props:{product: TProduct}) => {
    return (
      <>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
      </>
    )
  }
  return (
    <>
    <button onClick={() =>getProduct()}>Cap nhat san pham</button>
      {ShowProduct1(product)}
      <ShowProduct2 product={product}/>
    </>
  );
};

export default Home;