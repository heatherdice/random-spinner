import React from "react";
import WheelComponent from 'react-wheel-of-prizes';
// import useResponsive from '../hooks/useResponsive';

function Spinner(props) {
    //? This is the name list for populating the wheel, if there is a certain structure needed then jsut let me know
    const {nameList} = props
    // responsive styling props & functions
    // const {mobileScreen} = useResponsive();
    // let wheelSize;
    // if (mobileScreen) {
    //     wheelSize = "200px";
    // } else {
    //     wheelSize = "250px";
    // }; // issue: if mobileScreen is set to false on initial load, component will not recognize initial need for mobile sizing onLoad
    // console.log(wheelSize);

    // spinner props
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
        <div className="w-full">
            <WheelComponent
                segments={segments}
                segColors={segColors}
                onFinished={(winner) => onFinished(winner)}
                primaryColor='black'
                contrastColor='white'
                buttonText='spin'
                isOnlyOnce={false}
                // size={250}
                upDuration={100}
                downDuration={600}
                fontFamily='Arial'
            />
        </div>
    );
}

export default Spinner;