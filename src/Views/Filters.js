import React from 'react';
import { useStore } from '../store';
import { provinces, per } from '../data';

const Filters = () => {
    const [state, setState] = useStore();

    // console.log('pose', state.position)

    let province = provinces.map((x, index) => {
        return <option key={index} value={x.val}>{x.text}</option>
    })

    let time = per.map((x, index) => {
        return <option key={index} value={x.val}>{x.text}</option>
    })

    const handleProvinceChange = (e) => {
        setState(old => ({ ...old, position: e.target.value }));
    }
    const handleTimeChange = (e) => {
        setState(old => ({ ...old, time: e.target.value }));
    }
    const handleIncome = (e) => {
        setState(old => ({ ...old, income: e.target.value }));
    }

    const calculate = () => {

        setState(old => ({ ...old, salary: state.income }));
        let calculateAnnual;
        if (state.time === '0' || state.time === 0) {
            calculateAnnual = Number(state.income);
        } else if (state.time === '1') {
            calculateAnnual = Number(state.income) * 12;
        } else if (state.time === '2') {
            calculateAnnual = Number(state.income) * 26;
        } else if (state.time === '3') {
            calculateAnnual = Number(state.income) * 52;
        } else if (state.time === '4') {
            calculateAnnual = Number(state.income) * 260;
        } else if (state.time === '5') {
            calculateAnnual = Number(state.income) * 1950;
        }
        setState(old => ({ ...old, annual: calculateAnnual }));

        let federal;
        let province;
        let cpp;
        let ei;
        let nalog;
        let plata;
        let quebec;
        let pension;
        if (calculateAnnual <= 49000) {
            if (state.position === '0' || state.position === 0) {
                federal = 9.48 * Number(state.income) / 100;
                province = 5.38 * Number(state.income) / 100;
                cpp = 5.06 * Number(state.income) / 100;
                ei = 1.58 * Number(state.income) / 100;
                quebec = Number(0);
                pension = Number(0);

                nalog = Number(21.5);
                plata = 100 - Number(nalog);

            } else if (state.position === '8') {
                federal = 7.85 * Number(state.income) / 100;
                province = 10.12 * Number(state.income) / 100;
                ei = 1.18 * Number(state.income) / 100;
                quebec = 5.48 * Number(state.income) / 100;
                pension = 0.49 * Number(state.income) / 100;
                cpp = Number(0);
                nalog = Number(25.1);
                plata = 100 - Number(nalog);

            }

            setState(old => ({ ...old, albertaAveragePay: (Number(calculateAnnual) - (Number(21.5) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, albertaAverageTax: 21.5 }));
            setState(old => ({ ...old, bcAveragePay: (Number(calculateAnnual) - (Number(19.2) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, bcAverageTax: 19.2 }));
            setState(old => ({ ...old, manitobaAveragePay: (Number(calculateAnnual) - (Number(23.8) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, manitobaAverageTax: 23.8 }));
            setState(old => ({ ...old, brunswickAveragePay: (Number(calculateAnnual) - (Number(22.5) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, brunswickAverageTax: 22.5 }));
            setState(old => ({ ...old, nalAveragePay: (Number(calculateAnnual) - (Number(22.8) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, nalAverageTax: 22.8 }));
            setState(old => ({ ...old, scotiaAveragePay: (Number(calculateAnnual) - (Number(24.3) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, scotiaAverageTax: 24.3 }));
            setState(old => ({ ...old, ontarioAveragePay: (Number(calculateAnnual) - (Number(20.1) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, ontarioAverageTax: 20.1 }));
            setState(old => ({ ...old, peiAveragePay: (Number(calculateAnnual) - (Number(23.6) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, peiAverageTax: 23.6 }));
            setState(old => ({ ...old, qcAveragePay: (Number(calculateAnnual) - (Number(25.1) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, qcAverageTax: 25.1 }));
            setState(old => ({ ...old, saskAveragePay: (Number(calculateAnnual) - (Number(21.6) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, saskAverageTax: 21.6 }));
        }
        if (calculateAnnual > 49000 && calculateAnnual <= 98020) {
            if (state.position === '0' || state.position === 0) {
                federal = 14.88 * Number(state.income) / 100;
                province = 7.6 * Number(state.income) / 100;
                cpp = 3.23 * Number(state.income) / 100;
                ei = 0.9 * Number(state.income) / 100;
                quebec = Number(0);
                pension = Number(0);
                nalog = Number(26.61);
                plata = 100 - Number(nalog);

            } else if (state.position === '8') {
                federal = 12.37 * Number(state.income) / 100;
                province = 15.31 * Number(state.income) / 100;
                ei = 0.68 * Number(state.income) / 100;
                quebec = 3.5 * Number(state.income) / 100;
                pension = 0.42 * Number(state.income) / 100;
                cpp = Number(0);

                nalog = Number(32.3);
                plata = 100 - Number(nalog);

            }
            setState(old => ({ ...old, albertaAveragePay: (Number(calculateAnnual) - (Number(26.61) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, albertaAverageTax: 26.61 }));
            setState(old => ({ ...old, bcAveragePay: (Number(calculateAnnual) - (Number(24.9) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, bcAverageTax: 24.9 }));
            setState(old => ({ ...old, manitobaAveragePay: (Number(calculateAnnual) - (Number(30.5) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, manitobaAverageTax: 30.5 }));
            setState(old => ({ ...old, brunswickAveragePay: (Number(calculateAnnual) - (Number(30.0) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, brunswickAverageTax: 30.0 }));
            setState(old => ({ ...old, nalAveragePay: (Number(calculateAnnual) - (Number(30.1) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, nalAverageTax: 30.1 }));
            setState(old => ({ ...old, scotiaAveragePay: (Number(calculateAnnual) - (Number(31.4) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, scotiaAverageTax: 31.4 }));
            setState(old => ({ ...old, ontarioAveragePay: (Number(calculateAnnual) - (Number(26.5) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, ontarioAverageTax: 26.5 }));
            setState(old => ({ ...old, peiAveragePay: (Number(calculateAnnual) - (Number(30.8) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, peiAverageTax: 30.8 }));
            setState(old => ({ ...old, qcAveragePay: (Number(calculateAnnual) - (Number(32.3) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, qcAverageTax: 32.3 }));
            setState(old => ({ ...old, saskAveragePay: (Number(calculateAnnual) - (Number(28.2) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, saskAverageTax: 28.2 }));
        }
        if (calculateAnnual > 98020 && calculateAnnual <= 152020) {
            if (state.position === '0' || state.position === 0) {
                federal = 18.82 * Number(state.income) / 100;
                province = 8.7 * Number(state.income) / 100;
                cpp = 2.08 * Number(state.income) / 100;
                ei = 0.58 * Number(state.income) / 100;
                quebec = Number(0);
                pension = Number(0);
                nalog = Number(30.18);
                plata = 100 - Number(nalog);
            } else if (state.position === '8') {
                federal = 15.68 * Number(state.income) / 100;
                province = 18.87 * Number(state.income) / 100;
                ei = 0.43 * Number(state.income) / 100;
                quebec = 2.25 * Number(state.income) / 100;
                pension = 0.27 * Number(state.income) / 100;
                cpp = Number(0);

                nalog = Number(37.5);
                plata = 100 - Number(nalog);

            }
            setState(old => ({ ...old, albertaAveragePay: (Number(calculateAnnual) - (Number(30.18) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, albertaAverageTax: 30.18 }));
            setState(old => ({ ...old, bcAveragePay: (Number(calculateAnnual) - (Number(29.9) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, bcAverageTax: 29.9 }));
            setState(old => ({ ...old, manitobaAveragePay: (Number(calculateAnnual) - (Number(34.8) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, manitobaAverageTax: 34.8 }));
            setState(old => ({ ...old, brunswickAveragePay: (Number(calculateAnnual) - (Number(34.2) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, brunswickAverageTax: 34.2 }));
            setState(old => ({ ...old, nalAveragePay: (Number(calculateAnnual) - (Number(34.1) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, nalAverageTax: 34.1 }));
            setState(old => ({ ...old, scotiaAveragePay: (Number(calculateAnnual) - (Number(35.5) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, scotiaAverageTax: 35.5 }));
            setState(old => ({ ...old, ontarioAveragePay: (Number(calculateAnnual) - (Number(32.2) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, ontarioAverageTax: 32.2 }));
            setState(old => ({ ...old, peiAveragePay: (Number(calculateAnnual) - (Number(35.3) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, peiAverageTax: 35.3 }));
            setState(old => ({ ...old, qcAveragePay: (Number(calculateAnnual) - (Number(37.5) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, qcAverageTax: 37.5 }));
            setState(old => ({ ...old, saskAveragePay: (Number(calculateAnnual) - (Number(31.8) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, saskAverageTax: 31.8 }));
        }

        if (calculateAnnual > 152000 && calculateAnnual <= 216000) {
            if (state.position === '0' || state.position === 0) {
                federal = 22.06 * Number(state.income) / 100;
                province = 10.03 * Number(state.income) / 100;
                cpp = 1.46 * Number(state.income) / 100;
                ei = 0.41 * Number(state.income) / 100;
                quebec = Number(0);
                pension = Number(0);
                nalog = Number(34.0);
                plata = 100 - Number(nalog);
            } else if (state.position === '8') {
                federal = 18.40 * Number(state.income) / 100;
                province = 20.91 * Number(state.income) / 100;
                ei = 0.31 * Number(state.income) / 100;
                quebec = 1.59 * Number(state.income) / 100;
                pension = 0.19 * Number(state.income) / 100;
                cpp = Number(0);

                nalog = Number(41.4);
                plata = 100 - Number(nalog);

            }
            setState(old => ({ ...old, albertaAveragePay: (Number(calculateAnnual) - (Number(34) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, albertaAverageTax: 34 }));
            setState(old => ({ ...old, bcAveragePay: (Number(calculateAnnual) - (Number(35.2) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, bcAverageTax: 35.2 }));
            setState(old => ({ ...old, manitobaAveragePay: (Number(calculateAnnual) - (Number(39.1) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, manitobaAverageTax: 39.1 }));
            setState(old => ({ ...old, brunswickAveragePay: (Number(calculateAnnual) - (Number(34.2) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, brunswickAverageTax: 34.2 }));
            setState(old => ({ ...old, nalAveragePay: (Number(calculateAnnual) - (Number(38.3) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, nalAverageTax: 38.3 }));
            setState(old => ({ ...old, scotiaAveragePay: (Number(calculateAnnual) - (Number(40.3) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, scotiaAverageTax: 40.3 }));
            setState(old => ({ ...old, ontarioAveragePay: (Number(calculateAnnual) - (Number(37.5) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, ontarioAverageTax: 37.5 }));
            setState(old => ({ ...old, peiAveragePay: (Number(calculateAnnual) - (Number(39.4) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, peiAverageTax: 39.4 }));
            setState(old => ({ ...old, qcAveragePay: (Number(calculateAnnual) - (Number(41.4) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, qcAverageTax: 41.4 }));
            setState(old => ({ ...old, saskAveragePay: (Number(calculateAnnual) - (Number(35.8) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, saskAverageTax: 35.8 }));
        }

        if (calculateAnnual > 216000) {
            if (state.position === '0' || state.position === 0) {
                federal = 24.96 * Number(state.income) / 100;
                province = 11.12 * Number(state.income) / 100;
                cpp = 1.05 * Number(state.income) / 100;
                ei = 0.29 * Number(state.income) / 100;
                quebec = Number(0);
                pension = Number(0);
                nalog = Number(37.42);
                plata = 100 - Number(nalog);
            } else if (state.position === '8') {
                federal = 21.77 * Number(state.income) / 100;
                province = 22.76 * Number(state.income) / 100;
                ei = 0.19 * Number(state.income) / 100;
                quebec = 0.98 * Number(state.income) / 100;
                pension = 0.12 * Number(state.income) / 100;
                cpp = Number(0);

                nalog = Number(45.8);
                plata = 100 - Number(nalog);

            }
            setState(old => ({ ...old, albertaAveragePay: (Number(calculateAnnual) - (Number(37.42) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, albertaAverageTax: 37.42 }));
            setState(old => ({ ...old, bcAveragePay: (Number(calculateAnnual) - (Number(41.9) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, bcAverageTax: 41.9 }));
            setState(old => ({ ...old, manitobaAveragePay: (Number(calculateAnnual) - (Number(43.1) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, manitobaAverageTax: 43.1 }));
            setState(old => ({ ...old, brunswickAveragePay: (Number(calculateAnnual) - (Number(44.4) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, brunswickAverageTax: 44.4 }));
            setState(old => ({ ...old, nalAveragePay: (Number(calculateAnnual) - (Number(43.2) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, nalAverageTax: 43.2 }));
            setState(old => ({ ...old, scotiaAveragePay: (Number(calculateAnnual) - (Number(45.4) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, scotiaAverageTax: 45.4 }));
            setState(old => ({ ...old, ontarioAveragePay: (Number(calculateAnnual) - (Number(43.5) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, ontarioAverageTax: 43.5 }));
            setState(old => ({ ...old, peiAveragePay: (Number(calculateAnnual) - (Number(43.8) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, peiAverageTax: 43.8 }));
            setState(old => ({ ...old, qcAveragePay: (Number(calculateAnnual) - (Number(45.8) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, qcAverageTax: 45.8 }));
            setState(old => ({ ...old, saskAveragePay: (Number(calculateAnnual) - (Number(40.1) * Number(calculateAnnual) / 100)).toFixed(0) }));
            setState(old => ({ ...old, saskAverageTax: 40.1 }));
        }
        setState(old => ({ ...old, fedTax: federal.toFixed(0) }));
        setState(old => ({ ...old, provTax: province.toFixed(0) }));
        setState(old => ({ ...old, cppDeduction: cpp.toFixed(0) }));
        setState(old => ({ ...old, eiDeduction: ei.toFixed(0) }));
        setState(old => ({ ...old, qpp: quebec.toFixed(0) }));
        setState(old => ({ ...old, qpip: pension.toFixed(0) }));
        setState(old => ({ ...old, totalTax: nalog.toFixed(1) }));
        setState(old => ({ ...old, netPay: plata.toFixed(1) }));




    }




    return (
        <div className="row mt-4">
            <div className="col-md-3">
                <div className="mb-3">
                    <label className="form-label fw-bold">Enter your gross income</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i className="fas fa-money-bill-wave"></i></span>
                        <input type="number" className="form-control text-end" value={state.income} onChange={handleIncome} />
                    </div>

                </div>
            </div>
            <div className="col-md-3">
                <div className="mb-3">
                    <label className="form-label fw-bold">Per</label>
                    <select className="form-select " value={state.time} onChange={handleTimeChange}>
                        {time}
                    </select>

                </div>
            </div>
            <div className="col-md-3">
                <div className="mb-3">
                    <label className="form-label fw-bold">Where do you work?</label>
                    <select className="form-select " value={state.position} onChange={handleProvinceChange}>
                        {province}
                    </select>

                </div>
            </div>
            <div className="col-md-3 pt-2">
                <div className="mt-4">
                    <button type="button" className="btn btn-danger" onClick={calculate} disabled={state.income == 0}>Calculate</button>
                </div>
            </div>
        </div>
    );
};

export default Filters;