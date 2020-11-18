import styled from 'styled-components';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingCartIcon)`
  width: 50px;
  height: 50px;
`;

export const ItemCountContainer = styled.span`
color: red;
position: absolute;
font-size: 17px;
font-weight: bold;
bottom: 16px;
`;
