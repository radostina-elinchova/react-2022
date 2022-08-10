import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import {RecipeProvider} from "./contexts/RecipeContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import PrivateRoute from "./components/common/PrivateRoute";
import * as RecipeService from "./services/recipeService";

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


    return (
        <AuthProvider>
            <div id="app">
                <Header />
                <RecipeProvider>
                    <main className="main" role="main">
                    {/*wrap*/}
                    <div className="wrap clearfix">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register /> } />
                        <Route path="/logout" element={<Logout /> } />
                        <Route path="/create" element={(
                            <PrivateRoute>
                                <CreateRecipe />
                            </PrivateRoute>
                        )} />

                        <Route path="/recipes" element={<RecipesList />} />
                        <Route path="/recipes/:recipeId" element={<SingleRecipe />} />
                        <Route path="/profileDetails" element={<ProfileDetails />} />
                    </Routes>
                    </div>
                </main>
                </RecipeProvider>
            </div>
        </AuthProvider>
    );
}

export default App