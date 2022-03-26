import React from "react";
import {
  Screen,
  Header,
  HeaderTitle,
  SearchButton,
  Icon,
  AddButtonArea,
  AddProductButton,
  AddProductButtonText,
} from "../components/ScreenComponents/HomeScreen-component";
import { FilterCardsArea } from "../features/FilterCardsArea";
import { ProductCardsArea } from "../features/ProductCardsArea";

export const HomeScreen = ({ navigation, route }) => {
  return (
    <Screen>
      <Header>
        <HeaderTitle>UPayments Store</HeaderTitle>
        <SearchButton onPress={() => null}>
          <Icon name="md-search-sharp" />
        </SearchButton>
      </Header>
      <FilterCardsArea />
      <ProductCardsArea navigation={navigation} route={route} />
      <AddButtonArea>
        <AddProductButton onPress={() => navigation.navigate("CreateScreen")}>
          <AddProductButtonText>＋</AddProductButtonText>
        </AddProductButton>
      </AddButtonArea>
    </Screen>
  );
};

