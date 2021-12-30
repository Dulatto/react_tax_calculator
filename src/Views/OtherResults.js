import React from 'react';
import { provincesList } from '../data';
import { useStore } from '../store';

const OtherResults = () => {
    const [state, setState] = useStore();

    let area = provincesList.map((x, index) => {
        return (
            <>
                <div className='col-4 border-bottom mb-1' key={index}>{x.text}</div>
                <div className='col-4 border-bottom mb-1' key={index}></div>
                <div className='col-4 border-bottom mb-1' key={index}></div>
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