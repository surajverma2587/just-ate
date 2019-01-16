import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const MenuHeader = ({
  title,
  address,
  imgUrl = '',
  reviews = 0,
  rating = 0,
}) => (title && address) ? (
  <div className="media">
    <div className="media-left">
      <img className="mr-3" src={imgUrl} alt={title} width={120} height={100} />
    </div>
    <div className="media-body">
      <div className="row">
        <div className="col-sm-12">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <StarRatings
            rating={rating || 0}
            starDimension="20px"
            starSpacing="1px"
            starRatedColor="red"
          />
        </div>
        <div className="col-sm-10">
          <span>{reviews || 0} reviews</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <span>{address}</span>
        </div>
      </div>
    </div>
  </div>
) : null;

MenuHeader.displayName = 'MenuHeader';

MenuHeader.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  reviews: PropTypes.number,
  rating: PropTypes.number,
};

export default MenuHeader;