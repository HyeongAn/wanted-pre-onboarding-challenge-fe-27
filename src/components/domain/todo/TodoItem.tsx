import { Checkbox } from '@/components/ui/Checkbox'
import { IconButton } from '@/components/ui/IconButton'
import { Typography } from '@/components/ui/Typography'
import ROUTERS_CONFIG from '@/constants/router'
import STORAGE_KEYS from '@/constants/storage'
import { useDeleteTodoMutation } from '@/services/todo/todoMutation'
import { Todo as TodoType } from '@/types/todo'
import { formatKoreanDate } from '@/utils/format-korean-date'
import { cn } from '@/utils/shadcn'
import { CheckedState } from '@radix-ui/react-checkbox'
import { TrashIcon } from '@radix-ui/react-icons'
import { Link, useMatch } from 'react-router-dom'
import useStorageState from 'use-storage-state'

interface TodoItemProps extends TodoType {}

const TodoItem = ({ id, title, createdAt, updatedAt }: TodoItemProps) => {
  const isCurrentTodo = useMatch(ROUTERS_CONFIG.TODO_DETAIL(id))
  const { mutate: deleteMutation } = useDeleteTodoMutation()
  const [isChecked, setIsChecked] = useStorageState<CheckedState>(STORAGE_KEYS.TODO_CHECKED(id), {
    defaultValue: false,
    storage: localStorage,
  })

  const handleDelete = () => deleteMutation(id)

  return (
    <article
      className={cn(
        'flex items-center gap-4 rounded-sm border-2 border-transparent bg-white px-4 py-2',
        isCurrentTodo && 'border-primary',
      )}
    >
      <Checkbox
        checked={isChecked}
        onCheckedChange={(isChecked) => setIsChecked(isChecked)}
        onChange={(e) => {
          console.log(e)
        }}
        className="scale-150"
      />
      <Link to={ROUTERS_CONFIG.TODO_DETAIL(id)} className="flex grow flex-col">
        <Typography variant="largeText" className={cn(isChecked && 'text-gray-700 line-through')}>
          {title}
        </Typography>
        <Typography variant="mutedText">작성: {formatKoreanDate(createdAt)}</Typography>
        <Typography variant="mutedText">수정: {formatKoreanDate(updatedAt)}</Typography>
      </Link>
      <section className="flex items-center gap-4">
        <IconButton onClick={handleDelete}>
          <TrashIcon className="h-6 w-6" />
        </IconButton>
      </section>
    </article>
  )
}

export default TodoItem
