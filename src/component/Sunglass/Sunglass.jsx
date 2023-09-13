import React from 'react';

import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiplay } from '../../Utils/Calculate';
// import add from '../../Utils/Calculate';


const Sunglass = () => {
    const first = 56;
    const second = 199;
    const sum = add(first, second)
    const mult = multiplay(first, second)
    return (
        <div>
            
        </div>
    );
};

export default Sunglass;