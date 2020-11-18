import React from 'react';


import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartDropdownButton>
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);



export default CartDropdown;
