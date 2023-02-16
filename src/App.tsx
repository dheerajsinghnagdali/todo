import { PlusIcon } from "@heroicons/react/24/solid";

const App = () => {
  return (
    <div className="mx-auto max-w-3xl p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Today's tasks</h2>
          <p className="text-sm text-gray-400">Wednesday, 11 May</p>
        </div>

        <button
          className="flex items-center gap-x-1 rounded-lg bg-blue-100 px-3 py-2 text-blue-600 hover:bg-blue-200"
          type="button"
        >
          <PlusIcon className="h-4 w-4" />
          <span className="inline-block text-sm">New task</span>
        </button>
      </div>

      <div className="pt-8 sm:pt-10">
        <div className="divide-y rounded-lg p-4 shadow-xl">
          <div className="flex items-center justify-between pb-2">
            <div>
              <h3 className="text-base font-medium line-through">
                Client Review & Feedback
              </h3>
              <p className="text-sm text-gray-500">Crypto Wallet Redesign</p>
            </div>

            <input className="rounded-full" type="checkbox" />
          </div>

          <div className="flex gap-x-2 pt-2 text-xs">
            <span className="inline-block font-medium text-gray-500">
              Today
            </span>
            <span className="inline-block text-gray-400">
              09:15 PM - 10:00 PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
