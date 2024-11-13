import { useMutation, useQuery } from '@tanstack/react-query'
import { apiV1 } from '@/shared/api'

export const useGetShoppingLists = () => {
  return useQuery({
    queryKey: ['shoppingLists'],
    queryFn: async () => {
      const { data } = await apiV1.get('/shopping-lists')
      return data
    },
  })
}

export const useGetShoppingListById = (listId: string) => {
  return useQuery({
    queryKey: ['shoppingList', listId],
    enabled: !!listId,
    queryFn: async () => {
      const { data } = await apiV1.get(`/shopping-lists/{${listId}}`)
      return data
    },
  })
}

export const useCreateShoppingListMutation = () => {
  return useMutation({
    mutationKey: ['createShoppingList'],
    mutationFn: async (list: any) => {
      const { data } = await apiV1.post('/shopping-lists', list)
      return data
    },
  })
}

export const useUpdateShoppingListMutation = () => {
  return useMutation({
    mutationKey: ['updateShoppingList'],
    mutationFn: async (list: any) => {
      const { data } = await apiV1.put(`/shopping-lists/{${list.id}}`, list)
      return data
    },
  })
}

export const useRemoveShoppingListMutation = () => {
  return useMutation({
    mutationKey: ['removeShoppingList'],
    mutationFn: async (listId: string) => {
      const { data } = await apiV1.delete(`/shopping-lists/{${listId}}`)
      return data
    },
  })
}
