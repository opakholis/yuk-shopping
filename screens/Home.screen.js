import * as React from "react";
import tw from "twrnc";
import AppLoading from "expo-app-loading";
import { FlatGrid } from "react-native-super-grid";
import { Feather } from "@expo/vector-icons";
import { TextInput, Text, StatusBar, View, SafeAreaView } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import { ProductItem } from "../components/ProductItem";

export function HomeScreen() {
  const [products, setProducts] = React.useState([]);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setProducts(json);
        // console.log(json);
      } catch (err) {
        console.error(err);
      }
    };
    return fetchData();
  }, []);

  if (!fontsLoaded) return <AppLoading />;

  return (
    <SafeAreaView
      style={[
        tw`bg-white flex-1 px-4`,
        { paddingTop: StatusBar.currentHeight },
      ]}
    >
      <View
        style={tw`flex-row items-center bg-zinc-50 rounded-lg w-full my-2`}
      >
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

