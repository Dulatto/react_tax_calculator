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
        if (state.time === '0') {
            calculateAnnual = state.income;
        } else if (state.time === '1') {
            calculateAnnual = state.income * 12;
        } else if (state.time === '2') {
            calculateAnnual = state.income * 26;
        } else if (state.time === '3') {
            calculateAnnual = state.income * 52;
        } else if (state.time === '4') {
            calculateAnnual = state.income * 260;
        } else if (state.time === '5') {
            calculateAnnual = state.income * 1950;
        }
        setState(old => ({ ...old, annual: calculateAnnual }));
        let federal;
        let province;
        if (state.annual <= 49000) {
            if (state.position === '0') {
                federal = 9.48 * Number(state.income) / 100;
                province = 5.38 * Number(state.income) / 100;
            }
        }
        setState(old => ({ ...old, fedTax: federal }));
        setState(old => ({ ...old, provTax: province }));
    }

    return (
        <div className="row mt-4">
            <div className="col-md-3">
                <div className="mb-3">
                    <label className="form-label fw-bold">Enter your gross income</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i className="fas fa-money-bill-wave"></i></span>
                        <input type="text" className="form-control text-end" value={state.income} onChange={handleIncome} />
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