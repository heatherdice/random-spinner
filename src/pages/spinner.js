import React from "react";
import WheelComponent from 'react-wheel-of-prizes';

export default function Spinner() {
    const segments = [
        'this guy',
        'and another one',
        'and another one that you just did',
        'more stuff',
        'plus this one',
        'one more'
    ];
    const segColors = [
        '#008080',
        '#7F00FF',
        '#008080',
        '#7F00FF',
        '#008080',
        '#7F00FF'
    ];
    const onFinished = (winner) => {
        alert(winner);
    };
    return (
        <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment='won 10'
            onFinished={(winner) => onFinished(winner)}
            primaryColor='black'
            contrastColor='white'
            buttonText='spin'
            isOnlyOnce={false}
            size={290}
            upDuration={3000}
            downDuration={8000}
            fontFamily='Arial'
        />
    );
};