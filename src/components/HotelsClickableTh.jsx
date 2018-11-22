import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSortKey } from '../actions';

const HotelsClickableTh = props => (
  <th className="hotel-clickable-th" onClick={() => setSortKey(props.sortKey)}>
    {props.lable}
    {props.isSelected ? '▲' : ''}
  </th>
);

HotelsClickableTh.propTypes = {
  lable: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  setSortKey: PropTypes.func.isRequired,
};

export default connect(
  (state, ownProps) => ({
    isSelected: ownProps.sortKey === state.sortKey,
  }),
  {
    setSortKey,
  }
)(HotelsClickableTh);
