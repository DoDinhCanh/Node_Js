import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "~/apis";
import { getALLProducts } from "~/apis/product";
import { TProduct } from "~/interfaces/Product";
import style from "./Product.module.scss"
type Props = {
  category: string
}

const ProductList = (props: Props) => {
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {  
    const getProducts = async () => {
      try {
        // const { data } = await instance.get(`/products?category=${props.category}`)
        const { data } = await instance.get(`/products`)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, []) 
  return (
  <div>
  {products.map((product) => (
    <div key={product.id} className={style.productContainer}>
      <Link to={`/shop/${product.id}`} className={style.productLink}>
        <h3>{product.title}</h3>
      </Link>
      <p>{product.price}</p>
      <Link to={`/shop/${product.id}`}>
        <img width={360} src={product.thumbnail} alt={product.title} />
      </Link>
      <p>{product.description}</p>
    </div>
  ))}
</div>
);
};

export default ProductList;