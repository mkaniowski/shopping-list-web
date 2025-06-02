import { useTranslation } from 'react-i18next'
const NotFoundView = () => {
  const { t } = useTranslation('views')

  return <>{t('not-found')}</>
}

export default NotFoundView
