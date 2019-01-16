import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const renderMenuItems = (menuItems, onClickMenuItem) =>
  menuItems.map(menuItem => (
    <MenuItem
      {...menuItem}
      onClick={onClickMenuItem}
      key={menuItem.id}
    />
  ));

const MenuSection = ({
  id,
  title,
  description,
  menuItems,
  onClickMenuItem,
}) => (id && title && description && menuItems && menuItems.length !== 0 && onClickMenuItem) ? (
  <div className="menu_section">
    <div className="menu_section--header">
      <div className="row">
        <div className="col-sm-11 menu_section--title">
          <span>{title}</span>
        </div>
        <div className="col-sm-1">
          <button type="button" className="btn btn-primary" data-toggle="collapse" data-target={`#${id}`}>v</button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 menu_section--description">
          <span>{description}</span>
        </div>
      </div>
    </div>
    <div className="collapse menu_section--body" id={id}>
      {
        renderMenuItems(menuItems, onClickMenuItem)
      }
    </div>
  </div>
) : null;

MenuSection.displayName = 'MenuSection';

MenuSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired,
  onClickMenuItem: PropTypes.func.isRequired,
};

export default MenuSection;