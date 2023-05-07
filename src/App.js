/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from 'components/Header'
import { NavigationBar } from 'components/NavigationBar'
import { Main } from 'components/Main'
import { Footer } from 'components/Footer'
import { Directory } from './components/Directory'

export const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" component={Main} />
        <Route path="/directory" component={Directory} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}
