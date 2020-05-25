import React from 'react';

function NumberTile(props: {value: number}) {
    return (
        <div className="tile number">
            {props.value}
        </div>
    );
}

export default NumberTile;
