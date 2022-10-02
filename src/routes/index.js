import Messaging from "../pages/Messaging/Messaging";
import Login from "../pages/Login/Login";
import Friends from "../pages/Friends/Friends";

export const publicRoutes = [
	{path: '/login', element: Login}
]

export const privateRoutes = [
	{path: '/messaging', element: Messaging},
	{path: '/friends', element: Friends}
]

