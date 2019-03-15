import React, { useState, useEffect } from "react";
import MovieItem from "../components/MovieItem";
import { getInTheaters } from "../services";
import { withRouter } from "react-router-dom";
import "../styles/movie.scss";

function Movies(props) {
  const [theaters, setTheaters] = useState([]);

  const getTheaters = () => {
    getInTheaters()
      .then(result => {
        setTheaters(result);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    getTheaters();
  }, []);

  const handleClick = item => {
    const { history } = props;
    console.log(history);
    console.log(item);
    history.push({
      pathname: `/subject/${item.id}`
    });
  };

  return (
    <div className="movie">
      {theaters.map(item => (
        <MovieItem
          onClick={() => handleClick(item)}
          data={item}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default withRouter(Movies);
