import React from 'react';
import MineTile from './mine/mine-tile.component';
import NumberTile from './number/number-tile.component';
import HiddenableTile from './hiddenable/hiddenable-tile.component';

interface Bomb {
    type: "Bomb",
}

interface Number {
    type: "Number",
    bombsCount: number;
}

function TileContainer(props: Bomb | Number) {
    if (props.type === 'Bomb') {
        return <HiddenableTile child={<MineTile />} isHidden={false} />;
    }
    else if (props.type === 'Number') {
        return <HiddenableTile child={<NumberTile value={props.bombsCount} />} isHidden={false} />;
    }

    return null;
}

export default TileContainer;
