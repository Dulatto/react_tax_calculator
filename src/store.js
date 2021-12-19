import makeStore from './makeStore';
const [StoreProvider, useStore] = makeStore();


//  main app state
const appState = {
    position: 8,
    //...add your state
};

const initialState = JSON.parse(JSON.stringify(appState));
export { appState, StoreProvider, useStore, initialState };
