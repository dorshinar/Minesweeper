import React from 'react';

function HiddenableTile(props: { child: JSX.Element, isHidden: boolean }) {
    return (
        <div className="tile hidden">
            {!props.isHidden && props.child}
        </div>
    );
}

export default HiddenableTile;
