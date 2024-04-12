import Colors from "@/constants/Colors"

import { View, Text, Image, StyleSheet } from "react-native"
import { type Product } from "../types"

interface ProductListProps {
  product: Product
}

const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

export const ProductsListItem = ({ product }: ProductListProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10
  },
  price: {
    color: Colors.light.tint
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  }

})