import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components'
import { useNavigate, useRouter } from '@tanstack/react-router'

export const RecentListsCard = () => {
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
