// @ts-expect-error - No .d.ts file is provided for keycloak-js
import Keycloak from 'keycloak-js'
import { KEYCLOAK_CLIENT_ID, KEYCLOAK_REALM_NAME, KEYCLOAK_URL } from '@/config'

export const keycloak = new Keycloak({
  url: KEYCLOAK_URL,
  realm: KEYCLOAK_REALM_NAME,
  clientId: KEYCLOAK_CLIENT_ID,
})
