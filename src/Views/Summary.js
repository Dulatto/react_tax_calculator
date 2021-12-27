import React from 'react';
import { useStore } from '../store';
import { provinces } from '../data';

const Summary = () => {
    const [state, setState] = useStore();

    const area = provinces.find(item => item.val == state.position)
    const place = area.text;
    const taxes = Number(state.fedTax) + Number(state.provTax) + Number(state.cppDeduction) + Number(state.eiDeduction);
    const pay = Number(state.salary) - Number(taxes);
    const monthly = pay / 12;
    return (
        <div className="row bg-white mt-3 py-4">
            <h5 className="fw-bold">Summary</h5>
            <hr />
            <p>If you make <span className="fw-bold">${state.annual}</span> a year living in the region of <span className="fw-bold">{place}, Canada,</span> you will be taxed <span className="fw-bold">${taxes}. </span>
                That means that your net pay will be <span className="fw-bold">${pay}</span> per year, or <span className="fw-bold">${monthly.toFixed(0)}</span> per month.</p>

        </div>
    );
};

export default Summary;