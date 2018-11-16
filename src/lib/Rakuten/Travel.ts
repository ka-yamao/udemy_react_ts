import axios from 'axios';

const URL_BASE = 'https://app.rakuten.co.jp/services/api/Travel/';
const SIMPLE_HOTEL_SEARCH_ENDPOINT = `${URL_BASE}SimpleHotelSearch/20170426/`;

type paramType = {
  applicationId: string;
  datumType: number;
  latitude: number;
  longitude: number;
};

export default {
  simpleHotelSearch: (params: paramType) =>
    axios.get(SIMPLE_HOTEL_SEARCH_ENDPOINT, { params }),
};
