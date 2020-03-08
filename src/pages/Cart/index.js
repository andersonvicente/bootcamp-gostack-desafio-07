import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

import {
  Container,
  List,
  ProductSubtotal,
  Product,
  Photo,
  TitlePrice,
  Title,
  Price,
  SubtotalBar,
  AmountGroup,
  Amount,
  EmptyCart,
  EmptyCartText,
  Total,
  TotalText,
  TotalPriceText,
  FinishButton,
  FinishButtonText,
} from './styles';

function Cart({
  navigation,
  total,
  products,
  removeFromCart,
  updateAmountRequest,
}) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      {products.length > 0 ? (
        <>
          <List count={products.length}>
            {products.map(item => (
              <ProductSubtotal key={item.id}>
                <Product>
                  <Photo source={{ uri: item.image }} />
                  <TitlePrice>
                    <Title>{item.title}</Title>
                    <Price>{item.priceFormatted}</Price>
                  </TitlePrice>
                  <Icon
                    name="delete-forever"
                    size={40}
                    color="#7159c1"
                    onPress={() => removeFromCart(item.id)}
                  />
                </Product>
                <SubtotalBar>
                  <AmountGroup>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                      onPress={() => decrement(item)}
                    />
                    <Amount>{item.amount}</Amount>
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color="#7159c1"
                      onPress={() => increment(item)}
                    />
                  </AmountGroup>
                  <Price>{item.subtotal}</Price>
                </SubtotalBar>
              </ProductSubtotal>
            ))}
            <Total>
              <TotalText>TOTAL</TotalText>
              <TotalPriceText>{total}</TotalPriceText>
              <FinishButton>
                <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
              </FinishButton>
            </Total>
          </List>
        </>
      ) : (
        <EmptyCart>
          <Icon name="remove-shopping-cart" size={60} color="#999" />
          <EmptyCartText>Seu carrinho está vazio.</EmptyCartText>
        </EmptyCart>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
