import { create } from "zustand";

export interface TodoI {
  id: string;
  title: string;
}

interface TodoState {
  todos: TodoI[];
  editTodo: TodoI | null;
  setEditTodo: (todo: TodoI | null) => void;
  addTodo: (newTodo: TodoI) => void;
  updateTodo: (existingTodo: TodoI) => void;
  deleteTodo: (id: string) => void;
}

export const useTodos = create<TodoState>((set, get) => ({
  todos: [],
  editTodo: null,
  setEditTodo: (todo) =>
    set({
      editTodo: todo,
    }),
  addTodo: (newTodo) =>
    set({
      todos: [...get().todos, newTodo],
    }),
  updateTodo: ({ title, id }) =>
    set({
      todos: get().todos.map((todo) =>
        todo.id === id ? { ...todo, title } : todo
      ),
    }),
  deleteTodo: (id) =>
    set({
      todos: get().todos.filter((todo) => todo.id !== id),
    }),
}));
