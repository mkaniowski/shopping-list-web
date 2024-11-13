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
  const { t } = useTranslation()

  return (
    <Card className='w-1/2 h-full'>
      <CardHeader>
        <CardTitle onClick={() => {}}>{t('home.quickStart.title')}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
