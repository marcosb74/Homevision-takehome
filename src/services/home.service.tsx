import axiosRetry from 'axios-retry';
import axios, { AxiosResponse } from 'axios';
import { HouseResponse } from '../types/house';

export default function getHouses(
  page: number
): Promise<AxiosResponse<HouseResponse>> {
  axiosRetry(axios, { retries: 0, retryDelay: axiosRetry.exponentialDelay });
  return axios.get(
    `https://app-homevision-staging.herokuapp.com/api_project/houses?page=${page}&per_page=10`
  );
}
