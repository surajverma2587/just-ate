import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

const renderCartItems = (selectedItems, onClickCartItem) =>
  selectedItems.map(selectedItem => (
    <CartItem
      {...selectedItem}
      key={selectedItem.id}
      onClick={onClickCartItem}
    />
  ));

const Cart = ({
  subTotal = 0,
  taxes = 0,
  delivery = 0,
  total = 0,
  selectedItems,
  onClickCartItem,
}) => (selectedItems && selectedItems.length !== 0 && onClickCartItem) ? (
    <div className="cart">
      <div className="card">
        <div className="card-body">
          <span className="cart--title">Cart</span>
          <hr />
          { renderCartItems(selectedItems, onClickCartItem) }
          <CartTotals
            subTotal={subTotal}
            taxes={taxes}
            delivery={delivery}
            total={total}
          />
        </div>
      </div>
    </div>
  ) : null;

Cart.displayName = 'Cart';

Cart.propTypes = {
  subTotal: PropTypes.number.isRequired,
  taxes: PropTypes.number.isRequired,
  delivery: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Cart;