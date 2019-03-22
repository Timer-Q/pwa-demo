import React, { useState, useEffect } from "react";
import { getMovieDetail } from "../services";
import { withRouter } from "react-router-dom";

function Subject(props) {
  const [detail, setDetail] = useState({ images: [], genres: [], aka: [] });

  const getDataFromCaches = () => {
    return new Promise((resolve, reject) => {
      if ("caches" in window) {
        caches.match("http://localhost:3030/detail").then(match => {
          if (match) {
            resolve(match.json());
          } else {
            resolve();
          }
        });
      } else {
        reject();
      }
    });
  };

  const getDetail = async () => {
    const { match } = props;
    getDataFromCaches()
      .then(result => {
        console.log(result);
        if (result) {
          setDetail(result);
        }
      })
      .then(async () => {
        const result = await getMovieDetail(match.params.id);
        if (result) {
          setDetail(result);
        }
      });
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
