import MESSAGES from '@/constants/messages'
import { z } from 'zod'

export const passwordSchema = z
  .string()
  .trim()
  .min(8, {
    message: MESSAGES.reqLengthMessage('비밀번호', 8),
  })
