import React from 'react';
import Modal from 'react-bootstrap/Modal';

class WeatherInfoModal extends React.Component {

    render() {
        const selectedLocationWeather = this.props.selectedLocationWeather;
        if (selectedLocationWeather === null) {
            return;
        }
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Weather information for: {selectedLocationWeather.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Current weather condition:</h5>
                    <p className="text-muted">{selectedLocationWeather.weather[0].main}</p>
                    <h5>Detailed:</h5>
                    <ul>
                        <li>
                            Temperature: {selectedLocationWeather.main.temp}
                            <span className="text-muted ms-1">&#8451;</span>
                            <ul>
                                <li>
                                    Max: {selectedLocationWeather.main.temp_max}
                                    <span className="text-muted ms-1">&#8451;</span>
                                </li>
                                <li>
                                    Min: {selectedLocationWeather.main.temp_min}
                                    <span className="text-muted ms-1">&#8451;</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Pressure: {selectedLocationWeather.main.pressure}
                            <span className="text-muted ms-1">hPa</span>
                        </li>
                        <li>
                            Humidity: {selectedLocationWeather.main.humidity}
                            <span className="text-muted ms-1">%</span>
                        </li>
                        <li>
                            Wind: {selectedLocationWeather.wind.speed}
                            <span className="text-muted ms-1">meter/sec</span>
                        </li>
                        <li>
                            Cloudiness: {selectedLocationWeather.clouds.all}
                            <span className="text-muted ms-1">%</span>
                        </li>
                    </ul>
                </Modal.Body>
            </Modal>
        );
    }
}

export default WeatherInfoModal;
