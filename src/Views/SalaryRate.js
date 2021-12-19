import React from 'react';
import { useStore } from '../store';
import { per } from '../data';

const SalaryRate = () => {
    const [state, setState] = useStore();

    const handleButtonValue = (e) => {
        setState(old => ({ ...old, timePeriod: e.target.value }));
    }

    let period = per.map((x) => {
        return <div className="col-md-2"><button className="btn btn-light btn-sm"
            value={x.val} onClick={handleButtonValue}>{x.text}</button></div>
    })

    return (
        <div className="row mt-3 bg-white py-4">
            <div className="col-md-3">Salary rate </div>
            <div className="col-md-9">
                <div className="row">
                    {period}
                </div>
            </div>
        </div>
    );
};

export default SalaryRate;