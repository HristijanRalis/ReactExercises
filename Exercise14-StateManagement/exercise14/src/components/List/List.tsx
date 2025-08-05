import { useTodos } from "../../Store/todos";

export const List = () => {
  const { todos, setEditTodo, deleteTodo } = useTodos();
  return (
    <ul>
      {todos.map(({ title, id }) => {
        return (
          <li key={id}>
            <span onClick={() => setEditTodo({ title, id })}>{title}</span>
            <button
              onClick={() => {
                deleteTodo(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
