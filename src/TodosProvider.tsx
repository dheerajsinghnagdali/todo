import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  FC,
  ReactNode,
} from "react";

export interface Todo {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  by: string;
}

interface State {
  todos: Todo[];
  add: (todo: Todo) => void;
  onCompleted: (key: string) => void;
}

const TodosContext = createContext<State | undefined>(undefined);

export const useTodosContext = () => {
  const value = useContext(TodosContext);

  if (value === undefined) {
    throw new Error(
      "Wrap the component inside <TodosContext.Provider></TodosContext.Provider>"
    );
  }

  return value;
};

export const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const add = useCallback(
    (todo: Todo) => setTodos((prevTodos) => [...prevTodos, todo]),
    []
  );

  const onCompleted = useCallback(
    (id: string) =>
      setTodos((prevTodos) => {
        const filtered = prevTodos.filter((todo) => todo.id !== id);
        return [...filtered];
      }),
    []
  );

  const value = useMemo(
    () => ({ todos, add, onCompleted }),
    [todos, add, onCompleted]
  );

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
