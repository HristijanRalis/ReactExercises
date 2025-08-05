import { useEffect, useState } from "react";
import { useTodos } from "../../Store/todos";

export const Form = () => {
  const { addTodo, editTodo, updateTodo, setEditTodo } = useTodos();
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editTodo === null) {
      addTodo({ title: inputValue, id: new Date().toString() });
    } else {
      updateTodo({ title: inputValue, id: editTodo?.id });
      setEditTodo(null);
    }
    setInputValue("");
  };

  useEffect(() => {
    setInputValue(editTodo?.title || "");
  }, [editTodo]);
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        type="text"
        id="todoInput"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};
