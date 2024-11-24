import React from 'react';
import { Range } from "react-range";

function PriceRange() {
    const [priceRange, setPriceRange] = React.useState([0, 1350]);

    const handleRangeChange = (price) => {
        setPriceRange(price);
    };

    return (
        <>
            <Range
                step={50}
                min={0}
                max={3000}
                values={priceRange}
                onChange={handleRangeChange}
                renderTrack={({ props: trackProps, children }) => (
                    <div
                        style={{
                            ...trackProps.style,
                            height: '4px',
                            width: '100%',
                            backgroundColor: '#ccc',
                            position: 'relative'
                        }}
                        ref={trackProps.ref}
                        onMouseDown={trackProps.onMouseDown}
                        onTouchStart={trackProps.onTouchStart}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                height: '100%',
                                background: '#000',
                                left: `${(priceRange[0] / 3000) * 100}%`,
                                width: `${((priceRange[1] - priceRange[0]) / 3000) * 100}%`
                            }}
                        />
                        {children}
                    </div>
                )}
                renderThumb={({ props: thumbProps, index }) => (
                    <div
                        key={index} // Уникальный ключ для каждого Thumb
                        style={{
                            ...thumbProps.style,
                            height: '17px',
                            width: '17px',
                            backgroundColor: '#000'
                        }}
                        ref={thumbProps.ref}
                        onMouseDown={thumbProps.onMouseDown}
                        onTouchStart={thumbProps.onTouchStart}
                        onKeyDown={thumbProps.onKeyDown}
                        role="slider"
                        aria-valuemin={0}
                        aria-valuemax={3000}
                        aria-valuenow={priceRange[index]}
                        tabIndex={0}
                    />
                )}
            />
            <div className="range-price">Price: {priceRange[0]} - {priceRange[1]}</div>
        </>
    );
}

export default PriceRange;
