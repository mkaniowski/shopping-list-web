import { useTranslation } from 'react-i18next'
import { useForm } from '@tanstack/react-form'
import { Button, Input, Label } from '@/components'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { registerValidationSchema } from '@/views/register/registerValidation'
import { useState } from 'react'

export interface IRegisterFormProps {
  handleSubmit: (values: any) => Promise<void>
}

export interface IRegisterFormValues {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
}

export const RegisterForm = ({ handleSubmit }: IRegisterFormProps) => {
  const { t } = useTranslation()
  const [isDisabled, setIsDisabled] = useState(false)

  const form = useForm<IRegisterFormValues, any>({
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    },
    validatorAdapter: zodValidator(),
    validators: {
      onBlur: registerValidationSchema,
    },
    onSubmit: async ({ value }) => {
      setIsDisabled(true)
      handleSubmit(value).finally(() => {
        setIsDisabled(false)
      })
    },
  })

  const renderField = (field: any, labelKey: string, type = 'text') => {
    return (
      <div className='flex flex-col gap-y-1'>
        <Label htmlFor={field.name}>{t(labelKey)}:</Label>
        <Input
          id={field.name}
          name={field.name}
          type={type}
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          disabled={isDisabled}
        />
        <span className={`text-sm ${field.state.meta.errors ? 'text-destructive' : 'invisible'}`}>
          {field.state.meta.errors ? field.state.meta.errors[0] : ' '}
        </span>
      </div>
    )
  }

  return (
    <div>
      <form
        className='flex flex-col gap-y-4 w-96'
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <form.Field
          name='firstName'
          children={(field) => renderField(field, 'register.form.firstName')}
        />
        <form.Field
          name='lastName'
          children={(field) => renderField(field, 'register.form.lastName')}
        />
        <form.Field
          name='username'
          children={(field) => renderField(field, 'register.form.username')}
        />
        <form.Field
          name='email'
          children={(field) => renderField(field, 'register.form.email')}
        />
        <form.Field
          name='password'
          children={(field) => renderField(field, 'register.form.password', 'password')}
        />

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button
              type='submit'
              disabled={!canSubmit}
            >
              {isSubmitting ? '...' : t('register.form.submit')}
            </Button>
          )}
        />
      </form>
    </div>
  )
}
