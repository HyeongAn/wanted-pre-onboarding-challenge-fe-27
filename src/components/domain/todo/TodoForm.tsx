import React from 'react'
import Form, { FormProps } from '@/components/feature/Form'
import { Label } from '@/components/ui/Label'
import { Typography } from '@/components/ui/Typography'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { z } from 'zod'
import { todoSchema } from '@/schemas/todo'

interface TodoFormProps extends FormProps<z.infer<typeof todoSchema>> {
  disabled?: boolean
  children: React.ReactNode
}

const TodoForm = ({ disabled, children, form, onSubmit, onError, ...props }: TodoFormProps) => {
  const { register } = form

  return (
    <Form form={form} {...props} onSubmit={onSubmit} onError={onError}>
      <div className="flex gap-4">
        <Label htmlFor="title" className="flex w-12 items-center justify-center">
          <Typography variant="largeText">제목</Typography>
        </Label>
        <Input disabled={disabled} id="title" placeholder="할 일의 제목을 입력해주세요" {...register('title')} />
      </div>
      <Textarea disabled={disabled} placeholder="내용을 입력해주세요." rows={15} {...register('content')} />
      {children}
    </Form>
  )
}

export default TodoForm
