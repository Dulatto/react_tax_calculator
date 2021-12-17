import React from 'react';

const Filters = () => {
    return (
        <div className="row mt-4">
            <div className="col-md-3">
                <div className="mb-3">
                    <label className="form-label">Enter your gross income</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i className="fas fa-money-bill-wave"></i></span>
                        <input type="text" className="form-control" />
                    </div>

                </div>
            </div>
            <div className="col-md-3">
                <div className="mb-3">
                    <label className="form-label">Per</label>
                    <select className="form-select ">
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                    </select>

                </div>
            </div>
            <div className="col-md-3">
                <div className="mb-3">
                    <label className="form-label">Where do you work?</label>
                    <select className="form-select ">
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                    </select>

                </div>
            </div>
            <div className="col-md-3 pt-2">
                <div className="mt-4">
                    <button type="button" className="btn btn-danger">Calculate</button>
                </div>
            </div>
        </div>
    );
};

export default Filters;