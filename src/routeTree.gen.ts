/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ShoppingListIndexImport } from './routes/shopping-list/index'
import { Route as ShoppingListListIdIndexImport } from './routes/shopping-list/$listId/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ShoppingListIndexRoute = ShoppingListIndexImport.update({
  id: '/shopping-list/',
  path: '/shopping-list/',
  getParentRoute: () => rootRoute,
} as any)

const ShoppingListListIdIndexRoute = ShoppingListListIdIndexImport.update({
  id: '/shopping-list/$listId/',
  path: '/shopping-list/$listId/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/shopping-list/': {
      id: '/shopping-list/'
      path: '/shopping-list'
      fullPath: '/shopping-list'
      preLoaderRoute: typeof ShoppingListIndexImport
      parentRoute: typeof rootRoute
    }
    '/shopping-list/$listId/': {
      id: '/shopping-list/$listId/'
      path: '/shopping-list/$listId'
      fullPath: '/shopping-list/$listId'
      preLoaderRoute: typeof ShoppingListListIdIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/shopping-list': typeof ShoppingListIndexRoute
  '/shopping-list/$listId': typeof ShoppingListListIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/shopping-list': typeof ShoppingListIndexRoute
  '/shopping-list/$listId': typeof ShoppingListListIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/shopping-list/': typeof ShoppingListIndexRoute
  '/shopping-list/$listId/': typeof ShoppingListListIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/shopping-list' | '/shopping-list/$listId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/shopping-list' | '/shopping-list/$listId'
  id: '__root__' | '/' | '/shopping-list/' | '/shopping-list/$listId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ShoppingListIndexRoute: typeof ShoppingListIndexRoute
  ShoppingListListIdIndexRoute: typeof ShoppingListListIdIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ShoppingListIndexRoute: ShoppingListIndexRoute,
  ShoppingListListIdIndexRoute: ShoppingListListIdIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/shopping-list/",
        "/shopping-list/$listId/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/shopping-list/": {
      "filePath": "shopping-list/index.tsx"
    },
    "/shopping-list/$listId/": {
      "filePath": "shopping-list/$listId/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */