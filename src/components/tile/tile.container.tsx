import React, { useState } from 'react';
import MineTile from './mine/mine.tile';
import NumberTile from './number/number.tile';
import HiddenableTile from './hiddenable/hiddenable.tile';

interface Bomb {
    type: "Bomb",
}

interface Number {
    type: "Number",
    bombsCount: number;
}

function TileContainer(props: Bomb | Number) {
    if (props.type === 'Bomb') {
        return <HiddenableTile child={<MineTile />} isHidden={true} />;
    }
    else if (props.type === 'Number') {
        return <HiddenableTile child={<NumberTile number={props.bombsCount} />} isHidden={true} />;
    }

    return null;
}

export default TileContainer;
