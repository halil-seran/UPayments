import React from "react";
import { StyleSheet } from "react-native";
import {
  FiltersContainer,
  FilterNameText,
} from "../components/ScreenComponents/HomeScreen-component";
import { FilterCard } from "../components/UI-Components/FilterCard";

export const FilterCardsArea = ({ navigation }) => {
  state = {
    categories: [
      { categoryName: "All", id: 0 },
      { categoryName: "Accessories", id: 1 },
      { categoryName: "Womens-Clothings", id: 2 },
      { categoryName: "Mens-Clothings", id: 3 },
      { categoryName: "Furnitures", id: 4 },
      { categoryName: "Electronics", id: 5 },
    ],
  };

  return (
    <FiltersContainer horizontal={true}>
      {state.categories.map((item, index) => (
        <FilterCard style={styles.filterCardContainer} key={item.id}>
          <FilterNameText>{item.categoryName}</FilterNameText>
        </FilterCard>
      ))}
    </FiltersContainer>
  );
};

const styles = StyleSheet.create({
  filterCardContainer: {
    height: 50,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
