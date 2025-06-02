import { useTranslation } from 'react-i18next'
import { useTranslation } from 'react-i18next'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const QuickStartCard = () => {
  const { t } = useTranslation('views/home/components')

  const { t } = useTranslation()

  return (
    <Card className='w-1/2 h-full'>
      <CardHeader>
        <CardTitle onClick={() => {}}>{t('home.quickStart.title')}</CardTitle>
        <CardDescription>{t('card-description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{t('card-content')}</p>
      </CardContent>
      <CardFooter>
        <p>{t('card-footer')}</p>
      </CardFooter>
    </Card>
  )
}
