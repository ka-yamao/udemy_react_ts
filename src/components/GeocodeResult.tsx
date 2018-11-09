import * as React from 'react';
import * as PropTypes from 'prop-types';

interface GeoLocation {
  lat: number;
  lng: number;
}
interface GeoResult {
  address: string;
  location: GeoLocation;
}

const GeocodeResulet = ({ address, location }: GeoResult) => (
  <ul className="geocode-result">
    <li>
      住所：
      {address}
    </li>
    <li>
      緯度：
      {location.lat}
    </li>
    <li>
      軽度：
      {location.lng}
    </li>
  </ul>
);

GeocodeResulet.propTypes = {
  address: PropTypes.string,
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default GeocodeResulet;
