import { TODO_API } from '@/constants/api/todo'
import api from '../service'
import { Todo, TodoById, TodoCreate, Todos } from '@/types/todo'
import { AxiosResponse } from 'axios'

class TodoService {
  /*
   * private api = Service.getInstance()를 사용하면 안되고, Service.getInstance()의 결과를 직접 받아와 사용해야한다.
   * TodoService 클래스의 인스턴스가 생성될 때마다 Service.getInstance()를 통해 this.api가 초기화된다.
   * Service.getInstance()가 undefined를 반환하거나 this.api가 올바르게 초기회되지 않을 수 있다.
   *
   * 또한 Service에서는 싱글톤 패턴을 따르고 있기 때문에 api가 Service.getInstance()의 결과로 한 번만 초기화되고
   * 이후에는 계속해서 동일한 인스턴스를 참조하게 되어야 한다.
   * 즉, api를 직접 임포트하여 사용하는 방식은 AxiosInstance가 한번만 생성되고, 모든곳에서 동일한 인스턴스를 참조하게 된다.
   */

  async getTodos(): Promise<AxiosResponse<Todos>> {
    const response = await api.get(TODO_API.GET_TODOS)
    return response.data
  }

  async getTodoById(id: string): Promise<AxiosResponse<TodoById>> {
    const response = await api.get(TODO_API.TODO_BY_ID(id))
    return response.data
  }

  async createTodo(params: TodoCreate): Promise<AxiosResponse<Todo>> {
    const response = await api.post(TODO_API.GET_TODOS, params)
    return response.data
  }

  async updateTodo({ id, params }: { id: string; params: TodoCreate }): Promise<AxiosResponse<Todo>> {
    const response = await api.put(TODO_API.TODO_BY_ID(id), params)
    return response.data
  }

  async deleteTodo(id: string): Promise<AxiosResponse<null>> {
    const response = await api.delete(TODO_API.TODO_BY_ID(id))
    return response.data
  }
}

export const todoService = new TodoService()
