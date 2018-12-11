import * as React from 'react';
import { connect } from 'react-redux';
import { setSortKey } from '../actions/';

type ThProps = {
  lable: string;
  sortKey: string;
  isSelected: boolean;
  setSortKey: Function;
};

const HotelsClickableTh: React.SFC<ThProps> = prpps => (
  <th
    className="hotel-clickable-th"
    onClick={() => prpps.setSortKey(prpps.sortKey)}
  >
    {prpps.lable}
    {prpps.isSelected ? '▲' : ''}
  </th>
);

export default connect(
  (state: any, ownProps: any) => ({
    isSelected: ownProps.sortKey === state.sortKey,
  }),
  {
    setSortKey,
  }
)(HotelsClickableTh);
