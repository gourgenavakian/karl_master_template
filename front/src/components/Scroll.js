import React from 'react';
import {Link} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";

function Scroll(props) {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    const toUp = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Link id="scrollUp" to="#"
                  style={scrollPosition ? {position: 'fixed', zIndex: 2147483647, display: 'block'} :
                                          {position: 'fixed', zIndex: 2147483647, display: 'none'}}
                  onClick={toUp}
            ><i
                className="ti-angle-up" aria-hidden="true"></i></Link>
        </>

    );
}

export default Scroll;