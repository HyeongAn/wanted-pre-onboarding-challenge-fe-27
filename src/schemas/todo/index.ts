import { TODO_CONTENT_MAX_LENGTH, TODO_TITLE_MAX_LENGTH } from '@/constants/api/todo'
import MESSAGES from '@/constants/messages'
import { z } from 'zod'

export const todoSchema = z.object({
  title: z
    .string()
    .min(1, MESSAGES.reqFieldMessage('제목'))
    .max(TODO_TITLE_MAX_LENGTH, MESSAGES.reqLengthMessage('제목', TODO_TITLE_MAX_LENGTH)),
  content: z
    .string()
    .min(1, MESSAGES.reqFieldMessage('내용'))
    .max(TODO_CONTENT_MAX_LENGTH, MESSAGES.reqLengthMessage('내용', TODO_CONTENT_MAX_LENGTH)),
})
