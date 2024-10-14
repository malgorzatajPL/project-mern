import React, { useEffect, useRef } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '500px',
};

const MapComponent = (props) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;

      const marker = new window.google.maps.marker.AdvancedMarkerElement({
        position: props.coordinates,
        map: map,
        title: 'Marker Title', 
      });

      markerRef.current = marker;
    }
  }, [props.coordinates]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCHQA_cZ3dxD-8DS5uGOV8eUTxE5K0p_pI">
      <GoogleMap
        onLoad={(map) => {
          mapRef.current = map;
        }}
        mapContainerStyle={mapContainerStyle}
        center={props.coordinates}
        zoom={18}
      >
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
