import React, { useState } from "react";

function Todoform({ handleAddTodo }) {
	const [todoTitleInput, setTodoTitleInput] = useState("");
	const [todoDescriptionInput, setTodoDescriptionInput] = useState("");

	const onAddTask = (e) => {
		e.preventDefault();
		if (todoTitleInput.length && todoDescriptionInput.length) {
			handleAddTodo({ todoTitleInput, todoDescriptionInput });
		} else {
			console.log("please enter valid ");
		}
		setTodoTitleInput("");
		setTodoDescriptionInput("");
	};

	return (
		<form onSubmit={onAddTask}>
			<h2>Add Your Todo</h2>
			<input
				type="text"
				onChange={(e) => setTodoTitleInput(e.target.value)}
				value={todoTitleInput}
				placeholder="Todo Title"
			/>
			<input
				type="text"
				onChange={(e) => setTodoDescriptionInput(e.target.value)}
				value={todoDescriptionInput}
				placeholder="Todo Description"
			/>
			<input type="submit" value="Add" className="btn" />
		</form>
	);
}

export default Todoform;
