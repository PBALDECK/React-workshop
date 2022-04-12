import React from 'react'
import './App.css'
import PostsList from './components/PostsList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditPost from './components/EditPost'
import Header from './private/Header'
import UserProfile from './components/UserProfile'
import AllUsers from './components/AllUsers'

const RouterApp = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<PostsList />} />
                <Route path="/post/new" element={<EditPost />} />
                <Route path="/post/:id" element={<EditPost />} />
                <Route path="/users/:id" element={<UserProfile />} />
                <Route path="/users" element={<AllUsers />} />
            </Routes>
        </div>
    </BrowserRouter>
)

export default RouterApp
