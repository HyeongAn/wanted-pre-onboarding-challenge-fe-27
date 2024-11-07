import MESSAGES from '@/constants/messages'
import { z } from 'zod'

export const emailSchema = z
  .string()
  .trim()
  .min(1, {
    message: MESSAGES.reqFieldMessage('이메일'),
  })
  .email({
    message: MESSAGES.EMAIL_FORMAT_ERROR,
  })
