import React from 'react';

const Filters = () => {
    return (
        <div className="row mt-4">
            <div className="col-md-3">
                <div class="mb-3">
                    <label class="form-label">Enter your gross income</label>
                    <input type="text" class="form-control" />

                </div>
            </div>
            <div className="col-md-3">
                <div class="mb-3">
                    <label class="form-label">Per</label>
                    <select class="form-select ">
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                    </select>

                </div>
            </div>
            <div className="col-md-3">
                <div class="mb-3">
                    <label class="form-label">Where do you work?</label>
                    <select class="form-select ">
                        <option>Small select</option>
                        <option>Small select</option>
                        <option>Small select</option>
                    </select>

                </div>
            </div>
            <div className="col-md-3 pt-2">
                <div class="mt-4">
                    <button type="button" class="btn btn-danger">Calculate</button>
                </div>
            </div>
        </div>
    );
};

export default Filters;