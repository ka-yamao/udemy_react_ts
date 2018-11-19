import * as React from 'react';

type Props = {
  lable: string;
  sortKey: string;
  isSelected: boolean;
  onSort: Function;
};

const HotelsClickableTh: React.SFC<Props> = ({
  lable,
  sortKey,
  isSelected,
  onSort,
}) => (
  <th className="hotel-clickable-th" onClick={() => onSort(sortKey)}>
    {lable}
    {isSelected ? '▲' : ''}
  </th>
);

export default HotelsClickableTh;
