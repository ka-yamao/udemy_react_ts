import * as React from 'react';

import { IHotel } from './HotelsTable';

interface OwnProps {
  hotel: IHotel;
}
type Props = OwnProps;

const HotelRow: React.SFC<Props> = props => (
  <tr>
    <td>
      <img src={props.hotel.thumbUrl} alt={props.hotel.name} />
    </td>
    <td>
      <a href={props.hotel.url} target="_blank">
        {props.hotel.name}
      </a>
    </td>
    <td>{props.hotel.price ? `${props.hotel.price}円` : '空室なし'}</td>
    <td>{props.hotel.reviewAverage}</td>
    <td>{props.hotel.reviewCount}</td>
    <td>{props.hotel.distance}</td>
  </tr>
);
export default HotelRow;
