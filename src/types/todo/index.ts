export type Todo = {
  title: string
  content: string
  id: string
  createdAt: string
  updatedAt: string
}

export type Todos = Todo[]
export type TodoById = Todo
export type TodoCreate = { title: string; content: string }
