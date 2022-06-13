import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class AppContainer extends React.Component {
    state = {
        locations: null
    }

    getResults = results => {
        this.setState({
            locations: results
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
                />
            </div>
        )
    }
}

export default AppContainer;