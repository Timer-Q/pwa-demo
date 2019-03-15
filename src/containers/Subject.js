import React, { useState, useEffect } from "react";
import { getMovieDetail } from "../services";
import { withRouter } from "react-router-dom";

function Subject(props) {
  const [detail, setDetail] = useState({ images: [], genres: [], aka: [] });

  const getDetail = async () => {
    const { match } = props;
    const result = await getMovieDetail(match.params.id);
    console.log(result);
    setDetail(result);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      <img src={detail.images.medium} alt={detail.title} />
      <p>{detail.title}</p>
      <p>
        {detail.genres.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </p>
      <p>
        {detail.aka.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </p>
    </div>
  );
}

export default withRouter(Subject);
