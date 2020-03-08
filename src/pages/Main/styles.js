import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 80px 20px;
  background: #000;
`;

export const ProductList = styled.FlatList.attrs({
  horizontal: true,
  showVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;

export const Product = styled.View`
  align-items: center;
  margin: 0 10px 10px;
  width: 220px;
  height: 358px;
  border-radius: 4px;
  background: #fff;
`;

export const Photo = styled.Image`
  align-items: center;
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 15px;
  width: 200px;
  height: 42px;
  color: #000;
  margin-top: 5px;
  text-align: left;
  margin-left: 10px;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
  width: 200px;
  height: 25px;
  color: #000;
  margin-top: 5px;
  margin-left: 10px;
  text-align: left;
`;

export const ButtonAdd = styled(RectButton)`
  flex-direction: row;
  margin-top: 10px;
  width: 200px;
  height: 42px;
  border-radius: 4px;
  background: #7159c1;
  align-content: center;
  align-items: center;
`;

export const ButtonAddAmount = styled.View`
  flex-direction: row;
  background: rgba(0, 0, 0, 0.1);
  width: 25%;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const ButtonIconText = styled.Text`
  font-size: 15px;
  color: #fff;
  text-transform: uppercase;
  width: 20px;
  text-align: center;
`;

export const ButtonAddText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin-left: 20%;
`;
