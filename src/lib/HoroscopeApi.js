import axios from 'axios';

const HoroscopeApi = async (sign, day) => {
  const options = {
    method: 'POST',
    url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
    params: { sign, day },
    headers: {
      'X-RapidAPI-Key': "e3829c54e2msh3c091edc5484a5dp110238jsn0276eeef3d5d",
      'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default HoroscopeApi;
