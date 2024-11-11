import TodoForm from '@/components/domain/todo/TodoForm'
import { Button } from '@/components/ui/Button'
import ROUTERS_CONFIG from '@/constants/router'
import TodoLayout from '@/layout/TodoLayout'
import { todoSchema } from '@/schemas/todo'
import { useDeleteTodoMutation, useUpdateTodoMutation } from '@/services/todo/todoMutation'
import { todoQueryOptions } from '@/services/todo/todoQueries'
import { useSuspenseQueries } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { z } from 'zod'

const TodoDetail = () => {
  const navigate = useNavigate()
  const { todoId } = useParams() as { todoId: string }
  const [isEditMode, setIsEditMode] = useState(false)

  const { mutate: updateMutation } = useUpdateTodoMutation()
  const { mutate: deleteMutation } = useDeleteTodoMutation()

  const [{ data: todos }, { data: todoDetail }] = useSuspenseQueries({
    queries: [todoQueryOptions.todos(), todoQueryOptions.todo(todoId)],
  })

  const todoForm = useForm<z.infer<typeof todoSchema>>({
    defaultValues: todoDetail.data,
  })

  const handleUpdate = (data: z.infer<typeof todoSchema>) => {
    updateMutation({ id: todoId, params: data })
  }

  const handleDelete = () => {
    deleteMutation(todoId, {
      onSuccess: () => {
        navigate(ROUTERS_CONFIG.TODO)
      },
    })
  }

  useEffect(() => {
    todoForm.reset(todoDetail.data)
  }, [todoId])

  return (
    <TodoLayout todos={todos.data}>
      <TodoForm
        disabled={!isEditMode}
        className="flex grow flex-col gap-4 p-4"
        form={todoForm}
        onSubmit={handleUpdate}
        onError={(error) => console.log(error)}
      >
        <section className="flex justify-end gap-2">
          <Button type="button" variant="destructive" onClick={handleDelete}>
            삭제
          </Button>
          {isEditMode && (
            <Button
              variant="outline"
              type="button"
              onClick={() => {
                setIsEditMode((prev) => !prev)
                todoForm.reset(todoDetail.data)
              }}
            >
              취소
            </Button>
          )}
          <Button type={isEditMode ? 'button' : 'submit'} onClick={() => setIsEditMode((prev) => !prev)}>
            {isEditMode ? '완료' : '수정'}
          </Button>
        </section>
      </TodoForm>
    </TodoLayout>
  )
}

export default TodoDetail
