import React from 'react';
import { useStore } from '../store';
import { PieChart } from 'react-minimal-pie-chart';

const Results = () => {
    const [state, setState] = useStore();

    const shiftSize = 2;
    const defaultLabelStyle = {
        fontSize: '4px',
        fill: '#fff',
    };
    return (
        <div className="row bg-white mt-3 py-4">
            <h5 className="fw-bold">Withholding</h5>
            <hr />
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-8 fw-bold">Salary</div>
                    <div className="col-md-4 fw-bold text-end">${state.salary}</div>
                    <div className="col-md-8">Federal tax deduction</div>
                    <div className="col-md-4 text-end">$26.67</div>
                    <div className="col-md-8">Provincial tax deduction</div>
                    <div className="col-md-4 text-end">$26.67</div>
                    <div className="col-md-8">CPP deduction</div>
                    <div className="col-md-4 text-end">$26.67</div>
                    <div className="col-md-8">EI deduction</div>
                    <div className="col-md-4 mb-2 text-end">$26.67</div>
                    <hr />
                    <div className="col-md-8 fw-bold">Total tax</div>
                    <div className="col-md-4 fw-bold text-end">$26.67</div>
                    <div className="col-md-8 fw-bold">Net pay</div>
                    <div className="col-md-4 fw-bold mb-2 text-end">$26.67</div>
                    <hr />
                    <div className="col-md-8">EI deduction</div>
                    <div className="col-md-4 mb-2 text-end">$26.67</div>
                    <hr />
                    <div className="col-md-8">Marginal tax rate</div>
                    <div className="col-md-4 text-end">$26.67</div>
                    <div className="col-md-8">Average tax rate</div>
                    <div className="col-md-4 mb-2 text-end">$26.67</div>
                </div>
            </div>
            <div className="col-md-6">
                <PieChart
                    data={[
                        { title: 'Total tax', value: 65, color: '#842029' },
                        { title: 'Net pay', value: 35, color: '#dc3545' },
                    ]}
                    radius={PieChart.defaultProps.radius - 20}
                    segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
                    label={({ dataEntry }) => dataEntry.title + ' ' + dataEntry.value + '' + '%'}
                    labelStyle={{
                        ...defaultLabelStyle,
                    }}
                    style={{ height: '400px' }}
                />;
            </div>
        </div>
    );
};

export default Results;