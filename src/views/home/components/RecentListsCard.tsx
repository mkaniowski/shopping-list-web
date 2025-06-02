import { useTranslation } from 'react-i18next'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components'
import { useNavigate, useRouter } from '@tanstack/react-router'

export const RecentListsCard = () => {
  const { t } = useTranslation('views/home/components')

  const { t } = useTranslation()
  const navigate = useNavigate({ from: '/' })
  const router = useRouter()

  return (
    <Card className='w-1/2 h-full'>
      <CardHeader>
        <CardTitle
          className='cursor-pointer'
          onClick={() => {
            navigate({ to: '/shopping-list' })
          }}
          onMouseOver={() => {
            router.preloadRoute({ to: '/shopping-list' })
          }}
        >
          {t('home.recentLists.title')}
        </CardTitle>
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
