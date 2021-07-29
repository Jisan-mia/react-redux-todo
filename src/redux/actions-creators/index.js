export const addTodo = (todo) => {
	return (dispatch) => {
		dispatch({
			type: "ADD_TODO",
			payload: todo,
		});
	};
};
export const removeTodo = (id) => {
	return (dispatch) => {
		dispatch({
			type: "REMOVE_TODO",
			payload: id,
		});
	};
};
