import Messaging from "../pages/Messaging/Messaging";
import Login from "../pages/Login/Login";
import Friends from "../pages/Friends/Friends";
import Home from "../pages/Home/Home";
import Account from "../pages/Account/Account";

export const publicRoutes = [
	{path: '/login', element: Login}
]

export const privateRoutes = [
	{path: '/messaging', element: Messaging},
	{path: '/friends', element: Friends},
	{path: '/home', element: Home},
	{path: '/account', element: Account}
]

