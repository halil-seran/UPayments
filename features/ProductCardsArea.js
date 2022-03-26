import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Item } from "../components/shop/Item";
import { getProducts } from "../store/actions/products";
import { useDispatch, useSelector } from "react-redux";

export const ProductCardsArea = ({ navigation, route }) => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const renderItem = ({ item, route }) => (
    <Item navigation={navigation} item={item} route={route} />
  );
  return (
    <View style={styles.area}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={products}
        renderItem={({ item }) => renderItem({ item })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
});
