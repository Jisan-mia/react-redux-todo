import React from "react";

function Todo({ todo, deleteTodo, editTodo }) {
	const { id, todoTitleInput, todoDescriptionInput } = todo;

	return (
		<div className="todo-div">
			<div className="todo-header">
				<h3 className="todo-title">{todoTitleInput}</h3>

				{id === 1 ? (
					"Demo"
				) : (
					<h3 className="delete-todo">
						<b onClick={() => deleteTodo(id)}>x</b>
					</h3>
				)}
			</div>
			<p className="todo-description">{todoDescriptionInput}</p>
		</div>
	);
}

export default Todo;
