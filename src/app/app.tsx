import * as React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import { IAppState } from '../stores/app';

import './app.less';

@observer
export class App extends React.Component<{ appState: IAppState }, {}> {
    render() {
        return (
            <div className="app">
                <button className="reset-btn" onClick={this.onReset}>
                    Seconds passed: {this.props.appState.timer}
                </button>
                <DevTools />
            </div>
        );
    }

    onReset = () => {
        this.props.appState.resetTimer();
    }
};