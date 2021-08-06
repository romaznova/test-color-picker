import React from 'react';
import ReactDOM from 'react-dom';
import { ColorPicker } from '@components';

const rootTarget = document.getElementById('root');

const colors = [
    { color: '#ffff00', title: 'yellow' },
    { color: '#ff0000', title: 'red' },
    { color: '#00ff00', title: 'green' },
    { color: '#0000ff', title: 'blue' },
];

const defaultValue = '#ffff00'
const handleChange = (e: string) => console.log('onChange callback ====>', e);

ReactDOM.render((
    <ColorPicker colors={colors} value={defaultValue} onChange={handleChange} />
), rootTarget);
