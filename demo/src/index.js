import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'rebass'
import Routes from './Routes';

import registerServiceWorker from './registerServiceWorker';

render(
  <Provider><Routes /></Provider>
  , document.getElementById('root')
);

registerServiceWorker();
