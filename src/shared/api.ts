import { BASE_URL } from '@/config'
import axios from 'axios'

export const api = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 1000000,
})
