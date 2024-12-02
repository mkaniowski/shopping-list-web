import { RegisterForm } from './RegisterForm'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components'

export interface IRegisterCardProps {
  handleSubmit: (values: any) => Promise<void>
}

export const RegisterCard = ({ handleSubmit }: IRegisterCardProps) => {
  const { t } = useTranslation()

  return (
    <Card className='flex items-center flex-col p-4 gap-y-8'>
      <CardHeader>
        <CardTitle
          data-testid='register-card-title'
          className='text-3xl bg-gradient-to-tl inline-block from-secondary to-accent bg-clip-text text-transparent'
        >
          {t('register.card.title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RegisterForm handleSubmit={handleSubmit} />
      </CardContent>
    </Card>
  )
}
