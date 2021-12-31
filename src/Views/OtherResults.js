import React, { useState } from 'react';
import { provincesList } from '../data';
import { useStore } from '../store';

const OtherResults = () => {
    const [state, setState] = useStore();




    // let area = provincesList.map((x, index) => {
    //     let pay;
    //     let tax;
    //     if (state.annual > 0) {
    //         if (state.annual <= 49000) {
    //             if (x.val === 0) {
    //                 tax = 21.5;
    //                 pay = Number(tax) * Number(state.annual) / 100;
    //             }
    //             if (x.val === 1) {
    //                 tax = 19.2;
    //                 pay = Number(tax) * Number(state.annual) / 100;
    //             }
    //         }
    //         setState(old => ({ ...old, averagePay: pay }));
    //         setState(old => ({ ...old, averageTax: tax }));
    //     }
    //     return (
    //         <>
    //             <div className='col-5 border-bottom mb-1' >{x.text}</div>
    //             <div className='col-3 border-bottom mb-1' index={x.val}>{state.averagePay}</div>
    //             <div className='col-3 border-bottom mb-1' index={x.val}>{state.averageTax}</div>
    //         </>
    //     )
    // })




    return (
        <div className='row other-results mx-1'>
            <div className='col-4 border-bottom fw-bold mb-1'>Region</div>
            <div className='col-4 border-bottom fw-bold mb-1'>Net Pay</div>
            <div className='col-4 border-bottom fw-bold mb-1'>Average Tax</div>
            <div className='col-5 border-bottom mb-1' >Alberta</div>
            <div className='col-3 border-bottom mb-1' >{state.albertaAveragePay}</div>
            <div className='col-3 border-bottom mb-1'>{state.albertaAverageTax} %</div>
            <div className='col-5 border-bottom mb-1' >British Columbia</div>
            <div className='col-3 border-bottom mb-1' >{state.bcAveragePay}</div>
            <div className='col-3 border-bottom mb-1'>{state.bcAverageTax} %</div>
            <div className='col-5 border-bottom mb-1' >Manitoba</div>
            <div className='col-3 border-bottom mb-1' >{state.manitobaAveragePay}</div>
            <div className='col-3 border-bottom mb-1'>{state.manitobaAverageTax} %</div>
            <div className='col-5 border-bottom mb-1' >New Brunswick</div>
            <div className='col-3 border-bottom mb-1' >{state.brunswickAveragePay}</div>
            <div className='col-3 border-bottom mb-1'>{state.brunswickAverageTax} %</div>
            <div className='col-5 border-bottom mb-1' >Newfoundland and Labrador</div>
            <div className='col-3 border-bottom mb-1' >{state.nalAveragePay}</div>
            <div className='col-3 border-bottom mb-1'>{state.nalAverageTax} %</div>
            <div className='col-5 border-bottom mb-1' >Nova Scotia</div>
            <div className='col-3 border-bottom mb-1' >{state.scotiaAveragePay}</div>
            <div className='col-3 border-bottom mb-1'>{state.scotiaAverageTax} %</div>
            <div className='col-5 border-bottom mb-1' >Ontario</div>
            <div className='col-3 border-bottom mb-1' >{state.ontarioAveragePay}</div>
            <div className='col-3 border-bottom mb-1'>{state.ontarioAverageTax} %</div>
            <div className='col-5 border-bottom mb-1' >Prince Edward Island</div>
            <div className='col-3 border-bottom mb-1' >{state.peiAveragePay}</div>
            <div className='col-3 border-bottom mb-1'>{state.peiAverageTax} %</div>
            <div className='col-5 border-bottom mb-1' >Quebec</div>
            <div className='col-3 border-bottom mb-1' >{state.qcAveragePay}</div>
            <div className='col-3 border-bottom mb-1'>{state.qcAverageTax} %</div>
            <div className='col-5 border-bottom mb-1' >Saskatchewan</div>
            <div className='col-3 border-bottom mb-1' >{state.saskAveragePay}</div>
            <div className='col-3 border-bottom mb-1'>{state.saskAverageTax} %</div>
        </div>
    );
};

export default OtherResults;