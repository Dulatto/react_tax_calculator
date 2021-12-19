import makeStore from './makeStore';
const [StoreProvider, useStore] = makeStore();


//  main app state
const appState = {
    income: null,
    position: 8,
    time: 0,
    timePeriod: 0,

    //...add your state
};

const initialState = JSON.parse(JSON.stringify(appState));
export { appState, StoreProvider, useStore, initialState };
