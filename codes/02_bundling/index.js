import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', { id: 'heading1' }, 'Hello world!');

const parent = React.createElement(
	'div',
	{ id: 'parent' },
	React.createElement('div', { id: 'child' }, heading)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
