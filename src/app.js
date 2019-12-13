import React from 'react';
import { render } from 'react-dom';
import Hello from '../lib/hello';

const App = () => <Hello />;
render(<App />, document.getElementById('root'));