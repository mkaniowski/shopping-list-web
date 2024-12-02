import * as React from 'react'
import { useState } from 'react'
import { useKeycloak } from '@react-keycloak/web'

export interface IAuth {
  initialized: boolean
  keycloak: any
  isAuthenticated: boolean
}

export interface IAuthContext {
  auth: IAuth
  eventHandler: (event: string, error: unknown) => void
}

const AuthContext = React.createContext<IAuthContext | null>(null)

export function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const { keycloak, initialized } = useKeycloak()
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    keycloak: keycloak,
    initialized: initialized,
  })

  const eventHandler = (event: string, error: unknown) => {
    console.log('onKeycloakEvent', event, error)

    if (event === 'onReady') {
      console.log('Keycloak is ready')
      setAuth((prev) => ({
        ...prev,
        initialized: initialized,
      }))
    }

    if (event === 'onAuthSuccess') {
      console.log('Authentication successful')
      setAuth((prev) => ({
        ...prev,
        isAuthenticated: keycloak.authenticated,
      }))
    }

    if (event === 'onAuthError') {
      console.error('Authentication error:', error)
      setAuth((prev) => ({
        ...prev,
        isAuthenticated: false,
      }))
    }

    if (event === 'onAuthLogout') {
      console.log('User logged out')
      setAuth((prev) => ({
        ...prev,
        isAuthenticated: keycloak.authenticated,
      }))
    }
  }

  return <AuthContext.Provider value={{ auth, eventHandler }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
