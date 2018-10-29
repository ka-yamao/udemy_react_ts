import React from 'react';
import SearchForm from './SearchForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleNameChange(name) {
    this.setState({ name });
  }
  handlePlaceSubmit(place) {
    console.log(place);
  }

  render() {
    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
      </div>
    );
  }
}

export default App;
