import callWebApi from '../helpers/webApiHelper';
const COUNTRY = 'US';

export const getMovies = async date => {
  const {data} = await callWebApi({
    url: '/',
    method: 'GET',
    params: {
      country: COUNTRY,
      date,
    },
  });
  return data;
};
