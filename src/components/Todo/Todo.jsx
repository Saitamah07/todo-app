import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
	return (
		<div className='Todo'>
			<p
				onClick={() => toggleComplete(task.id)}
				className={`${task.completed ? 'completed' : ''}`}
			>
				{task.task}
			</p>
			<div>
				<FontAwesomeIcon
					className='edit-icon'
					icon={faPenToSquare}
					onClick={() => editTodo(task.id)}
				/>
				<FontAwesomeIcon
					className='edit-icon'
					icon={faTrash}
					onClick={() => deleteTodo(task.id)}
				/>
			</div>
		</div>
	);
};

export default Todo;
