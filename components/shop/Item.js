import React from "react";
import { StyleSheet, Image, Alert } from "react-native";
import {
  ProductCardImage,
  ProductCardInfo,
  ProductCardTitleText,
  ProductCardPriceText,
  ProductInfoSeparator,
  Separator,
  Separator2,
  ProductInfoIcon,
} from "../ScreenComponents/HomeScreen-component";
import { CardsContainer } from "../ScreenComponents/HomeScreen-component";
import { ProductCard } from "../UI-Components/ProductCard";

export const Item = ({ navigation, item, route }) => {
  const productName = `${item.name}`;
  const productAvatar = `${item.avatar}`;
  const productPrice = `${item.price}`;
  const productdDescription = `${item.description}`;
  const productDeleteButton = () =>
    Alert.alert("DELETE PRODUCT", "Are you sure you want to delete this?", [
      {
        text: "Cancel",
        onPress: () => console.log("wont deleted"),
        style: "cancel",
      },
      { text: "DELETE", onPress: () => console.log("will deleted") },
    ]);
  return (
    <CardsContainer>
      <ProductCard style={styles.cardContainer}>
        <ProductCardImage
          onPress={() => {
            navigation.navigate("DetailScreen", {
              productName,
              productAvatar,
              productPrice,
              productdDescription,
            });
          }}
        >
          <Image style={styles.image} source={{ uri: item.avatar }} />
        </ProductCardImage>
        <ProductCardInfo onPress={productDeleteButton}>
          <ProductInfoSeparator>
            <Separator>
              <ProductCardTitleText>{item.name}</ProductCardTitleText>
              <ProductCardPriceText>${item.price}</ProductCardPriceText>
            </Separator>
            <Separator2 style={{ alignItems: "flex-end" }}>
              <ProductInfoIcon name="pencil-sharp" />
            </Separator2>
          </ProductInfoSeparator>
        </ProductCardInfo>
      </ProductCard>
    </CardsContainer>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
  image: {
    width: "80%",
    height: "80%",
    marginBottom: 10,
  },
  cardContainer: {
    alignItems: "center",
    marginLeft: 10,
    width: "90%",
    maxWidth: 190,
    height: 260,
    marginVertical: 10,
  },
});
