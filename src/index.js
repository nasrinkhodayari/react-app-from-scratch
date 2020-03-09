import React from 'react';
import { render } from 'react-dom';
import "./style/main.less"


const rootElement = document.getElementById('react-app');

render(<div class="header"> Hello World! </div>, rootElement);
