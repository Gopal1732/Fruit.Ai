import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const BackToHomeButton = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/home'); 
    };

    return (
        <button className="back-to-home-button" onClick={goHome}>
            &#8592; Back to Home
        </button>
    );
}

export default BackToHomeButton;
