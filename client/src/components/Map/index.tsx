import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const Map: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBR0-u1bP4GnYfhuNLtKgsmb6Nc4EPlMgo',
  });

  const containerStyle = {
    width: '40rem',
    height: '30rem',
    margin: ' auto 0',
    border: '0.3rem solid var(--blueGray)',
  };

  const center = {
    lat: 58.540656589139175,
    lng: 31.271600936064768,
  };

  const markerPosition = {
    lat: 58.540656589139175,
    lng: 31.271600936064768,
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      <Marker position={markerPosition} />
    </GoogleMap>
  ) : null;
};

export default Map;
