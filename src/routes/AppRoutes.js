import { LogInValidation } from "../Component/LogInComponent";
import { ValidationSchemaExample } from "../Component/SignUpComponenet";
import { ROUTES } from "../utils/routes";
import TodoList from "../Component/Todo";
import Increment from "../Component/Increment";
import ParentComponent from "../Component/ParentComponent";

export const PROTECTED_ROUTES = [
  {
    id: 1,
    path: ROUTES.PROTECTED_ROUTES_NAMES.signup,
    element: <ValidationSchemaExample />,
  },
  {
    id: 2,
    path: ROUTES.PROTECTED_ROUTES_NAMES.login,
    element: <LogInValidation />,
  },
  {
    id: 3,
    path: ROUTES.PROTECTED_ROUTES_NAMES.todo,
    element: <TodoList />,
  },
  {
    id: 4,
    path: ROUTES.PROTECTED_ROUTES_NAMES.increment,
    element: <Increment />,
  },
  {
    id: 5,
    path: ROUTES.PROTECTED_ROUTES_NAMES.parent,
    element: <ParentComponent />,
  },
];
