import { geocode } from '../domain/Geocoder';
import { Dispatch } from 'redux';
import { searchHotelByLocation } from '../domain/HotelRepository';

export const setPlace = (place: string) => (dispatch: Dispatch) =>
  dispatch({ type: 'CHANGE_PLACE', place });

export const setErrorMessage: any = (message: string) => (dispatch: Dispatch) =>
  dispatch({ type: 'CHANGE_ERROR_MESSAGE', message });

export const setHotels = (hotels: any) => (dispatch: Dispatch) =>
  dispatch({ type: 'CHANGE_HOTELS', hotels });

export const setSortKey = (sortKey: string) => (dispatch: Dispatch) =>
  dispatch({ type: 'CHANGE_SORT_KEY', sortKey });

export const startSearch = () => (dispatch: Dispatch<any>, getState: any) => {
  geocode(getState().place)
    .then(({ status, address, location }) => {
      switch (status) {
        case 'OK': {
          dispatch({ type: 'GEOCODE_FETCHED', address, location });
          return searchHotelByLocation(location);
        }
        case 'ZERO_RESULTS': {
          dispatch(setErrorMessage('結果が見つかりませんでした。'));
          break;
        }
        default: {
          dispatch(setErrorMessage('エラーが発生しました。'));
        }
      }
      return [];
    })
    .then(hotels => {
      dispatch(setHotels(hotels));
    })
    .catch(() => {
      dispatch(setErrorMessage('通信に失敗しました。'));
    });
};
