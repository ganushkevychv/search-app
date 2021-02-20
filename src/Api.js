import Axios from "axios";

const apiCallGet = (url = {}) => Axios.get(url).then(result => result.data);

export const getData = (queryStr) => apiCallGet(`https://api.unsplash.com/search/photos?per_page=20&query=${queryStr}&client_id=DPV1O_zxaOtfdxB2c8Lwd1QiRtsZH_VwinU1Jjy6LoU`)
export const getPhoto = (id) => apiCallGet(`https://api.unsplash.com/search/photos?query=${id}&client_id=DPV1O_zxaOtfdxB2c8Lwd1QiRtsZH_VwinU1Jjy6LoU`)
 
  