import React, { useState, useEffect } from "react";
import { getMovieDetail } from "../services";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";

function Subject(props) {
  const [detail, setDetail] = useState({ images: {}, genres: [], aka: [] });

  // const getDataFromCaches = () => {
  //   const {
  //     match: {
  //       params: { id }
  //     }
  //   } = props;
  //   return new Promise((resolve, reject) => {
  //     if ("caches" in window) {
  //       caches.match(id).then(match => {
  //         console.log(caches, match, id);
  //         if (match) {
  //           resolve(match.json());
  //         } else {
  //           resolve();
  //         }
  //       });
  //     } else {
  //       reject();
  //     }
  //   });
  // };

  const getDetail = async () => {
    const { match } = props;
    const result = await getMovieDetail(match.params.id);
    if (result) {
      setDetail(result);
    }
    // getDataFromCaches()
    //   .then(result => {
    //     console.log(result);
    //     if (result) {
    //       setDetail(result);
    //     }
    //   })
    //   .then(async () => {
    //     const result = await getMovieDetail(match.params.id);
    //     if (result) {
    //       setDetail(result);
    //     }
    //   });
  };

  useEffect(() => {
    getDetail();
  }, []);
  if (detail) {
    return (
      <div>
        <Header name={detail.title} />
        {detail.images && <img src={detail.images.medium} alt={detail.title} />}
        <p>
          {detail.title} {detail.year}年
        </p>
        <p>
          {detail.genres.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
        <p>
          {detail.aka.map((item, index) => (
            <span key={index}>{item}&nbsp;</span>
          ))}
        </p>
        <p>{detail.summary}</p>
        <p>{detail.wish_count}想看</p>
      </div>
    );
  }
  return null;
}

export default withRouter(Subject);
