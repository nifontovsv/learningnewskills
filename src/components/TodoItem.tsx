import { Trash2 } from 'lucide-react';
import { Todo } from '../../../learntstw/src/types/todo';

interface TodoItemProps {
	todo: Todo;
	onCompletedChange: (id: number, completed: boolean) => void;
	onDelete: (id: number) => void;
}

export const TodoItem = ({
	todo,
	onCompletedChange,
	onDelete,
}: TodoItemProps) => {
	return (
		<div className='flex items-center gap-1'>
			<label className='flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow'>
				<input
					checked={todo.completed}
					onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
					type='checkbox'
					className='scale-125'
				/>
				<span
					className={
						todo.completed === true ? 'line-through text-gray-400' : ''
					}
				>
					{todo.title}
				</span>
			</label>
			<button onClick={() => onDelete(todo.id)}>
				<Trash2 size={20} className='text-gray-500' />
			</button>
		</div>
	);
};
