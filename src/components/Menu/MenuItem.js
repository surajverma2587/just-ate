import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({
  id,
  title,
  description,
  price,
  onClick,
}) => (id && title && description && price && onClick) ? (
    <div className="menu_item">
      <div className="row">
        <div className="col-sm-10 menu_item--title">
          <span>{title}</span>
        </div>
        <div className="col-sm-1 menu_item--price">
          <span>£{price}</span>
        </div>
        <div className="col-sm-1">
          <button type="button" className="btn btn-success qa-menu-item-button" id={id} onClick={onClick}>+</button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 menu_item--description">
          <span>{description}</span>
        </div>
      </div>
    </div>
  ) : null;

MenuItem.displayName = 'MenuItem';

MenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuItem;