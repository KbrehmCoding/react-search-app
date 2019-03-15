import React, { Component } from 'react';
import { Card, Col } from 'react-materialize';


class SearchCard extends Component {
    render() {
        return (
            <>
                <Col m={6} s={12}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={<button>Save</button>}>
                        I am a very simple card.
                    </Card>
                </Col>
            </>
        );
    }
}

export default SearchCard;
