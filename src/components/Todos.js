import React from "react";
import Todo from "./Todo";

function Todos({ todos, deleteTodo }) {
	console.log(todos);
	return (
		<div className="all-todo">
			<h2>Todos</h2>
			{todos
				? todos.map((todo, index) => (
						<Todo key={index} todo={todo} deleteTodo={deleteTodo} />
				  ))
				: ""}
		</div>
	);
}

export default Todos;
