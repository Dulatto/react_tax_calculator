import React from 'react';

const Results = () => {
    return (
        <div className="row bg-white mt-3 py-4">
            <h5 className="fw-bold">Withholding</h5>
            <hr />
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-8 fw-bold">Salary</div>
                    <div className="col-md-4 fw-bold text-end">$26.67</div>
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
            <div className="col-md-6"></div>
        </div>
    );
};

export default Results;