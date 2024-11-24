import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export async function fetchGallery(searchValue, page) {
  const response = await axios.get('/search/photos', {
    params: {
      client_id: 'uYXw3BB_tc3ywt_T3NF5yYA8n7c37PAMn6uMTzXMS0U',
      query: searchValue,
      page,
    },
  });
  return response.data;
}
