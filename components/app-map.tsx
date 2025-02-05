'use client'
import * as React from 'react';
import Map from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function AppMap() {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
    return (
        <Map
            mapboxAccessToken={token}
            initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14
            }}
            style={{ width: 600, height: 400 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        />
    );
}