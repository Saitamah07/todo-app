import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
	//State variable 'value' to manage the input field value
	const [value, setValue] = useState('');
	//Function to handle the Submit for the form
	const handleSubmit = (e) => {
		//Prevent The Default action
		e.preventDefault();
		//Call the 'addTodo' function with the current input value to add a new task
		addTodo(value);
		//Clear the input field after the Submit
		setValue('');
	};

	return (
		<form className='todoForm' onSubmit={handleSubmit}>
			<input
				value={value}
				type='text'
				className='todo-input'
				placeholder='¿Cual es la tarea para hoy?'
				onChange={(e) => setValue(e.target.value)}
			/>
			<button type='submit' className='todo-btn'>
				Añadir Tarea
			</button>
		</form>
	);
};

export default TodoForm;
