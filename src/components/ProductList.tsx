import { useEffect, useState } from "react";
import instance from "~/apis";
import { getALLProducts } from "~/apis/product";
import { TProduct } from "~/interfaces/Product";


const ProductList = () => {
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {  
    const getProducts = async () => {
      try {
        const { data } = await instance.get('/products')
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, []) 
  return <div>
    <h2>San pham danh cho nam:</h2>
    {products.map((product: TProduct) => <div key={product.id}>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <img width={360} src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
    </div>)}
  </div>;
};

export default ProductList;