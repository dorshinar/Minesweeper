import React from 'react';

function NumberTile(props: {number: number}) {
    return (
        <div className="tile number">
            {props.number}
        </div>
    );
}

export default NumberTile;
