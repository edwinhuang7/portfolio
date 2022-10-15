import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

// import body with element of 'root' as defined in public folder
ReactDOM.createRoot(document.getElementById('root')).render(<App />)