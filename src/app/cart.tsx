import { StatusBar } from "expo-status-bar";
import { View, Text, Platform, FlatList } from "react-native";
import { UseCart } from "../providers/cartProviders";

const CartScreen = () => {
  const { items } = UseCart()

  return (
    <View>
      <FlatList data={items} />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen