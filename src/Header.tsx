import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { TodoModal } from "./TodoModal";

export const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Today's tasks</h2>
          <p className="text-sm text-gray-400">Wednesday, 11 May</p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-x-1 rounded-lg bg-blue-100 px-3 py-2 text-blue-600 hover:bg-blue-200"
          type="button"
        >
          <PlusIcon className="h-4 w-4" />
          <span className="inline-block text-sm">New task</span>
        </button>
      </div>

      {isModalOpen && <TodoModal onClose={() => setModalOpen(false)} />}
    </>
  );
};
