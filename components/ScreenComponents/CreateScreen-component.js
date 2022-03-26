import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";
import { TextInput } from "react-native-paper";

export const Screen = styled.View`
  flex: 1;
  background: #f2f2f2;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
  align-items: center;
`;

export const ProductTitleInput = styled(TextInput)`
  height: 50px;
  width: 90%;
  margin-top: 10px;
`;

export const ProductPriceInput = styled(TextInput)`
  height: 50px;
  width: 90%;
  margin-top: 15px;
`;

export const ProductDescriptionInput = styled(TextInput)`
  height: 100px;
  width: 90%;
  margin-top: 10px;
`;

export const ProductImageLinkInput = styled(TextInput)`
  height: 50px;
  width: 90%;
  margin-top: 15px;
`;

export const CategoryText = styled.Text`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 90%;
  font-size: 20px;
`;

export const AddProductButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const AddProductButton = styled.TouchableOpacity`
  align-items: center;
  background: black;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 40px;
  height: 50px;
  width: 200px;
`;

export const AddProductText = styled.Text`
  color: white;
  font-size:16px;
  font-weight:bold;
`;
