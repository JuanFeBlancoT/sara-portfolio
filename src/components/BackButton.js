import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/backButton.css';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button className="back-button" onClick={() => navigate(-1)}>
            Volver
        </button>
    );
};

export default BackButton;
