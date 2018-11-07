import React from 'react';

import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';
import Map from './Map';
import HotelsTable from './HotelsTable';
import { geocode } from '../domain/Geocoder';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 35.6585805,
        lng: 139.7454329,
      },
      hotels: [
        { id: '100', name: 'ホテルオークラ', url: 'https://www.google.co.jp' },
        { id: '110', name: 'アパホテル', url: 'https://www.yahoo.co.jp' },
      ],
    };
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0,
      },
    });
  }

  handleNameChange(name) {
    this.setState({ name });
  }
  handlePlaceSubmit(place) {
    geocode(place)
      .then(({ status, address, location }) => {
        switch (status) {
          case 'OK': {
            this.setState({
              address,
              location,
            });
            break;
          }
          case 'ZERO_RESULT': {
            this.setErrorMessage('結果が見つかりませんでした。');
            break;
          }
          default: {
            this.setErrorMessage('エラーが発生しました。');
          }
        }
      })
      .catch(() => {
        this.setErrorMessage('通信に失敗しました。');
      });
  }

  render() {
    return (
      <div className="app">
        <h1 className="app-title">ホテル検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <div className="result-area">
          <Map location={this.state.location} />
          <div className="result-right">
            <GeocodeResult
              address={this.state.address}
              location={this.state.location}
            />
            <h2>ホテル検索結果</h2>
            <HotelsTable hotels={this.state.hotels} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
