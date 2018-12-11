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
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={props.positio}
      center={props.position}
    >
      <Marker {...props.marker} />
    </GoogleMap>
  ))
);

const Map = ({ lat, lng }) => {
  const position = { lat, lng };
  return (
    <InnerMap
      loadingElement={<div />}
      containerElement={<div />}
      mapElement={<div className="map" />}
      position={position}
      googleMapURL={googleMapURL}
      marker={{ position }}
    />
  );
};

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

Map.defaultProps = {
  lat: 35.6585805,
  lng: 139.7454329,
};

export default Map;
