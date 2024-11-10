import TodoLayout from '@/layout/TodoLayout'
import { todoSchema } from '@/schemas/todo'
import { useCreateTodoMutation } from '@/services/todo/todoMutation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useSuspenseQuery } from '@tanstack/react-query'
import { todoQueryOptions } from '@/services/todo/todoQueries'
import TodoForm from '@/components/domain/todo/TodoForm'
import { Button } from '@/components/ui/Button'

const Todo = () => {
  const todoForm = useForm<z.infer<typeof todoSchema>>()
  const { mutate: createMutation } = useCreateTodoMutation()

  const { data: todos } = useSuspenseQuery(todoQueryOptions.todos())

  const handleCreate = (data: z.infer<typeof todoSchema>) => {
    createMutation(data, {
      onError: (error) => {
        console.error(error)
      },
    })
  }

  return (
    <TodoLayout todos={todos.data}>
      <TodoForm
        className="flex grow flex-col gap-4 p-4"
        form={todoForm}
        onSubmit={handleCreate}
        onError={(error) => console.error(error)}
      >
        <section className="flex justify-end">
          <Button>추가</Button>
        </section>
      </TodoForm>
    </TodoLayout>
  )
}

export default Todo
