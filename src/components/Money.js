import React from 'react';

const Money = ({ value }) => {
    return (
        <div>
            <h2>Money: {value.toFixed(1)}</h2>
        </div>
    );
}

export default Money;