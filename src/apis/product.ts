import instance from './index'

export const getALLProducts = async () => {
  try {
    const data = await instance.get('/products')
    return data
  } catch (error) {
    console.log(error)
  }
}
