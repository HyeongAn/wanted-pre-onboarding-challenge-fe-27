import { queryOptions } from '@tanstack/react-query'
import { todoService } from './todoService'

export const todoQueryKeys = {
  todos: ['todos'],
  todo: (id: string) => [todoQueryKeys.todos, id],
} as const

export const todoQueryOptions = {
  todos: () =>
    queryOptions({
      queryKey: todoQueryKeys.todos,
      queryFn: () => todoService.getTodos(),
    }),
  todo: (id: string) =>
    queryOptions({
      queryKey: todoQueryKeys.todo(id),
      queryFn: () => todoService.getTodoById(id),
    }),
}
