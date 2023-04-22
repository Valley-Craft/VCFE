import React from 'react';
import Iframe from 'react-iframe'

import './style.css'

const Map = () => {
    return <div>
        <Iframe url="http://137.74.7.233:8080/"
                id=""
                className="map"
                display="block"
                position="relative"/>
    </div>
};

export default Map;