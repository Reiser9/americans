import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import './App.css';

import Main from './pages/Main';
import Mint from './pages/Mint';

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Mint />} />
            <Route path="/mint" element={<Main />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default App;