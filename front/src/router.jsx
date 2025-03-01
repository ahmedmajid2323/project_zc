import {createBrowserRouter} from "react-router-dom";
import Home from "./student/Home";
import Cours from "./student/Cours";
import Credentiels from "./student/Credentiels";
import Notes from "./student/Notes";
import Progress from "./student/Progress";
import Dashboard1 from "./student/Dashboard1";
import Login from "./Login";



const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home/>,
    },
    {
      path: "/cours",
      element: <Cours/>,
    },
    {
      path: "/credentiels",
      element: <Credentiels/>,
    },
    {
      path: "/note",
      element: <Notes/>,
    },
    {
      path: "/projects",
      element: <Dashboard1 />,
    },
    {
      path: "/progress",
      element: <Progress/>,
    },
    {
      path: "/",
      element: <Login/>,
    },
  ]);

  export default router ;