import { FlatList } from 'react-native'
import { ProductsListItem } from '@/src/components/ProductListItem'
import products from '@/assets/data/products'

export default function MenuScreen() {
  return (
    <>
    <FlatList 
      data={products} 
      renderItem={({ item }) => <ProductsListItem product={item} /> } 
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
      />
    </>
  )
}
