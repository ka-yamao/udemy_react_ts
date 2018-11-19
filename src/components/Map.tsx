import * as React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

export interface Loco {
  location: LatLon;
}

type LatLon = {
  lat: number;
  lng: number;
};
interface LatLngLiteralMark {
  position: LatLon;
}

export const googleMapURL =
  'https://maps.googleapis.com/maps/api/js?key=' +
  process.env.GOOGLE_MAP_API_KEY;

const InnerMap = withScriptjs(
  withGoogleMap((location: Loco) => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={location.location}
      center={location.location}
    >
      <Marker position={location.location} />
    </GoogleMap>
  ))
);

const Map = (loco: Loco) => (
  <InnerMap
    loadingElement={<div />}
    containerElement={<div />}
    location={loco.location}
    googleMapURL={googleMapURL}
    mapElement={<div className="map" />}
  />
);

export default Map;
