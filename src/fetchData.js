const axios = require('axios');

const getData = () => {
  return axios.get('https://api.myjson.com/bins/hc5ye');
}
export default getData;