// import "./App.css";
// import Increment from "./Component/Increment";
// import ParentComponent from "./Component/ParentComponent";
// import { LogInValidation } from "./Component/LogInComponent";
// import { ValidationSchemaExample } from "./Component/SignUpComponenet";
// import TodoList from "./Component/Todo";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route element={<ValidationSchemaExample />} path="/signup"></Route>
//           <Route element={<LogInValidation />} path="/login"></Route>
//           <Route element={<TodoList />} path="/todo"></Route>
//           <Route element={<Increment />} path="/increment"></Route>
//           <Route element={<ParentComponent />} path="/parent"></Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router } from "react-router-dom";

import AuthRoutes from "./routes/Auth";
import ProtectedRoutes from "./routes/ProtectedRoutes";

import "./App.css";

function App() {
  const user = "a";
  return (
    <div className="App">
      <Router>{user ? <ProtectedRoutes /> : <AuthRoutes />}</Router>
    </div>
  );
}

export default App;
