import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';

import { App } from './app/app';
import { AppState } from './stores/app';

useStrict(true);
const appState = new AppState();
ReactDOM.render(<App appState={appState} />, document.getElementById('root'));
