import products from "@/assets/data/products";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import Button from "@/src/components/Button";
import { useLocalSearchParams, Stack } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { UseCart } from "@/src/providers/cartProviders";
import { PizzaSize } from "@/src/types";

const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL']

const ProductDetailScreen = () => {
  const [selectSize, setSelectedSize] = useState<PizzaSize>('M')
  const { id } = useLocalSearchParams()
  const { addItem } = UseCart()

  const product = products.find((p) => p.id.toString() === id)

  const addToCart = () => {
    if (!product) return
    addItem(product, selectSize)
  }

  if (!products) {
    return (
      <Text>Pizza not found</Text>
    )
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image 
        style={styles.image}
        source={{ uri: product?.image || defaultPizzaImage }}
        />
      <Text style={styles.price}>Select size</Text>
      <View style={styles.sizes}>
        {
          sizes.map((size) => (
            <Pressable 
            onPress={() => {
              setSelectedSize(size)
            }}
              key={size} 
              style={[styles.size, { backgroundColor: selectSize === size ? 'gainsboro' : 'white'}]} >
              <Text style={[styles.sizeText, { color: selectSize === size ? 'black' : 'gray'}]}>{size}</Text>
            </Pressable>
          ))
        }
      </View>
      <Text style={styles.price}>${product?.price}</Text>
      <Button onPress={addToCart} text="Add to cart"></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 15
  },

  image: {
    width: '100%',
    aspectRatio: 1
  },

  price: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  },

  size: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },

  sizeText: {
    fontSize: 20,
    fontWeight: '500'
  }
})

export default ProductDetailScreen