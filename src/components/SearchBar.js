import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FaSearch } from 'react-icons/fa';

class SearchBar extends React.Component {
    state = {
        searchTerm: ""
    };

    onChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
    }

    onSubmit = event => {
        event.preventDefault();
        if (this.state.searchTerm.trim().length === 0) {
            alert("Search term cannot be blank");
            return;
        }

        this.searchForLocations();
    }

    searchForLocations = async () => {
        const params = {
            q: this.state.searchTerm,
            appId: '1300f40812c694312e8729c898e49567',
            limit: 10
        }
        const apiResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(params.q)}&limit=${encodeURIComponent(params.limit)}&appId=${encodeURIComponent(params.appId)}`);
        const result = await apiResponse.json();
        this.props.getResults(result);
    }

    render() {
        return (
            <Form className="location-form" onSubmit={this.onSubmit}>
                <InputGroup className="mb-3">
                    <FormControl
                        onChange={this.onChange}
                        placeholder="Search for a location..."
                    />
                    <Button type="submit">
                        <FaSearch />
                    </Button>
                </InputGroup>
            </Form>
        );
    }
}

export default SearchBar;
