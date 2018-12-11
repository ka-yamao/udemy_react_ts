import React from 'react';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

export const googleMapURL =
  'https://maps.googleapis.com/maps/api/js?key=' +
  process.env.GOOGLE_MAP_API_KEY;

const InnerMap = withScriptjs(
  withGoogleMap(({ location, marker }) => (
    <GoogleMap defaultZoom={12} defaultCenter={location} center={location}>
      <Marker {...marker} />
    </GoogleMap>
  ))
);

const Map = ({ location }) => (
  <InnerMap
    loadingElement={<div />}
    containerElement={<div />}
    mapElement={<div className="map" />}
    location={location}
    googleMapURL={googleMapURL}
    marker={{ position: location }}
  />
);

Map.propTypes = {
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Map;
