import { ProductsListItem } from '@/src/components/ProductListItem'
import products from '@/assets/data/products'

export default function MenuScreen() {
  return (
    <>
      <ProductsListItem product={products[0]} />
      <ProductsListItem product={products[1]} />
    </>
  )
}
