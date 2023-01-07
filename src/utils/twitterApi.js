import axios from 'axios';

const getTimeline = () => {
  return axios.get('http://www.mocky.io/v2/5d1ef97d310000552febe99d')
    .then(response => response.data);
};

export default {
  getTimeline
};
