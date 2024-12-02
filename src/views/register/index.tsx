import { RegisterCard } from '@/views/register/components/RegisterCard'
import { useRegisterUserMutation } from '@/shared/authQueries'
import { IRegisterFormValues } from '@/views/register/components/RegisterForm'
import { useToast } from '@/hooks/use-toast'
import { useTranslation } from 'react-i18next'
import { sleep } from '@/utils/sleep'
import { useNavigate } from '@tanstack/react-router'

const Register = () => {
  const { mutateAsync: registerUser } = useRegisterUserMutation()
  const { toast } = useToast()
  const { t } = useTranslation()
  const navigate = useNavigate({ from: '/register' })

  const handleSubmit = async (values: IRegisterFormValues) => {
    await registerUser(values)
      .then(() => {
        toast({
          title: t('register.success.title'),
        })
      })
      .then(() => {
        sleep(3000)
      })
      .then(() => {
        navigate({ to: '/' })
      })
      .catch((e) => {
        toast({
          title: t('register.error.title'),
          description: e.message,
          variant: 'destructive',
        })
      })
  }

  return (
    <div className='w-full h-dvh items-center flex justify-center'>
      <RegisterCard handleSubmit={handleSubmit} />
    </div>
  )
}

export default Register
