import { observable, action } from 'mobx';

export interface IAppState {
    timer: number;

    resetTimer: () => void;
}

class AppState implements IAppState {
    @observable timer = 0;

    constructor() {
        setInterval(() => {
            this.setTimer(this.timer + 1);
        }, 1000);
    }

    @action setTimer(newVal: number) {
        this.timer = newVal;
    }

    @action resetTimer() {
        this.timer = 0;
    }
}

export const appState: IAppState = new AppState();
export default appState;