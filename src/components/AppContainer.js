import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';

class AppContainer extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SearchBar />
            </div>
        )
    }
}

export default AppContainer;