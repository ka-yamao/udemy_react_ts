import * as React from 'react';

type Props = {
  lable: string;
  sortKey: string;
  isSelected: boolean;
  onSort: Function;
};

const HotelsClickableTh: React.SFC<any> = prpps => (
  <th
    className="hotel-clickable-th"
    onClick={() => prpps.onSort(prpps.sortKey)}
  >
    {prpps.lable}
    {prpps.isSelected ? '▲' : ''}
  </th>
);

export default HotelsClickableTh;
