import "./App.css";
import Increment from "./Component/Increment";
import TodoList from "./Component/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Increment />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
