import React, { useState } from 'react';
import { useStore } from '../store';
import { PieChart } from 'react-minimal-pie-chart';

const Results = () => {
    const [state, setState] = useStore();

    const taxes = Number(state.totalTax);
    const pays = Number(state.netPay);

    const data = [
        { title: 'Tax', value: taxes, color: '#842029' },
        { title: 'Net pay', value: pays, color: '#dc3545' },
    ]



    const total = Number(state.fedTax) + Number(state.provTax) + Number(state.cppDeduction) + Number(state.eiDeduction);
    const pay = Number(state.salary) - Number(total);

    const shiftSize = 2;
    const defaultLabelStyle = {
        fontSize: '4px',
        fill: '#fff',
    };
    return (
        <div className="row  mt-1 py-2">
            <div className="col-md-5 bg-white ">
                <h5 className="fw-bold mt-2">Withholding</h5>
                <hr />
                <div className="row">
                    <div className="col-md-8 fw-bold">Salary</div>
                    <div className="col-md-4 fw-bold text-end">${state.salary}</div>
                    <div className="col-md-8">Federal tax deduction</div>
                    <div className="col-md-4 text-end">- ${state.fedTax}</div>
                    <div className="col-md-8">Provincial tax deduction</div>
                    <div className="col-md-4 text-end">- ${state.provTax}</div>
                    {state.position !== '8' ? (
                        <>
                            <div className="col-md-8">CPP deduction</div>
                            <div className="col-md-4 text-end">- ${state.cppDeduction}</div>
                        </>
                    ) : null}

                    <div className="col-md-8">EI deduction</div>
                    <div className="col-md-4 mb-2 text-end">- ${state.eiDeduction}</div>
                    {state.position === '8' ? (
                        <>
                            <div className="col-md-8" title='Quebec Pension Plan'>QPP</div>
                            <div className="col-md-4 text-end">- ${state.qpp}</div>
                            <div className="col-md-8" title='Quebec Parental Insurance Plan'>QPIP</div>
                            <div className="col-md-4 text-end">- ${state.qpip}</div>
                        </>
                    ) : null}
                    <hr />
                    <div className="col-md-8 fw-bold">Total tax</div>
                    <div className="col-md-4 fw-bold text-end">- ${total}</div>
                    <div className="col-md-8 fw-bold">Net pay</div>
                    <div className="col-md-4 fw-bold mb-2 text-end">${pay}</div>

                    {state.fedTax > 0 ?
                        <PieChart
                            data={data}
                            radius={PieChart.defaultProps.radius - 20}
                            segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
                            label={({ dataEntry }) => dataEntry.title + ' ' + dataEntry.value + '' + '%'}
                            labelStyle={{
                                ...defaultLabelStyle,
                            }}
                            style={{ height: '400px' }}
                        /> : null
                    }

                </div>
            </div>
            <div className="col-md-7 region bg-white">
                <h5 className="fw-bold mt-2">Tax per region</h5>
                <hr />
            </div>
        </div>
    );
};

export default Results;