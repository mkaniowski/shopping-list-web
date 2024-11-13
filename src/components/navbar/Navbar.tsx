import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import { useNavigate } from '@tanstack/react-router'
import { keycloak } from '@/shared/keycloak'

export const Navbar = () => {
  const { t } = useTranslation()
  const navigate = useNavigate({ from: window.location.pathname })

  return (
    <nav className='w-full h-16 bg-primary-100 border-2 border-background-300 flex flex-row items-center justify-between px-8'>
      <div>tu bedzie logo</div>
      <span className='flex flex-row space gap-x-4'>
        <Button
          className='bg-gradient-to-tr from-primary to-secondary'
          onClick={() => {
            navigate({ to: '/' })
          }}
        >
          {t('navbar.home')}
        </Button>
        <Button
          className='bg-gradient-to-br from-secondary to-accent'
          onClick={() => {
            navigate({ to: '/shopping-list' })
          }}
        >
          {t('navbar.lists')}
        </Button>
        <Button
          className='bg-gradient-to-tr from-accent to-primary'
          onClick={() => {
            keycloak.logout()
          }}
        >
          {t('navbar.logout')}
        </Button>
      </span>
    </nav>
  )
}
