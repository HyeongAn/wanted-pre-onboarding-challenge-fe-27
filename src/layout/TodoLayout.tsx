import React from 'react'
import useAuth from '@/hooks/useAuth'
import { Todos } from '@/types/todo'
import { Link, useNavigate } from 'react-router-dom'
import ROUTERS_CONFIG from '@/constants/router'
import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import TodoItem from '@/components/domain/todo/TodoItem'
import { PlusIcon } from '@radix-ui/react-icons'
import { IconButton } from '@/components/ui/IconButton'

interface TodoLayoutProps {
  children: React.ReactNode
  todos: Todos
}

const TodoLayout = ({ children, todos }: TodoLayoutProps) => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate(ROUTERS_CONFIG.LOGIN)
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <section className="w-full max-w-screen-xl p-4">
        <nav className="flex justify-between">
          <Typography variant="h1">Todo List</Typography>
          <Button onClick={handleLogout}>로그아웃</Button>
        </nav>

        <div className="mt-8 flex">
          <aside className="flex h-[80svh] w-full max-w-md flex-col gap-4 overflow-y-auto rounded-md bg-gray-100 p-4">
            <IconButton className="w-fit self-end border-2 border-gray-300 bg-white">
              <Link to={ROUTERS_CONFIG.TODO}>
                <PlusIcon className="h-6 w-6" />
              </Link>
            </IconButton>
            {todos.map((todo) => (
              <TodoItem key={`todo-${todo.id}`} {...todo} />
            ))}
          </aside>
          {children}
        </div>
      </section>
    </main>
  )
}

export default TodoLayout
