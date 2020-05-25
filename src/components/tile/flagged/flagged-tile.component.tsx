import React from 'react';
import img from '../../public/assets/icons8-flag-filled-100.png';

function FlaggedTile() {
    return (
        <div className="tile flagged">
            <img src={img} />
        </div>
    );
}

export default FlaggedTile;
