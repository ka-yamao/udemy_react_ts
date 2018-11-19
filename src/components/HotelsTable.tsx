import * as React from 'react';
import * as PropTypes from 'prop-types';
import HotelRow from './HotelRow';
import HotelsClickableTh from './HotelsClickableTh';

export interface IHotel {
  id: string;
  name: string;
  url: string;
  thumbUrl: string;
  price: number;
  reviewAverage: number;
  reviewCount: number;
  distance: number;
}

type Props = {
  hotels: IHotel[];
  sortKey: string;
  onSort: Function;
};

const HotelsTable: React.SFC<Props> = ({ hotels, sortKey, onSort }) => (
  <table>
    <tbody>
      <tr>
        <th>画像</th>
        <th>ホテル名</th>
        <HotelsClickableTh
          lable="値段"
          sortKey="price"
          isSelected={sortKey === 'price'}
          onSort={(key: string) => onSort(key)}
        />
        <HotelsClickableTh
          lable="レビュー"
          sortKey="reviewAverage"
          isSelected={sortKey === 'reviewAverage'}
          onSort={(key: string) => onSort(key)}
        />
        <th>レビュー件数</th>
        <th>距離</th>
      </tr>
      {hotels.map(hotel => (
        <HotelRow key={hotel.id} hotel={hotel} />
      ))}
    </tbody>
  </table>
);

HotelsTable.defaultProps = {
  hotels: [],
};

export default HotelsTable;
