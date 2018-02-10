import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import { add } from './test.rs';

console.log(add(0, 2));
ReactDOM.render(<Button type="primary">Button</Button>, document.getElementById('app'));
