import React from 'react';
import Wave from 'react-wavify';

function Waving(){
    return (
        <Wave fill="url(#gradient)"
                style={{display: 'flex'}}
                options={{
                    height: 60,
                    aplitude: 30,
                    speed: 0.4,
                    points: 3
                }}>
            <defs>
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="20%"  stopColor="#FCCA6F" />
                    <stop offset="98%" stopColor="#FD5D5B" />
                </linearGradient>
            </defs>
        </Wave>
    )
}

export default Waving