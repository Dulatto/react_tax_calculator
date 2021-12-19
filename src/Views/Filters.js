import React from 'react';
import { useStore } from '../store';
import { provinces, per } from '../data';

const Filters = () => {
    const [state, setState] = useStore();

    console.log('pose', state.position)

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

    return (
        <div className="row mt-4">
            <div className="col-md-3">
                <div className="mb-3">
                    <label className="form-label">Enter your gross income</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i className="fas fa-money-bill-wave"></i></span>
                        <input type="text" className="form-control" value={state.income} onChange={handleIncome} />
                    </div>

                </div>
            </div>
            <div className="col-md-3">
                <div className="mb-3">
                    <label className="form-label">Per</label>
                    <select className="form-select " value={state.time} onChange={handleTimeChange}>
                        {time}
                    </select>

                </div>
            </div>
            <div className="col-md-3">
                <div className="mb-3">
                    <label className="form-label">Where do you work?</label>
                    <select className="form-select " value={state.position} onChange={handleProvinceChange}>
                        {province}
                    </select>

                </div>
            </div>
            <div className="col-md-3 pt-2">
                <div className="mt-4">
                    <button type="button" className="btn btn-danger">Calculate</button>
                </div>
            </div>
        </div>
    );
};

export default Filters;