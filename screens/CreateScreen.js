import React, { useState } from "react";
import {
  Screen,
  ProductTitleInput,
  ProductPriceInput,
  ProductDescriptionInput,
  ProductImageLinkInput,
  CategoryText,
  AddProductButtonContainer,
  AddProductButton,
  AddProductText,
} from "../components/ScreenComponents/CreateScreen-component";
import { FilterCardsArea } from "../features/FilterCardsArea";

export const CreateScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  return (
    <Screen>
      <ProductTitleInput
        label="Product Title"
        mode="outlined"
        activeOutlineColor="black"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <ProductPriceInput
        label="Product Price"
        mode="outlined"
        activeOutlineColor="black"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <ProductDescriptionInput
        label="Product Description"
        mode="outlined"
        activeOutlineColor="black"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <ProductImageLinkInput
        label="Image Link"
        mode="outlined"
        activeOutlineColor="black"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <CategoryText>Selected Category: </CategoryText>
      <FilterCardsArea />
      <AddProductButtonContainer>
        <AddProductButton onPress={() => navigation.goBack()}>
          <AddProductText>Add Product</AddProductText>
        </AddProductButton>
      </AddProductButtonContainer>
    </Screen>
  );
};

