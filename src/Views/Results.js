import React from 'react';

const Results = () => {
    return (
        <div className="row bg-white mt-3 py-4">
            <h5>Withholding</h5>
            <hr />
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-8 fw-bold">Salary</div>
                    <div className="col-md-4">$26.67</div>
                    <div className="col-md-8">Federal tax deduction</div>
                    <div className="col-md-4">$26.67</div>
                    <div className="col-md-8">Provincial tax deduction</div>
                    <div className="col-md-4">$26.67</div>
                    <div className="col-md-8">CPP deduction</div>
                    <div className="col-md-4">$26.67</div>
                    <div className="col-md-8">EI deduction</div>
                    <div className="col-md-4 mb-2">$26.67</div>
                    <hr />

                </div>
            </div>
            <div className="col-md-6"></div>
        </div>
    );
};

export default Results;