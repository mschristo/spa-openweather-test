import React from 'react';
import ResultItem from './ResultItem';
import ListGroup from 'react-bootstrap/ListGroup';

class SearchResults extends React.Component {
    render() {
        const locations = this.props.results;

        if (locations === null) {
            return;
        }

        if (locations.length === 0) {
            return (
                <div>
                    No locations found...
                </div>
            )
        }

        return (
            <>
                <h4>Results:</h4>
                <ListGroup as="ul">
                    {this.props.results.map((location, index) => (
                        <ResultItem
                            key={index}
                            location={location}
                        />
                    ))}
                </ListGroup>
            </>

        );
    }
}

export default SearchResults;
