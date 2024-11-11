import { todoQueryOptions } from '@/services/todo/todoQueries'
import invariants from '@/utils/invariants'
import { QueryClient } from '@tanstack/react-query'
import { LoaderFunctionArgs } from 'react-router-dom'

export const todoLoader = (queryClient: QueryClient) => async () => {
  await queryClient.ensureQueryData(todoQueryOptions.todos())
  return null
}

export const todoDetailLoader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    invariants(params.todoId, 'todoId is required')
    await queryClient.ensureQueryData(todoQueryOptions.todo(params.todoId))
    return null
  }
