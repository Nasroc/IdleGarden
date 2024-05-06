import React from 'react';

const Card = ({name, image, sunlight, clicked, id, value, money, income}) => {
    return (
        <div className='dib'>
            <button
                key={id}
                type='submit'
                className='bg-light-green ma2 pa2 grow br3 bw0 shadow-3 plantCard'
                onClick={clicked}
                onSubmit={clicked}
                value={id}
                income={income}
            >
                <img src={image} alt='plant' width={200} height={200}/>
                <h2>{name}</h2>
                <p>{sunlight}</p>
                <p>Value: {value}</p>
                <p>Cost: {money}</p>
                <p>Income: {income.toFixed(2)}</p>
            </button>
        </div>
    );
}

export default Card;