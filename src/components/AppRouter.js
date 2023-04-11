import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChatContext } from "../Contexts";
import { publicRoutes, privateRoutes } from "../routes";
import VerticalNavbar from "./UI/VerticalNavbar/VerticalNavbar";
import Login from "../pages/Login/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import Messaging from "../pages/Messaging/Messaging";

const AppRouter = () => {
    const { auth } = useContext(ChatContext);
    const [user] = useAuthState(auth);

    return (
        <Router>
            <VerticalNavbar/>
            {user ? (
                <Routes>
                    {privateRoutes.map((route) => {
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<route.element />}
                            />
                        );
                    })}
                    <Route path='*' element={<Messaging />} />
                </Routes>
            ) : (
                <Routes>
                    {publicRoutes.map((route) => {
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<route.element />}
                            />
                        );
                    })}
                    <Route path='*' element={<Login />} />
                </Routes>
            )}
        </Router>
    );
};
export default AppRouter;
