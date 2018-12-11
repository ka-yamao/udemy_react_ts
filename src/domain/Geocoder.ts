import axios from 'axios';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

export const geocode = (place: string) =>
  axios
    .get(GEOCODE_ENDPOINT, {
      params: {
        address: place,
        key: process.env.GOOGLE_MAP_API_KEY,
      },
    })
    .then(results => {
      const data = results.data;
      const status = data.status;
      const result = data.results[0];

      // 結果がない場合はステータスだけ返す
      if (typeof result === 'undefined') {
        return { status };
      }

      const address = result.formatted_address;
      const location = result.geometry.location;

      return { status, address, location };
    });

export const reverseGeocode = () => {};