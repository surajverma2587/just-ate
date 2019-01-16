import React from 'react';
import PropTypes from 'prop-types';
import MenuSection from './MenuSection';
import MenuHeader from './MenuHeader';

const renderMenuSections = (menuSections, onClickMenuItem) =>
  menuSections.map(menuSection => (
    <MenuSection
      {...menuSection}
      onClickMenuItem={onClickMenuItem}
      key={menuSection.id}
    />
  ));

const Menu = ({
  id,
  title,
  address,
  imgUrl,
  reviews,
  rating,
  menuSections,
  onClickMenuItem,
}) => (id && title && address && menuSections && menuSections.length !== 0 && onClickMenuItem) ? (
    <div className="restaurant">
      <MenuHeader
        title={title}
        address={address}
        imgUrl={imgUrl}
        reviews={reviews}
        rating={rating}
      />
      <div className="menu">
        { renderMenuSections(menuSections, onClickMenuItem) }
      </div>
    </div>
  ) : null

Menu.displayName = 'Menu';

Menu.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  reviews: PropTypes.number,
  rating: PropTypes.number,
  menuSections: PropTypes.array.isRequired,
  onClickMenuItem: PropTypes.func.isRequired,
};

export default Menu;