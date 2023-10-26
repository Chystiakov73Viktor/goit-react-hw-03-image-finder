import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '39345214-717d6f4bf0efce76fbf95fde4';

export const fetchCardURL = async (query, page, perPage) => {
  return await axios
    .get(`${BASE_URL}`, {
      params: {
        key: `${KEY}`,
        q: `${query}`,
        page: `${page}`,
        per_page: `${perPage}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
};
