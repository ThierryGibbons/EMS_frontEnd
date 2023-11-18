import { useMemo, useCallback, useRef, useState } from "react";
import { GoogleMap } from "@react-google-maps/api";

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

export default function Map() {
  const mapRef = useRef<GoogleMap>();
  const center = useMemo<LatLngLiteral>(() => ({ lat: -43, lng: 171 }), []);
  const options = useMemo<MapOptions>(
    () => ({
      mapId: "c36e4e976628b519",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  return (
    <>
      <div className="map">
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
        />
        <h1>hello world</h1>
      </div>
    </>
  );
}
