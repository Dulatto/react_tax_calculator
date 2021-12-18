import React from 'react';

const SalaryRate = () => {
    return (
        <div className="row mt-3 bg-white py-4">
            <div className="col-md-3">Salary rate </div>
            <div className="col-md-9">
                <div className="row">
                    <div className="col-md-2"><button className="btn btn-light btn-sm">Annual</button></div>
                    <div className="col-md-2"><button className="btn btn-light btn-sm">Month</button></div>
                    <div className="col-md-2"><button className="btn btn-light btn-sm">Biweekly</button></div>
                    <div className="col-md-2"><button className="btn btn-light btn-sm">Weekly</button></div>
                    <div className="col-md-2"><button className="btn btn-light btn-sm">Day</button></div>
                    <div className="col-md-2"><button className="btn btn-light btn-sm">Hour</button></div>
                </div>
            </div>
        </div>
    );
};

export default SalaryRate;