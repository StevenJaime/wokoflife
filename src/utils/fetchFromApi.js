import axios from 'axios';

const BASE_URL = 'https://chinese-food-db.p.rapidapi.com/';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '17d0ef87femshb04ee4f18a37d3ap1475a8jsn1eb37f3a4356',
    'X-RapidAPI-Host': 'chinese-food-db.p.rapidapi.com'
  }
};



export const fetchFromApi = async(url) =>{
    const {data} = await axios.get(`${BASE_URL}${url}`, options)

    return data;
}
