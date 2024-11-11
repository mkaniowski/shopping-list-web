import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import { router } from '@/main'
import { useNavigate } from '@tanstack/react-router'

const Navbar = () => {
  const { t } = useTranslation()
  const navigate = useNavigate({ from: window.location.pathname })

  return (
    <nav className='w-full h-16 bg-slate-200 border-2 border-slate-300 flex flex flex-row items-center justify-between px-8'>
      <div>tu bedzie logo</div>
      <span className='flex flex-row space gap-x-4'>
        <Button
          onClick={() => {
            navigate({ to: '/' })
          }}
        >
          {t('navbar.home')}
        </Button>
        <Button
          onClick={() => {
            navigate({ to: '/shopping-list' })
          }}
        >
          {t('navbar.lists')}
        </Button>
        <Button
          onClick={() => {
            /*TODO logout */
          }}
        >
          {t('navbar.logout')}
        </Button>
      </span>
    </nav>
  )
}

export default Navbar
