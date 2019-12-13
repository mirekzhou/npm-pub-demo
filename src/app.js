import React from 'react';
import { render } from 'react-dom';
import Hello from '../lib/hello';

const App = () => (
    <div>
        <h1>这是我的App头部</h1>
        <Hello></Hello>
    </div>
);

render(<App />, document.getElementById('root'));