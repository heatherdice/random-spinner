/* Custom hook designed to access the current width of the page in order to make the app more smoothly responsive */
import { useState, useEffect } from "react";

export default function useResponsive() {
    // set default state of screen resolution to false (may want to change from bool to str for ease of reading in console)
    const [screenType, setScreenType] = useState({
        mobileScreen: false,
        tabletScreen: false,
        desktopScreen: false
    }); // issue: if mobileScreen is set to false on initial load, component will not recognize need for mobile sizing onLoad. Either need to fix issue here or use a different way to grab screen size on initial load that indicates actual size other than bool

    // update state whenever user resizes the screen
    const updateWindowWidth = () => {
        const mobileScreen = window.innerWidth <= 480;
        const tabletScreen = window.innerWidth >= 480 && window.innerWidth <= 750;
        const desktopScreen = window.innerWidth > 750;

        setScreenType({mobileScreen, tabletScreen, desktopScreen});
    };

    // update state on initial load
    useEffect(() => {
        // listen for window resize, call updateWindowWidth
        window.addEventListener("resize", updateWindowWidth);

        // remove eventListner to avoid memory leaks, collision of component events
        return function cleanup() {
            window.removeEventListener("resize", updateWindowWidth);
        };
    }, [window.innerWidth]); // tells React to listen to any changes in window.innerWidth in eventListener in order to call useEffect Hook, rather than running after every render regardless of whether or not window was resized

    return screenType
};