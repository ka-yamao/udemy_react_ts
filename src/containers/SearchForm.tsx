import * as React from 'react';
import { connect } from 'react-redux';
import { setPlace, startSearch } from '../actions';

interface SearchFormProps {
  onSubmit: (e: React.FormEvent) => void;

  place: string;
  history: any;
  startSearch: any;
  setPlace: any;
}

const SearchForm = (props: any) => (
  <form
    className="search-form"
    onSubmit={e => {
      e.preventDefault();
      props.history.push(`/?place=${props.place}`);
      props.startSearch();
    }}
  >
    <input
      className="place-input"
      type="text"
      value={props.place}
      onChange={e => {
        e.preventDefault();
        props.setPlace(e.target.value);
      }}
    />
    <input className="submit-button" type="submit" value="検索" />
  </form>
);

export default connect(
  (state: any) => ({
    place: state.place,
  }),
  { setPlace, startSearch }
)(SearchForm);
