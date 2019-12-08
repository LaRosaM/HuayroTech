import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

const title = 'Webpack React Setup';
console.log(title);

render(
    <div >
        <App />
    </div>,
    document.getElementById('app')
);