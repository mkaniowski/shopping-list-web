import { API_URL } from '@/config'
import axios from 'axios'
import { keycloak } from '@/shared/keycloak'

export const apiV1 = axios.create({
  baseURL: `${API_URL}/api/v1`,
  timeout: 10000,
})

apiV1.interceptors.request.use(
  async (config) => {
    if (keycloak.authenticated) {
      await keycloak.updateToken(60)
      config.headers.Authorization = `Bearer ${keycloak.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
