import React, { useCallback } from 'react'
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, UseFormReturn } from 'react-hook-form'

export interface FormProps<T extends FieldValues> {
  className?: string
  form: UseFormReturn<T>
  children: React.ReactNode
  onSubmit?: SubmitHandler<T>
  onError?: SubmitErrorHandler<T>
}

// 여러곳에서 사용할 수 있는 form 컴포넌트로 분리.

const Form = <T extends FieldValues>({ form, children, onSubmit, onError, ...props }: FormProps<T>) => {
  const handleFormSubmit: SubmitHandler<T> = useCallback(
    (data) => {
      onSubmit?.(data)
    },
    [onSubmit],
  )

  const handleFormError: SubmitErrorHandler<T> = useCallback(
    (errors) => {
      onError?.(errors)
    },
    [onError],
  )

  return (
    <FormProvider {...form}>
      <form {...props} onSubmit={form.handleSubmit(handleFormSubmit, handleFormError)}>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
