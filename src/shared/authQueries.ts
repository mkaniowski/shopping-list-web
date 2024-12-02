import { useMutation } from '@tanstack/react-query'
import { apiV1 } from '@/shared/api'
import { IRegisterFormValues } from '@/views/register/components/RegisterForm'

export const useRegisterUserMutation = () => {
  return useMutation({
    mutationKey: ['registerUser'],
    mutationFn: async (values: IRegisterFormValues) => {
      const { data } = await apiV1.post(`/auth/register`, values)
      return data
    },
  })
}
