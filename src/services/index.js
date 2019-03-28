import axios from "axios";

axios.defaults.baseURL = "https://easy-mock.com/mock/5b20fc50c0f62604c7cefdb9";

// https://bangumi.bilibili.com/api/timeline_v2_global
const getInTheaters = () => {
  return new Promise(async function(resolve, reject) {
    const {
      data: { subjects }
    } = await axios.get("/proxyMovies");
    resolve(subjects);
  });
};

const getMovieDetail = id => {
  return new Promise(async function(resolve) {
    const { data } = await axios.get(`/proxyDetail/${id}`);
    resolve(data);
  });
};

export { getInTheaters, getMovieDetail };
