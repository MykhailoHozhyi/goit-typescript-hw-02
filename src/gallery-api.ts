import axios from 'axios';
import { Image } from './types';

axios.defaults.baseURL = 'https://api.unsplash.com';

type FetchGallery = {
  results: Image[];
  total_pages: number;
  total: number;
};

export async function fetchGallery(
  searchValue: string,
  page: number
): Promise<FetchGallery> {
  const response = await axios.get('/search/photos', {
    params: {
      client_id: 'uYXw3BB_tc3ywt_T3NF5yYA8n7c37PAMn6uMTzXMS0U',
      query: searchValue,
      page,
    },
  });
  return response.data;
}
