import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { LatLngLiteral } from 'googlemaps';

type Hoge = LatLngLiteral;

const InnerMap = withGoogleMap((location: Hoge, marker: { position: Hoge }) => (
  <GoogleMap defaultZoom={12} defaultCenter={location} center={location}>
    <Marker {...marker} />
  </GoogleMap>
));

const Map = (location: { lat: number; lng: number }) => (
  <InnerMap
    containerElement={<div />}
    mapElement={<div className="map" />}
    location={location}
    marker={{ position: location }}
  />
);
Map.propTypes = {
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};
export default Map;
