import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";

// https://bangumi.bilibili.com/api/timeline_v2_global
const getInTheaters = () => {
  return new Promise(async function(resolve) {
    const {
      data: { subjects }
    } = await axios.get("https://easy-mock.com/mock/5b20fc50c0f62604c7cefdb9/example/movies");
    resolve(subjects);
  });
};

const getMovieDetail = id => {
  return new Promise(async function(resolve) {
    const { data } = await axios.post(`/detail`, { id });
    resolve(data);
  });
};

export { getInTheaters, getMovieDetail };
