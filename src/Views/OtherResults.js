import React, { useState } from 'react';
import { provincesList } from '../data';
import { useStore } from '../store';

const OtherResults = () => {
    const [state, setState] = useStore();




    let area = provincesList.map((x, index) => {
        let pay;
        let tax;
        if (state.annual > 0) {
            if (state.annual <= 49000) {
                if (x.val === 0) {
                    tax = 21.5;
                    pay = Number(tax) * Number(state.annual) / 100;
                }
                if (x.val === 1) {
                    tax = 19.2;
                    pay = Number(tax) * Number(state.annual) / 100;
                }
            }
            setState(old => ({ ...old, averagePay: pay }));
            setState(old => ({ ...old, averageTax: tax }));
        }
        return (
            <>
                <div className='col-5 border-bottom mb-1' >{x.text}</div>
                <div className='col-3 border-bottom mb-1' index={x.val}>{state.averagePay}</div>
                <div className='col-3 border-bottom mb-1' index={x.val}>{state.averageTax}</div>
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