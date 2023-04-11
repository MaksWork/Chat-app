import "./App.css";

import AppRouter from "./components/AppRouter.js";
import { ChatContext } from "./Contexts";
import { getAuth } from "firebase/auth";
import { app, db } from "./API/Firebase";

const auth = getAuth();

function App() {
    return (
        <div className='App'>
        {/*TODO: vertical nav bar only for private routes*/}
            
            <ChatContext.Provider
                value={{
                    auth,
                    db,
                }}>
                <AppRouter />
            </ChatContext.Provider>
        </div>
    );
}

export default App;
