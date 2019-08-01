import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TestData from '../../data/SampleData';
// Need to fetch actual json in real application through axios https://api.myjson.com/bins/109m7i
import Search from './../Search/Search';
import Product from './../Product/Product';

class Layout extends Component {

    render() {
        return (
            <Container>
                <Row className="layout">
                    <Col lg="12">
                        <Search />
                        <Product data={TestData} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Layout;