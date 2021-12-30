import React, { useState } from 'react';
import { provincesList } from '../data';
import { useStore } from '../store';

const OtherResults = () => {
    const [state, setState] = useStore();




    let area = provincesList.map((x, index) => {
        let pay;
        let tax;
        if (state.annual <= 49000) {
            if (index === 0) {
                tax = 21.5;
                pay = Number(tax) * Number(state.annual) / 100;

            }
        }

        return (
            <>
                <div className='col-5 border-bottom mb-1' key={index}>{x.text}</div>
                <div className='col-3 border-bottom mb-1' >{state.averagePay}</div>
                <div className='col-3 border-bottom mb-1' >{state.averageTax}</div>
            </>
        )
    })





    return (
        <div className='row other-results mx-1'>
            <div className='col-4 border-bottom fw-bold mb-1'>Region</div>
            <div className='col-4 border-bottom fw-bold mb-1'>Net Pay</div>
            <div className='col-4 border-bottom fw-bold mb-1'>Average Tax</div>
            {area}
        </div>
    );
};

export default OtherResults;