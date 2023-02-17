import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useTodosContext } from "./TodosProvider";
import { createPortal } from "react-dom";
import { nanoid } from "nanoid";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface TodoModalProps {
  onClose: () => void;
}

interface TodoFormState {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

export const TodoModal: FC<TodoModalProps> = ({ onClose }) => {
  const [formState, setFormState] = useState<TodoFormState>({
    description: "",
    endDate: "",
    endTime: "",
    startDate: "",
    startTime: "",
    title: "",
  });
  const { add } = useTodosContext();

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { startTime, endTime, description, title } = formState;

    add({
      title,
      description,
      startTime,
      endTime,
      id: nanoid(),
      by: "today",
    });
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center overflow-y-auto bg-black/25 filter backdrop-blur-sm">
      <div className="relative w-full max-w-sm rounded-xl bg-white p-8 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:text-gray-600"
          type="button"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>

        <h2 className="text-center text-xl font-medium">Add todo</h2>

        <form onSubmit={onSubmit} className="mt-3">
          <div>
            <label className="text-sm" htmlFor="title">
              Title
            </label>
            <input
              onChange={onChange}
              className="mt-1.5 w-full rounded-lg py-1.5 px-2.5 text-sm"
              placeholder="Title"
              type="text"
              name="title"
              id="title"
            />
          </div>

          <div className="mt-1.5 grid grid-cols-2 gap-x-4">
            <div>
              <label className="text-sm" htmlFor="start-date">
                Start date
              </label>
              <input
                onChange={onChange}
                className="mt-1.5 w-full rounded-lg py-1.5 px-2.5 text-sm"
                type="date"
                name="startDate"
                id="start-date"
              />
            </div>
            <div>
              <label className="text-sm" htmlFor="end-date">
                End date
              </label>
              <input
                onChange={onChange}
                className="mt-1.5 w-full rounded-lg py-1.5 px-2.5 text-sm"
                type="date"
                id="end-date"
                name="endDate"
              />
            </div>
          </div>

          <div className="mt-1.5">
            <label className="text-sm" htmlFor="description">
              Description
            </label>
            <textarea
              onChange={onChange}
              className="mt-1.5 w-full resize-none rounded-lg text-sm"
              placeholder="Description"
              name="description"
              id="description"
              rows={3}
            ></textarea>
          </div>

          <div className="mt-1.5 grid grid-cols-3 gap-x-4">
            <div>
              <label className="text-sm" htmlFor="start-time">
                Start time
              </label>
              <input
                onChange={onChange}
                className="mt-1.5 w-full rounded-lg py-1.5 px-2.5 text-sm"
                type="time"
                name="startTime"
                id="start-time"
              />
            </div>
            <div>
              <label className="text-sm" htmlFor="end-time">
                End time
              </label>
              <input
                onChange={onChange}
                className="mt-1.5 w-full rounded-lg py-1.5 px-2.5 text-sm"
                type="time"
                id="end-time"
                name="endTime"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-y-2">
            <button
              type="submit"
              className="rounded-lg bg-blue-200 px-2.5 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-300"
            >
              Add
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border px-2.5 py-1.5 text-sm font-medium hover:bg-gray-100"
            >
              Maybe later
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};
