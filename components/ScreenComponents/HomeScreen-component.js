import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native";

export const Screen = styled.SafeAreaView`
  flex: 1;
  background: #f2f2f2;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-size: 38px;
  padding-left: 10px;
  text-shadow: 2px 1px 3px black;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 3px;
`;

export const SearchButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Ionicons)`
  font-size: 30px;
  padding-right: 20px;
`;

export const FiltersContainer = styled(ScrollView)`
  flex-direction: row;
  width: 100%;
  height: 60px;
  max-height: 65px;
  padding-top: 5px;
  padding-left: 7px;
`;

export const FilterNameText = styled.Text`
  margin-left: 10px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 20px;
`;

export const CardsContainer = styled.View`
  flex: 1;
`;

export const AddButtonArea = styled.View`
  height: 80px;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  align-items: flex-end;
  justify-content: flex-start;
`;

export const AddProductButton = styled.TouchableOpacity`
  background: white;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 20px;
  border-width: 5px;
  border-color: black;
`;

export const AddProductButtonText = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 50px;
`;

export const ProductCardImage = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100%;
`;

export const ProductCardInfo = styled.TouchableOpacity`
  align-items: flex-start;
  justify-content: space-evenly;
  height: 20%;
  width: 100%;
  background: black;
  border-radius: 10px;
`;
export const ProductInfoSeparator = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const ProductCardTitleText = styled.Text`
  font-weight: bold;
  color: white;
  padding-left: 10px;
  font-size: 18px;
`;
export const ProductCardPriceText = styled.Text`
  font-weight: bold;
  color: white;
  padding-left: 10px;
  font-size: 18px;
`;
 

export const Separator = styled.View`
  flex:0.75;
`;
export const Separator2 = styled.View`
  flex:0.25;
`;

export const ProductInfoIcon = styled(Ionicons)`
  font-size: 20px;
  padding-right: 20px;
  color:white
`;