import * as React from "react";
import tw from "twrnc";
import { FlatGrid } from "react-native-super-grid";
import { Feather } from "@expo/vector-icons";
import { TextInput, StatusBar, View, SafeAreaView } from "react-native";

import { ProductItem } from "../components/ProductItem";

export function HomeScreen() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => {
          setProducts(res);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    return fetchData();
  }, []);

  return (
    <SafeAreaView
      style={[
        tw`bg-white flex-1 px-4`,
        { paddingTop: StatusBar.currentHeight },
      ]}
    >
      <View style={tw`flex-row items-center bg-zinc-50 rounded-lg w-full my-2`}>
        <Feather name="search" size={24} style={tw`text-zinc-500 px-2`} />
        <TextInput
          style={[
            tw`p-2 text-sm w-[90%]`,
            { fontFamily: "Poppins_400Regular" },
          ]}
          placeholder="Search"
        />
      </View>
      <FlatGrid
        data={products}
        itemDimension={130}
        // spacing={12}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
    </SafeAreaView>
  );
}
