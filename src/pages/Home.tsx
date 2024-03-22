import ProductList from '~/components/ProductList'

const Home = () => {
  return (
    <>
      <h2>Danh Sách Sản Phẩm</h2>
      <ProductList category='danh-cho-nam' />
      <ProductList category='danh-cho-nam' />
      <ProductList category='danh-cho-nam' />
      {/* <h2>San pham danh cho nu</h2>
      <ProductList category='danh-cho-nu' />
      <h2>San pham danh cho tre em</h2>
      <ProductList category='danh-cho-tre-em' /> */}
    </>
  )
}

export default Home
