import { useMutation, useQuery } from '@tanstack/react-query'
import { apiV1 } from '@/shared/api'
import { ShoppingList, ShoppingListProduct } from '@/model/shoppingLists'

export const useGetShoppingLists = () => {
  return useQuery({
    queryKey: ['shoppingLists'],
    queryFn: async () => {
      const { data } = await apiV1.get<ShoppingList[]>('/shopping-list')
      return data
    },
  })
}

export const useGetShoppingListById = (listId?: string) => {
  return useQuery({
    queryKey: ['shoppingList', listId],
    enabled: !!listId,
    queryFn: async () => {
      const { data } = await apiV1.get<ShoppingList>(`/shopping-list/${listId}`)
      return data
    },
  })
}

export const useCreateShoppingListMutation = () => {
  return useMutation({
    mutationKey: ['createShoppingList', 'shoppingLists'],
    mutationFn: async (name: string) => {
      const { data } = await apiV1.post('/shopping-list', undefined, { params: { name } })
      return data
    },
  })
}

export const useUpdateShoppingListMutation = () => {
  return useMutation({
    mutationKey: ['updateShoppingList'],
    mutationFn: async (list: any) => {
      const { data } = await apiV1.put(`/shopping-list/{${list.id}}`, list)
      return data
    },
  })
}

export interface IShoppingListMutation {
  listId: string
  product: ShoppingListProduct
}

export const useAddProductToShoppingListMutation = () => {
  return useMutation({
    mutationKey: ['addProductToShoppingList'],
    mutationFn: async ({ listId, product }: IShoppingListMutation) => {
      const { data } = await apiV1.post(`/shopping-list/${listId}`, product)
      return data
    },
  })
}

export const useRemoveItemFromShoppingList = () => {
  return useMutation({
    mutationKey: ['addProductToShoppingList'],
    mutationFn: async ({ listId, product }: IShoppingListMutation) => {
      const { data } = await apiV1.delete(`/shopping-list/${listId}/product/${product.id}`)
      return data
    },
  })
}

export interface IUpdateProductInShoppingListMutation {
  listId: string
  products: ShoppingListProduct[]
}

export const useUpdateProductInShoppingListMutation = () => {
  return useMutation({
    mutationKey: ['updateProductInShoppingList'],
    mutationFn: async ({ listId, products }: IUpdateProductInShoppingListMutation) => {
      const { data } = await apiV1.patch(`/shopping-list/${listId}`, { products: products })
      return data
    },
  })
}

export const useRemoveShoppingListMutation = () => {
  return useMutation({
    mutationKey: ['removeShoppingList'],
    mutationFn: async (listId: string) => {
      const { data } = await apiV1.delete(`/shopping-list/${listId}`)
      return data
    },
  })
}
