import { useState, useEffect } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../Todo/Todo';
import { EditTodoForm } from '../EditTodoForm/EditTodoForm';
uuidv4(); //Generating an unique id (Not used)

export const TodoWrapper = () => {
	//State variable 'todos', to manage the list of tasks
	const [todos, setTodos] = useState([]);

	// useEffect Hook to load saved todos from local storage when the component mounts
	useEffect(() => {
		const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
		setTodos(savedTodos);
	}, []);

	//Function to add a new todo to the list
	const addTodo = (todo) => {
		if (todo.trim() !== '') {
			const newTodos = [
				...todos,
				{
					id: uuidv4(), //Generate a unique ID for the new todo
					task: todo,
					completed: false,
					isEditing: false,
				},
			];
			setTodos(newTodos);
			localStorage.setItem('todos', JSON.stringify(newTodos)); //Saving todos to local storage
		}
	};

	//function to toggle the completion status of a todo
	const toggleComplete = (id) => {
		const newTodos = todos.map((todo) =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		);
		setTodos(newTodos);
		localStorage.setItem('todos', JSON.stringify(newTodos));
	};

	//Function to toggle the editing state of a todo
	const deleteTodo = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
		localStorage.setItem('todos', JSON.stringify(newTodos));
	};

	//Function to edit the task fo a todo
	const editTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
			)
		);
	};

	const editTask = (task, id) => {
		const newTodos = todos.map((todo) =>
			todo.id === id
				? { ...todo, task, isEditing: !todo.isEditing }
				: todo
		);
		setTodos(newTodos);
		localStorage.setItem('todos', JSON.stringify(newTodos));
	};
	return (
		<div className='TodoWrapper'>
			<h1>¡Cosas Por Terminar!</h1>
			<TodoForm addTodo={addTodo} />
			{todos.map((todo) =>
				todo.isEditing ? (
					<EditTodoForm
						key={todo.id}
						editTodo={editTask}
						task={todo}
					/>
				) : (
					<Todo
						task={todo}
						key={todo.id}
						toggleComplete={toggleComplete}
						deleteTodo={deleteTodo}
						editTodo={editTodo}
					/>
				)
			)}
		</div>
	);
};
