import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Articles from '../components/Articles';
import Header from '../components/Header';
import HeaderBar from '../components/HeaderBar';
import HomePage from '../components/HomePage';



export const AppRouter  = () => {
  return (
    <BrowserRouter>
      <Header />
      <HeaderBar />
      <Routes>
        <Route exact="true" path="/" element={<HomePage />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  )
}