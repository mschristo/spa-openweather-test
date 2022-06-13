import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import WeatherInfoModal from './WeatherInfoModal';

class AppContainer extends React.Component {
    state = {
        locations: null,
        selectedLocationWeather: null,
        showModal: false
    }

    getResults = results => {
        this.setState({
            locations: results
        });
    }

    getWeatherForLocation = async selectedResultItem => {
        const params = {
            lat: selectedResultItem.lat,
            lon: selectedResultItem.lon,
            units: 'metric',
            appId: '1300f40812c694312e8729c898e49567',
        }
        const apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(params.lat)}&lon=${encodeURIComponent(params.lon)}&units=${encodeURIComponent(params.units)}&appId=${encodeURIComponent(params.appId)}`);
        const selectedLocationWeather = await apiResponse.json();
        this.setState({
            selectedLocationWeather: selectedLocationWeather,
            showModal: true
        });
    }

    handleCloseModal = () => {
        this.setState({
            showModal: false
        });
    }

    render() {
        return (
            <div>
                <Header />
                <SearchBar
                    getResults={this.getResults}
                />
                <SearchResults
                    results={this.state.locations}
                    onResultItemClick={this.getWeatherForLocation}
                />
                <WeatherInfoModal
                    selectedLocationWeather={this.state.selectedLocationWeather}
                    show={this.state.showModal}
                    onHide={this.handleCloseModal}
                />
            </div>
        )
    }
}

export default AppContainer;