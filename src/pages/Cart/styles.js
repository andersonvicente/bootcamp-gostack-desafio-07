import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  /* padding: 80px 20px; */
  background: #000;
  padding: 80px 10px 0px 10px;
`;

export const List = styled.ScrollView`
  width: 100%;
  max-height: ${props => (props.count === 1 ? '350px' : '100%')};
  border-radius: 5px;
  background: #fff;
  padding: 10px 10px 10px 10px;
`;

export const ProductSubtotal = styled.View`
  flex-direction: column;
  align-content: center;
  align-items: center;
  background: #fff;
`;

export const Product = styled.View`
  flex-direction: row;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  margin-left: 20px;
`;

export const Photo = styled.Image`
  align-items: center;
  width: 80px;
  height: 80px;
`;

export const TitlePrice = styled.View`
  flex-direction: column;
  align-items: center;
  width: 55%;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 15px;
  width: 163px;
  height: 60px;
  color: #000;
  text-align: left;
  margin-left: 20px;
  margin-right: 10px;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
  width: 163px;
  color: #000;
  text-align: left;
  margin-left: 20px;
`;

export const SubtotalBar = styled.View`
  flex-direction: row;
  background: #eee;
  border-radius: 5px;
  width: 95%;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const AmountGroup = styled.View`
  flex-direction: row;
  width: 50%;
  margin-left: 10px;
`;

export const Amount = styled.Text`
  width: 51px;
  height: 26px;
  background: #fff;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
  font-size: 15px;
  color: #000;
  padding-left: 10px;
  margin-left: 5px;
  margin-right: 5px;
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
`;

export const ButtonAddText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin-left: 20%;
`;

export const EmptyCart = styled.View`
  flex-direction: column;
  align-content: center;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  width: 100%;
  height: 130px;
  padding-top: 20px;
`;

export const EmptyCartText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const Total = styled.View`
  flex-direction: column;
  align-content: center;
  align-items: center;
  background: #fff;
  width: 100%;
  height: 140px;
  padding-top: 20px;
`;

export const TotalText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #999;
`;

export const TotalPriceText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #000;
`;

export const FinishButton = styled(RectButton)`
  flex-direction: row;
  margin-top: 10px;
  width: 200px;
  height: 42px;
  border-radius: 4px;
  background: #7159c1;
  align-content: center;
  align-items: center;
`;

export const FinishButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin-left: 20%;
`;
