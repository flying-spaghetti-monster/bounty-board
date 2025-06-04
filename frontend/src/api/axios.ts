import axios from 'axios';
import { getToken } from '../helper/localSorageHelper';

export const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Authorization': `Bearer ${getToken()}`
  },
});
