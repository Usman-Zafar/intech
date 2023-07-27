import "./App.css";
import Increment from "./Component/Increment";
import ParentComponent from "./Component/ParentComponent";
import { ValidationSchemaExample } from "./Component/SignUpComponenet";
import TodoList from "./Component/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Increment />
        <TodoList />
        <ParentComponent />
        <ValidationSchemaExample />
      </header>
    </div>
  );
}

export default App;
