// src/MapComponent.js

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Set the initial map center and zoom level
const mapContainerStyle = {
  width: '100%',
  height: '500px',
};

 
const MapComponent = props => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCHQA_cZ3dxD-8DS5uGOV8eUTxE5K0p_pI">  
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={props.coordinates}
        zoom={18}
      > 
        <Marker position={props.coordinates} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
