import App from "../App";
import HomeScreen from "./../screens/HomeScreen.jsx";
import SignUp from "./../screens/SignUp.jsx";

const routerPaths = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: "/register", element: <SignUp /> },
    ],
  },
];
export default routerPaths;

/* NOTE
export default — you can only have one per file, and you can import it with any name you want
export const (named export) — you can have many per file, but you must import them with the exact same name in curly braces {}
*/
