import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Screen = styled.View`
  flex: 1;
  justify-content: space-between;
  background: #404040;
`;

export const ImageArea = styled.Image`
  width: 100%;
  height: 50%;
  background: white;
`;

export const ProductDetailArea = styled.View`
  width: 100%;
  height: 40%;
  background: black;
`;
export const ShadowArea = styled(LinearGradient)`
  width: 100%;
  height: 10%;
  background: black;
`;

export const ProductDetailHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductNameTitle = styled.Text`
  color: white;
  font-size:30px;
  margin-top:20px;
  margin-left:25px;
  font-weight: bold;
  letter-spacing: 1px;
`;
export const ProductPriceTitle = styled.Text`
  color: white;
  margin-top:20px;
  margin-right:25px;
  font-size:25px;
  font-weight: bold;
`;
export const ProductDescriptionArea = styled.View` 
  width:100%;
  height:100%;
`;
export const ProductDescriptionText = styled.Text`
  color: white;
  font-size:20px;
  margin-top:20px;
  margin-left:25px;
  margin-right:20px;

`;