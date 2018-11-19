import * as Rakuten from '../lib/Rakuten';
import * as geolib from 'geolib';
import { IHotel } from '../components/HotelsTable';

const RAKUTEN_APP_ID: string = process.env.RAKUTEN_APP_ID || '';

type paramType = {
  applicationId: string;
  datumType: number;
  latitude: number;
  longitude: number;
};

type Props = {
  location: {
    lat: number;
    lng: number;
  };
};

export const searchHotelByLocation = (props: Props) => {
  console.log(props);
  const params: paramType = {
    applicationId: RAKUTEN_APP_ID,
    datumType: 1,
    latitude: props.location.lat,
    longitude: props.location.lng,
  };

  return Rakuten.default.Travel.default
    .simpleHotelSearch(params)
    .then((result: any) =>
      result.data.hotels.map(
        (hotel: any): IHotel => {
          const basicInfo = hotel.hotel[0].hotelBasicInfo;
          const distance = geolib.getDistance(
            {
              latitude: props.location.lat,
              longitude: props.location.lng,
            },
            {
              latitude: basicInfo.latitude,
              longitude: basicInfo.longitude,
            }
          );
          return {
            id: basicInfo.hotelNo,
            name: basicInfo.hotelName,
            url: basicInfo.hotelInformationUrl,
            thumbUrl: basicInfo.hotelThumbnailUrl,
            price: basicInfo.hotelMinCharge,
            reviewAverage: basicInfo.reviewAverage,
            reviewCount: basicInfo.reviewCount,
            distance,
          };
        }
      )
    );
};
