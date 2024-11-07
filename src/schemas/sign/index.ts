import { z } from 'zod'
import { emailSchema } from './email'
import { passwordSchema } from './password'
import MESSAGES from '@/constants/messages'

export const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export const signUpSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: MESSAGES.PASSWORD_NOT_MATCH,
    path: ['confirmPassword'],
  })
