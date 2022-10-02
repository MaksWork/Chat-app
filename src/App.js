import './App.css';

import Login from './pages/Login/Login';
import AppRouter from './components/AppRouter.js'
import {ChatContext} from './Contexts'
import { getAuth } from "firebase/auth";
import { app, db } from './API/Firebase';
import Navbar from './components/UI/navbar/Navbar';



const auth = getAuth();

function App() { //TODO add navbar only on private routes
  return (
    <div className="App">
      <ChatContext.Provider value={{
        auth,
        db
      }}>
        <AppRouter/>
      </ChatContext.Provider>
     
    </div>
  );
}

export default App; 
