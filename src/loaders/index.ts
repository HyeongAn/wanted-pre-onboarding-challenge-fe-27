import { todoQueryOptions } from '@/services/todo/todoQueries'
import { QueryClient } from '@tanstack/react-query'

export const loader = (queryClient: QueryClient) => async () => {
  await queryClient.ensureQueryData(todoQueryOptions.todos())
  return null
}
