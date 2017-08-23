import * as React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import { IAppState } from '../stores/app';

import './app.less';

@observer
export class App extends React.Component<{ appState: IAppState }, {}> {
    render() {
        const { timer, resetTimer } = this.props.appState;

        return (
            <div className="app">
                {/* APP Content Here! */}
                <button className="reset-btn" onClick={resetTimer}>
                    Seconds passed: {timer}
                </button>
                <DevTools />
            </div>
        );
    }
};