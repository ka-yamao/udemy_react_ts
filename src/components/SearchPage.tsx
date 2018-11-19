import * as React from 'react';
import * as _ from 'lodash';
import * as queryString from 'query-string';

import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';
import Map from './Map';
import HotelsTable from './HotelsTable';
import { geocode } from '../domain/Geocoder';
import { searchHotelByLocation } from '../domain/HotelRepository';

const sortedHotels: any = (hotels: any[], sort: string) =>
  _.sortBy(hotels, h => h[sort]);

interface Props {
  name: string;
  location: {
    lat: number;
    lng: number;
    search: string;
  };
  history: any;
}
interface State {
  address: string;
  place: string;
  location: {
    lat: number;
    lng: number;
  };
  sortKey: string;
  hotels: [];
}

class SearchPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      address: '',
      location: {
        lat: 35.6585805,
        lng: 139.7454329,
      },
      sortKey: 'price',
      place: this.getPlaceParam() || '東京タワー',
      hotels: [],
    };
  }

  componentDidMount() {
    const place = this.getPlaceParam();

    if (place) {
      this.startSearch();
    }
  }

  getPlaceParam(): string {
    const params = queryString.parse(this.props.location.search);
    const place: string = typeof params.place === 'string' ? params.place : '';
    if (place && place.length > 0) {
      return place;
    }
    return '';
  }

  setErrorMessage(message: string) {
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0,
      },
    });
  }

  handlePlaceChange(place: string) {
    this.setState({ place });
  }

  handlePlaceSubmit(e: React.FormEvent) {
    e.preventDefault();
    this.props.history.push(`/?place=${this.state.place}`);
    this.startSearch();
  }
  handleSortKeyChange(sortKey: string) {
    this.setState({
      sortKey,
      hotels: sortedHotels(this.state.hotels, sortKey),
    });
  }
  startSearch() {
    geocode(this.state.place)
      .then(({ status, address, location }) => {
        switch (status) {
          case 'OK': {
            this.setState({
              address,
              location,
            });

            return searchHotelByLocation({ location });
          }
          case 'ZERO_RESULT': {
            this.setErrorMessage('結果が見つかりませんでした。');
            break;
          }
          default: {
            this.setErrorMessage('エラーが発生しました。');
          }
        }
        return [];
      })
      .then(hotels => {
        this.setState({ hotels: sortedHotels(hotels, this.state.sortKey) });
      })
      .catch(() => {
        this.setErrorMessage('通信に失敗しました。');
      });
  }
  render() {
    return (
      <div className="search-page">
        <h1 className="app-title">ホテル検索</h1>
        <SearchForm
          place={this.state.place}
          onPlaceChange={place => this.handlePlaceChange(place)}
          onSubmit={(e: React.FormEvent) => this.handlePlaceSubmit(e)}
        />
        <div className="result-area">
          <Map location={this.state.location} />
          <div className="result-right">
            <GeocodeResult
              address={this.state.address}
              location={this.state.location}
            />
            <h2>ホテル検索結果</h2>
            <HotelsTable
              hotels={this.state.hotels}
              sortKey={this.state.sortKey}
              onSort={(sortKey: string) => this.handleSortKeyChange(sortKey)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
