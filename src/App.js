import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, useNavigate} from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { useLocalStorage } from "./hooks/useLocalStorage";

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import CreateRecipe from './components/CreateRecipe';
import RecipesList from './components/RecipesList';
import SingleRecipe from "./components/SingleRecipe";
import ProfileDetails from "./components/ProfileDetails";
import Logout from "./components/Logout";

function App() {

    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
        <div id="box">
            <Header />

            <main className="main" role="main">
                {/*wrap*/}
                <div className="wrap clearfix">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register /> } />
                    <Route path="/logout" element={<Logout /> } />
                    <Route path="/create" element={<CreateRecipe />} />
                    <Route path="/list" element={<RecipesList />} />
                    <Route path="/list/:recipeId" element={<SingleRecipe />} />
                    <Route path="/profileDetails" element={<ProfileDetails />} />
                </Routes>
                </div>
            </main>
        </div>
        </AuthContext.Provider>
    );
}

export default App