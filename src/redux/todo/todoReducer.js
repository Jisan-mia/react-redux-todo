import { ADD_TODO, DELETE_TODO } from "./todoActions";

const initialState = {
	todos: [
		{
			id: 1,
			title: "Redux Todo",
			description:
				"aliquip ex ea commodo consequat.exercitation ullamco laboris nisi ut ",
		},
	],
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			const newTodo = {
				id: action.id,
				title: action.title,
				description: action.description,
			};
			return {
				...state,
				todos: [...state.todos, newTodo],
			};

		case DELETE_TODO:
			console.log(action.payload);
			return state;
		default:
			return state;
	}
};
export default todoReducer;
