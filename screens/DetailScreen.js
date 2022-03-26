import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import {
  Screen,
  ImageArea,
  ProductDetailArea,
  ShadowArea,
  ProductDetailHeader,
  ProductNameTitle,
  ProductPriceTitle,
  ProductDescriptionArea,
  ProductDescriptionText,
} from "../components/ScreenComponents/DetailScreen-component";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions/products";

export const DetailScreen = ({ route, navigation }) => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const { productName, productAvatar, productPrice, productdDescription } =
    route.params;

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Screen>
      <ImageArea
        resizeMode="contain"
        source={{
          uri: productAvatar,
        }}
      />
      <ShadowArea colors={["#ffffff", "#bfbfbf", "#404040"]} />
      <ProductDetailArea style={styles.DetailContainer}>
        <ProductDetailHeader>
          <ProductNameTitle>{productName}</ProductNameTitle>
          <ProductPriceTitle>${productPrice}</ProductPriceTitle>
        </ProductDetailHeader>
        <ProductDescriptionArea>
          <ProductDescriptionText>{productdDescription}</ProductDescriptionText>
        </ProductDescriptionArea>
      </ProductDetailArea>
    </Screen>
  );
};

const styles = StyleSheet.create({
  DetailContainer: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
});
