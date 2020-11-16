import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import {
    CartContainer,
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden }) => (
    <CartContainer onClick={toggleCartHidden}>
    <ShoppingCartIcon />
  </CartContainer>
  );
  
  const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(CartIcon);