import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import { actionCreators } from "./redux/index";

function App() {
	const [todo, setTodo] = useState("");

	const { todos } = useSelector((state) => state.Todos);
	const dispatch = useDispatch();

	const { addTodo, removeTodo } = bindActionCreators(actionCreators, dispatch);

	const handleAddTodo = (e) => {
		e.preventDefault();
		if (todo.trim() !== "") {
			const newTodo = {
				id: new Date().getTime().toString(),
				todo: todo,
			};
			addTodo(newTodo);
		} else {
			alert("please enter todo");
		}
		setTodo("");
	};

	const handleRemoveTodo = (id) => {
		removeTodo(id);
	};

	return (
		<div className="container">
			<h1>Welcome to Your ToDo</h1>
			<form onSubmit={handleAddTodo}>
				<input
					type="text"
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
				/>
				<input type="submit" className="btn" value="Add" />
			</form>

			<ul>
				{todos &&
					todos.map((todo) => (
						<li key={todo.id}>
							<p>{todo.todo}</p>
							<button
								onClick={() => handleRemoveTodo(todo.id)}
								className="btn delete"
							>
								Remove
							</button>
						</li>
					))}
			</ul>
		</div>
	);
}

export default App;
