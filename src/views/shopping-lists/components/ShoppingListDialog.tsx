import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { useTranslation } from 'react-i18next'
import { Button, Input, Label } from '@/components'
import { createShoppingListValidationSchema } from '@/views/shopping-lists/shoppingListValidationSchemas'
import * as Dialog from '@radix-ui/react-dialog'

export interface IShoppingListDialogProps {
  onSubmit: (name: string) => Promise<void>
}

export const ShoppingListDialog = ({ onSubmit: handleSubmit }: IShoppingListDialogProps) => {
  const { t } = useTranslation()
  const form = useForm({
    defaultValues: {
      name: '',
    },
    validatorAdapter: zodValidator(),
    validators: {
      onChange: createShoppingListValidationSchema,
    },
    onSubmit: async ({ value }) => {
      await handleSubmit(value.name)
      form.reset()
    },
  })

  return (
    <DialogContent className={'flex flex-col gap-y-8'}>
      <DialogHeader>
        <DialogTitle>{t('shoppingLists.dialog.title')}</DialogTitle>
        <DialogDescription>{t('shoppingLists.dialog.description')}</DialogDescription>
      </DialogHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
        className={'flex flex-col gap-y-4'}
      >
        <form.Field
          name={'name'}
          children={(field) => {
            return (
              <div className='flex flex-col gap-y-1'>
                <Label htmlFor={field.name}>{t('shoppingLists.dialog.name')}:</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <span
                  className={`text-sm ${field.state.meta.errors ? 'text-destructive' : 'invisible'}`}
                >
                  {field.state.meta.errors ? field.state.meta.errors[0] : ' '}
                </span>
              </div>
            )
          }}
        />

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <DialogFooter>
              <Dialog.Close asChild>
                <Button
                  type='submit'
                  disabled={!canSubmit}
                >
                  {isSubmitting ? '...' : t('shoppingLists.dialog.create')}
                </Button>
              </Dialog.Close>
            </DialogFooter>
          )}
        />
      </form>
    </DialogContent>
  )
}
