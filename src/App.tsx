import { TodosProvider } from "./TodosProvider";
import { Todos } from "./Todos";
import { Header } from "./Header";

const App = () => {
  return (
    <TodosProvider>
      <div className="mx-auto max-w-3xl p-4 sm:p-6">
        <Header />
        <Todos />
      </div>
    </TodosProvider>
  );
};

export default App;
