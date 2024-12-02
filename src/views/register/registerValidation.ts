import { t } from 'i18next'
import { z } from 'zod'

export const registerValidationSchema = z.object({
  firstName: z.string().min(1, { message: t('register.validation.required') }),
  lastName: z.string().min(1, { message: t('register.validation.required') }),
  username: z
    .string()
    .min(1, { message: t('register.validation.required') })
    .regex(/^[\dA-Za-z]+$/, {
      message: t('register.validation.username.invalid'),
    }),
  email: z
    .string()
    .min(1, { message: t('register.validation.required') })
    .email({ message: t('register.validation.email.invalid') }),
  password: z
    .string()
    .min(8, { message: t('register.validation.password.minLength') })
    .regex(/[A-Z]/, { message: t('register.validation.password.uppercase') })
    .regex(/[a-z]/, { message: t('register.validation.password.lowercase') })
    .regex(/\d/, { message: t('register.validation.password.number') })
    .regex(/[\W_]/, { message: t('register.validation.password.special') }),
})
