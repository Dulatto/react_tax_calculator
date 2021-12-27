import React from 'react';
import { useStore } from '../store';
import { provinces } from '../data';

const Summary = () => {
    const [state, setState] = useStore();

    const area = provinces.find(item => item.val === state.position)
    const place = area.text;
    return (
        <div className="row bg-white mt-3 py-4">
            <h5 className="fw-bold">Summary</h5>
            <hr />
            <p>If you make <span className="fw-bold">${state.annual}</span> a year living in the region of <span className="fw-bold">{place}, Canada,</span> you will be taxed <span className="fw-bold">$11,432. </span>
                That means that your net pay will be <span className="fw-bold">$40,568</span> per year, or <span className="fw-bold">$3,381</span> per month. Your average
                tax rate is <span className="fw-bold">22.0%</span> and your marginal tax rate is <span className="fw-bold">35.3%</span>. This marginal tax rate means that
                your immediate additional income will be taxed at this rate. For instance, an increase of
                <span className="fw-bold">$100</span> in your salary will be taxed <span className="fw-bold">$35.27</span>, hence, your net pay will only increase by <span className="fw-bold">$64.73</span>.</p>

        </div>
    );
};

export default Summary;