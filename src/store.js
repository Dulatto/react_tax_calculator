import makeStore from './makeStore';
const [StoreProvider, useStore] = makeStore();


//  main app state
const appState = {
    income: 0,
    position: 0,
    time: 0,
    annual: 0,
    salary: 0,
    fedTax: 0,
    provTax: 0,
    cppDeduction: 0,
    eiDeduction: 0,
    totalTax: 0,
    netPay: 0,
    qpp: 0,
    qpip: 0,
    averagePay: 0,
    averageTax: 0,
    // timePeriod: 0,

    //...add your state
};

const initialState = JSON.parse(JSON.stringify(appState));
export { appState, StoreProvider, useStore, initialState };
