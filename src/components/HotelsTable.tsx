import * as React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import * as _ from 'lodash';
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
};

const HotelsTable: React.SFC<Props> = ({ hotels }) => (
  <table>
    <tbody>
      <tr>
        <th>画像</th>
        <th>ホテル名</th>
        <HotelsClickableTh label="値段" sortKey="price" />
        <HotelsClickableTh label="レビュー" sortKey="reviewAverage" />
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

const sortedHotels = (hotels: any[], sortKey: string) =>
  _.sortBy(hotels, (h: any) => h[sortKey]);

export default connect((state: any) => ({
  hotels: sortedHotels(state.hotels, state.sortKey),
}))(HotelsTable);
