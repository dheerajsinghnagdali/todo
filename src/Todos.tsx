import { FC } from "react";
import { useTodosContext } from "./TodosProvider";

interface TodoProps {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  by: string;
}

const Todo: FC<TodoProps> = (props) => {
  const { id, title, description, endTime, startTime } = props;
  const { onCompleted } = useTodosContext();

  return (
    <div className="divide-y rounded-lg p-4 shadow-xl">
      <div className="flex items-center justify-between gap-x-4 pb-2">
        <div>
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>

        <input
          onClick={() => onCompleted(id)}
          className="rounded-full"
          type="checkbox"
        />
      </div>

      <div className="flex gap-x-2 pt-2 text-xs">
        <span className="inline-block font-medium text-gray-500">Today</span>
        <span className="inline-block text-gray-400">
          {startTime} - {endTime}
        </span>
      </div>
    </div>
  );
};

export const Todos = () => {
  const { todos } = useTodosContext();

  return (
    <div className="pt-8 sm:pt-10">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};
