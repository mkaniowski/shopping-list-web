import { API_URL } from '@/config'
import axios from 'axios'
import { keycloak } from '@/shared/keycloak'

export const apiV1 = axios.create({
  baseURL: `${API_URL}/api/v1`,
  timeout: 10000,
  headers: {
    Authorization: 'Bearer ' + keycloak.token,
  },
})
