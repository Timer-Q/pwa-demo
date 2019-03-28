import React, { useState, useEffect } from "react";
import MovieItem from "../components/MovieItem";
import { getInTheaters } from "../services";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
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

  const handleClick = (item, version) => {
    const { history } = props;
    let path = `/subject/${item.id}`;
    if (version >= 0) {
      path = `/subject/${item.id}?v=${version}`;
    }
    history.push({
      pathname: path
    });
  };

  return (
    <React.Fragment>
      <Header name="List" />
      <div className="movie">
        {theaters.map(item => (
          <MovieItem
            onClick={() => handleClick(item)}
            onTitleClick={() => handleClick(item, Math.ceil(Math.random() * 10))}
            data={item}
            key={item.id}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default withRouter(Movies);
