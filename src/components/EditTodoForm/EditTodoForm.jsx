import { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
	//State variable 'value' to manage the input field value, initialized with the current task's text
	const [value, setValue] = useState(task.task);

	//Function to handle form submission for editing a todo
	const handleSubmit = (e) => {
		//Prevent Defaul Action
		e.preventDefault();

		//To Edit The todo with the new value and task ID
		editTodo(value, task.id);

		//clear the input
		setValue('');
	};

	return (
		<form className='todoForm' onSubmit={handleSubmit}>
			<input
				value={value}
				type='text'
				className='todo-input'
				placeholder='Actualizar Tarea?'
				onChange={(e) => setValue(e.target.value)}
			/>
			<button type='submit' className='todo-btn'>
				Editar Tarea
			</button>
		</form>
	);
};
