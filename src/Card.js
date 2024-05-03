import React from 'react';

const Card = ({name, image, sunlight, clicked, id, value}) => {
    return (
        <div className='dib'>
            <button
                type='submit'
                className='bg-light-green ma2 pa2 grow br3 bw0 shadow-3'
                onClick={clicked}
                onSubmit={clicked}
                value={id}
            >
                <img src={image} alt='plant' width={200} height={200}/>
                <h2>{name}</h2>
                <p>{sunlight}</p>
                <p>Value: {value}</p>
            </button>
        </div>
    );
}

export default Card;