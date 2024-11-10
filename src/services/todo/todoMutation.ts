import { useMutation, useQueryClient } from '@tanstack/react-query'
import { todoQueryKeys } from './todoQueries'
import { todoService } from './todoService'

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: todoService.createTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: todoQueryKeys.todos,
      }),
  })
}

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: todoService.updateTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: todoQueryKeys.todos,
      }),
  })
}

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: todoService.deleteTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: todoQueryKeys.todos,
      }),
  })
}
