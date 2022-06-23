import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './styles/style.css'
import Container from './App';

const element = (
    <StrictMode>
        <Container />
    </StrictMode>
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);