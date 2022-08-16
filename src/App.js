import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import {RecipeProvider} from "./contexts/RecipeContext";
import PrivateRoute from "./components/common/PrivateRoute";


import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import CreateRecipe from './components/CreateRecipe';

import SingleRecipe from "./components/SingleRecipe";
import ProfileDetails from "./components/ProfileDetails";
import Logout from "./components/Logout";
import EditRecipe from "./components/EditRecipe";
import MyRecipesList from "./components/MyRecipesList";
import Footer from "./components/Footer";
import Search from "./components/Search";
const RecipesList = lazy(() => import('./components/RecipesList'));


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
                        <Route path="/search" element={
                            <RecipeProvider>
                                <Search/>
                            </RecipeProvider>
                        } />
                        <Route path="/create" element={(
                            <PrivateRoute>
                                <CreateRecipe />
                            </PrivateRoute>
                        )} />
                        <Route path="/recipes/:recipeId/edit" element={(
                            <PrivateRoute>
                                <EditRecipe />
                            </PrivateRoute>
                        )} />
                        <Route path="/recipes" element={
                           <RecipeProvider>
                               <Suspense fallback={<span>Loading....</span>}>
                                   <RecipesList />
                               </Suspense>

                            </RecipeProvider>
                        } />
                        <Route path="/myrecipes" element={(
                            <PrivateRoute>
                                <MyRecipesList />
                            </PrivateRoute>
                        )} />
                        <Route path="/recipes/:recipeId" element={<SingleRecipe />} />
                        <Route path="/profileDetails" element={<ProfileDetails />} />
                    </Routes>
                    </div>
                </main>
                </RecipeProvider>
                <Footer/>
            </div>
        </AuthProvider>
    );
}

export default App