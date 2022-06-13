import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class ResultItem extends React.Component {

    onClick = () => {
        // @TODO ...
    }

    render() {
        return (
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                action 
                onClick={this.onClick}
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{this.props.location.name}</div>
                    {this.props.location.country} - {this.props.location.state}
                </div>

            </ListGroup.Item>

        );
    }
}

export default ResultItem;
