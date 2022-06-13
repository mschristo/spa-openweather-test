import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FaSearch } from 'react-icons/fa';

class SearchBar extends React.Component {

    render() {
        return (
            <Form className="location-form">
                <InputGroup className="mb-3">
                    <FormControl
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
