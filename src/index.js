import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicEditor from './BasicEditor';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BasicEditor />, document.getElementById('root'));
registerServiceWorker();
