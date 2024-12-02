import { useKeycloak } from '@react-keycloak/web'
import axios, { AxiosInstance } from 'axios'
import { useEffect, useRef } from 'react'
import { API_URL } from '@/config'

export const useAxios = () => {
  const axiosInstance = useRef<AxiosInstance>()
  const { keycloak, initialized } = useKeycloak()
  const kcToken = keycloak?.token ?? ''

  useEffect(() => {
    axiosInstance.current = axios.create({
      baseURL: `${API_URL}/api/v1`,
      timeout: 10000,
      headers: {
        Authorization: initialized ? `Bearer ${kcToken}` : undefined,
      },
    })

    return () => {
      axiosInstance.current = undefined
    }
  }, [initialized, kcToken])

  return axiosInstance.current
}
