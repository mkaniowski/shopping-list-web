export interface ShoppingList {
  id: string
  userId: string
  name: string
  products?: ShoppingListProduct[]
  created_at: string
  updated_at: string
}

export interface ShoppingListResponse {
  id: string
  userId: string
  name: string
  products?: string
  created_at: string
  updated_at: string
}

export interface ShoppingListProduct {
  id?: string
  name: string
  quantity: number
  quantityType: string
}
