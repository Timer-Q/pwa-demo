import axios from "axios";

// https://bangumi.bilibili.com/api/timeline_v2_global
const getInTheaters = () => {
  return new Promise(async function(resolve) {
    const {
      data: { subjects }
    } = await axios.get("https://easy-mock.com/mock/5b20fc50c0f62604c7cefdb9/example/movies");
    resolve(subjects);

    // axios
    //   .get("https://news-at.zhihu.com/api/3/news/hot")
    //   .then(({ data: { result, code, message } }) => {
    //     if (code === 0) {
    //       resolve(result);
    //     } else {
    //       reject(message);
    //     }
    //   })
    //   .catch(error => reject(error));
  });
};

const getMovieDetail = id => {
  return new Promise(async function(resolve) {
    const { data } = await axios.get(
      `http://api.douban.com/v2/movie/subject/${id}`
    );
    resolve(data);
  });
};

export { getInTheaters, getMovieDetail };
