import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import './App.css';

import Main from './pages/Main';
import Mint from './pages/Mint';

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/mint" element={<Mint />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default App;