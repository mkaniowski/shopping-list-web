import { z } from 'zod'
import { t } from 'i18next'

export const createShoppingListValidationSchema = z.object({
  name: z.string().min(1, { message: t('shoppingLists.validation.required') }),
})
