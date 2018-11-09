import * as React from 'react';
import * as PropTypes from 'prop-types';

interface SearchFormProps {
  onSubmit: (e: React.FormEvent) => void;
  onPlaceChange: (value: string) => void;
  place: string;
}

const SearchForm = (props: SearchFormProps) => (
  <form className="search-form" onSubmit={e => props.onSubmit(e)}>
    <input
      className="place-input"
      type="text"
      value={props.place}
      onChange={e => props.onPlaceChange(e.target.value)}
    />
    <input className="submit-button" type="submit" value="検索" />
  </form>
);
SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
