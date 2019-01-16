import React from 'react';
import PropTypes from 'prop-types';

const CartTotals = ({
  subTotal = 0,
  taxes = 0,
  delivery = 0,
  total = 0,
}) => (
    <div className="cart_totals">
      <div className="row">
        <div className="col-sm-6 cart_totals--info">
          <span>Sub-Total:</span>
        </div>
        <div className="col-sm-6 cart_totals--price qa-sub-total">
          <span>£{subTotal}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 cart_totals--info">
          <span>Taxes:</span>
        </div>
        <div className="col-sm-6 cart_totals--price qa-taxes">
          <span>£{taxes}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 cart_totals--info">
          <span>Delivery:</span>
        </div>
        <div className="col-sm-6 cart_totals--price qa-delivery">
          <span>£{delivery}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 cart_totals--info">
          <span>TOTAL:</span>
        </div>
        <div className="col-sm-6 cart_totals--price qa-total">
          <span>£{total}</span>
        </div>
      </div>
    </div>
  );

CartTotals.displayName = 'CartTotals';

CartTotals.propTypes = {
  subTotal: PropTypes.number.isRequired,
  taxes: PropTypes.number.isRequired,
  delivery: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default CartTotals;