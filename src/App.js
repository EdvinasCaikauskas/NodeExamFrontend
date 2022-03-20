import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";
import mainContext from "./context/mainContext";
import Toolbar from "./comps/Toolbar";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import SearchPage from "./pages/SearchPage";

function App() {
    const [user, setUser] = useState(null)

    return (
        <div className="main">
            <mainContext.Provider value={{user, setUser}}>
                <BrowserRouter>
                    <Toolbar/>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/auth' element={<AuthPage/>}/>
                        <Route path='/upload' element={<UploadPage/>}/>
                        <Route path='/search' element={<SearchPage/>}/>
                    </Routes>
                </BrowserRouter>
            </mainContext.Provider>
        </div>
    );
}

export default App;
