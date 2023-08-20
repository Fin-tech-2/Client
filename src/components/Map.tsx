import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "500px",
  height: "400px",
};

const center = {
  lat: 37.546993,
  lng: 126.950141,
};

interface ICenter {
  lat: number;
  lng: number;
}

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBlviBcDqrPcymf7tTV0C-zERv-hK0EmSw",
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<ICenter | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center as ICenter);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        position={{ lat: 37.546993, lng: 126.950141 }}
        icon={{
          url: "/assets/Logo.svg",
          scaledSize: new window.google.maps.Size(32, 32),
        }}
      />
    </GoogleMap>
  ) : null;
}

export default React.memo(MyComponent);
