import { z } from 'zod'
import { t } from 'i18next'

export const productFormValidation = z.object({
  name: z.string().min(1, { message: t('shoppingLists.validation.required') }),
  quantity: z
    .number({ message: t('shoppingLists.validation.number') })
    .min(0.0001, { message: t('shoppingLists.validation.required') }),
  quantityType: z.string().min(1, { message: t('shoppingLists.validation.required') }),
})
