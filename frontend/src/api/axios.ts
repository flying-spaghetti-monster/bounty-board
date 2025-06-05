import axios from 'axios';
import { getToken } from '../helper/localSorageHelper';

export const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
});

instance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});