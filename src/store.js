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
    albertaAveragePay: 0,
    albertaAverageTax: 0,
    bcAveragePay: 0,
    bcAverageTax: 0,
    manitobaAveragePay: 0,
    manitobaAverageTax: 0,
    brunswickAveragePay: 0,
    brunswickAverageTax: 0,
    nalAveragePay: 0,
    nalAverageTax: 0,
    scotiaAveragePay: 0,
    scotiaAverageTax: 0,
    ontarioAveragePay: 0,
    ontarioAverageTax: 0,
    peiAveragePay: 0,
    peiAverageTax: 0,
    qcAverageTax: 0,
    qcAveragePay: 0,
    saskAveragePay: 0,
    saskAverageTax: 0,

    // timePeriod: 0,

    //...add your state
};

const initialState = JSON.parse(JSON.stringify(appState));
export { appState, StoreProvider, useStore, initialState };
