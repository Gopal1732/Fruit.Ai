import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/Home';
import SignIn from './components/SignIn';
import About from './components/About';
import Translator from './components/Translator';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/aboutUs" element={<About />} />
                <Route path="/" element={<SignIn />} />
                <Route path="/translator" element={<Translator />} />

            </Routes>
        </Router>
    );
}

export default App;