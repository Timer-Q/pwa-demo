import React from "react";
import PropTypes from "prop-types";

export default function MovieItem(props) {
  const { data, onClick, onTitleClick } = props;

  const handleClick = event => {
    event.preventDefault();
    onClick();
  };

  const handleTitleClick = event => {
    event.stopPropagation();
    onTitleClick();
  };

  return (
    <div className="movie-item">
      <div onClick={handleClick}>
        <img
          className="movie-item-cover"
          src={data.images.small}
          alt={data.title}
        />
      </div>
      <p onClick={handleTitleClick} className="movie-item-title">
        {data.title}
      </p>
    </div>
  );
}

MovieItem.propTypes = {
  onClick: PropTypes.func
};

MovieItem.defaultProps = {
  onClick: () => {},
  onTitleClick: () => {}
};
