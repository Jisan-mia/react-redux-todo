import React, { useState } from "react";
import Todoform from "./components/Todoform";
import Todos from "./components/Todos";
function App() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			todoTitleInput: "Add a function",
			todoDescriptionInput:
				"exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
		},
	]);

	//add todo
	const handleAddTodo = (todo) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTodo = { ...todo, id };
		setTodos([...todos, newTodo]);
	};

	//delete todo
	const deleteTodo = (id) => {
		const remainingTodos = todos.filter((todo) => todo.id !== id);
		setTodos(remainingTodos);
	};

	//edit todo
	// const editTodo = (id) => {
	// 	const todoEdit = todos.find((todo) => todo.id === id);
	// 	setEditableTodo(todoEdit);
	// };

	return (
		<div className="App">
			<div className="todo-react">
				<Todoform handleAddTodo={handleAddTodo} />
				<Todos todos={todos} deleteTodo={deleteTodo} />
			</div>
			<div className="todo-redux">
				<Todoform reduxSection={true} />
				<Todos reduxSection={true} />
			</div>
		</div>
	);
}

export default App;
