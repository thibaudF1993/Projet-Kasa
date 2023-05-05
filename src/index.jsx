import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from './utils/styles/GlobalStyle'
import Main from './components/Main'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
    </Router>
  </React.StrictMode>
);
