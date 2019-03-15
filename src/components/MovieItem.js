import React from "react";
import PropTypes from "prop-types";

export default function MovieItem(props) {
  const { data, onClick } = props;

  const handleClick = () => {
    onClick();
  };

  return (
    <div onClick={handleClick} className="movie-item">
      <img
        className="movie-item-cover"
        src={data.images.medium}
        alt={data.title}
      />
      <p className="movie-item-title">{data.title}</p>
    </div>
  );
}

MovieItem.propTypes = {
  onClick: PropTypes.func
};

MovieItem.defaultProps = {
  onClick: () => {}
};
