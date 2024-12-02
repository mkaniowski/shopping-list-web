import React from 'react'
import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { ShoppingListProduct } from '@/model/shoppingLists'
import { Button, Input, Label } from '@/components'
import { useTranslation } from 'react-i18next'
import { productFormValidation } from '@/views/shopping-list-id/productFormValidation'
import * as Dialog from '@radix-ui/react-dialog'

export interface IProductFormProps {
  handleSubmit: (values: any) => Promise<void>
  product?: ShoppingListProduct
}

export const ProductForm = ({ handleSubmit, product }: IProductFormProps) => {
  const { t } = useTranslation()

  const form = useForm<ShoppingListProduct, any>({
    defaultValues: {
      id: product?.id ?? '',
      name: product?.name ?? '',
      quantity: product?.quantity ?? 0,
      quantityType: product?.quantityType ?? '',
    },
    validatorAdapter: zodValidator(),
    validators: {
      onSubmit: productFormValidation,
    },
    onSubmit: async ({ value }) => {
      handleSubmit(value).then(() => form.reset())
    },
  })

  return (
    <form
      role='form'
      name={'product-form'}
      className='flex flex-col gap-y-4'
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
    >
      <form.Field
        name='name'
        children={(field) => {
          return (
            <>
              <Label htmlFor={field.name}>{t('shoppingLists.form.name')}:</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                data-testid='name-input'
              />
              <span
                className={`text-sm ${field.state.meta.errors ? 'text-destructive' : 'invisible'}`}
                data-testid='name-error'
              >
                {field.state.meta.errors ? field.state.meta.errors[0] : ' '}
              </span>
            </>
          )
        }}
      />
      <form.Field
        name='quantity'
        children={(field) => {
          return (
            <>
              <Label htmlFor={field.name}>{t('shoppingLists.form.quantity')}:</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                type='number'
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(parseFloat(e.target.value))}
                data-testid='quantity-input'
              />
              <span
                className={`text-sm ${field.state.meta.errors ? 'text-destructive' : 'invisible'}`}
                data-testid='quantity-error'
              >
                {field.state.meta.errors ? field.state.meta.errors[0] : ' '}
              </span>
            </>
          )
        }}
      />
      <form.Field
        name='quantityType'
        children={(field) => {
          return (
            <>
              <Label htmlFor={field.name}>{t('shoppingLists.form.quantityType')}:</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                data-testid='quantity-type-input'
              />
              <span
                className={`text-sm ${field.state.meta.errors ? 'text-destructive' : 'invisible'}`}
                data-testid='quantity-type-error'
              >
                {field.state.meta.errors ? field.state.meta.errors[0] : ' '}
              </span>
            </>
          )
        }}
      />

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => {
          if (!product) {
            return (
              <Button
                type='submit'
                disabled={!canSubmit}
                data-testid='submit-button'
              >
                {isSubmitting ? '...' : t('shoppingLists.form.submit')}
              </Button>
            )
          }

          return (
            <Dialog.Close asChild>
              <Button
                type='submit'
                disabled={!canSubmit}
                data-testid='edit-button'
              >
                {isSubmitting ? '...' : t('shoppingLists.form.edit')}
              </Button>
            </Dialog.Close>
          )
        }}
      />
    </form>
  )
}
