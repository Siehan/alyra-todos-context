export const TodosReducer = (state, action) => {
  // ADD, DELETE, TOGGLE
  switch (action.type) {
    case "ADD":
      //setTodos([...todos, newTodo]);
      return [...state, action.payload];
    case "DELETE":
      //setTodos(todos.filter((el) => el.id !== task.id));
      return state.filter((el) => el.id !== action.payload.id);
    case "TOGGLE":
      return state.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, isCompleted: !el.isCompleted };
        }
        return el;
      });
    default:
      throw new Error(`Unsuported action type ${action.type} in TodosReducer`);
  }
};
