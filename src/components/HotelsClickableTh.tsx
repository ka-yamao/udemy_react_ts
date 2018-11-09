import React from 'react';
import PropTypes from 'prop-types';

const HotelsClickableTh = ({ lable, sortKey, isSelected, onSort }) => (
  <th className="hotel-clickable-th" onClick={() => onSort(sortKey)}>
    {lable}
    {isSelected ? '▲' : ''}
  </th>
);

HotelsClickableTh.propTypes = {
  lable: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default HotelsClickableTh;
