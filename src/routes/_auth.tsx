import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Navbar, Skeleton, Wrapper } from '@/components'
import { useKeycloak } from '@react-keycloak/web'

export const Route = createFileRoute('/_auth')({
  component: AuthComponent,
})

function AuthComponent() {
  const { keycloak, initialized } = useKeycloak()

  if (!initialized) {
    return (
      <div className={'w-full p-8'}>
        <Skeleton className='h-16 w-full' />
      </div>
    )
  }

  if (!keycloak.authenticated) {
    keycloak.login()
  }

  return (
    <>
      <title>Shopping-list</title>
      <Wrapper>
        <Navbar />
        <Outlet />
      </Wrapper>
    </>
  )
}
