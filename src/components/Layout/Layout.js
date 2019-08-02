import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TestData from '../../data/SampleData';
// Need to fetch actual json in real application through axios https://api.myjson.com/bins/109m7i
import Search from './../Search/Search';
import Product from './../Product/Product';

class Layout extends Component {

    state = {
        isChecked: false,
        data: TestData
    }

    /**
     * Function to check the checkbox state to show hide out of stock products
     */
    onCheckBoxSelect = () => {
        this.setState((pevState) => ({
            isChecked: !pevState.isChecked
        }))
    }

    /**
     * Search box query string filtering logic
     */
    onHandleSearch = (e) => {
        const filteredData = [];
        /**
         * Helper function to filter object based on the search string
         * @param {*} obj 
         */
        const filterData = (obj) => {
            return obj.name.toLowerCase().indexOf(e.target.value.toLowerCase()) === 0
        }
        /**
         * Looping through all category type products
         */
        TestData.map((objCategory) => {
            const products = objCategory.products.filter(filterData);
            if(products.length > 0) {
                filteredData.push({ ...objCategory, products: products})
            }
        })
        /**
         * Update the data in state to reflect in product components
         */
        this.setState({data: filteredData});
    }

    render() {
        return (
            <Container>
                <Row className="layout">
                    <Col lg="12">
                        <Search
                            handleSearch={this.onHandleSearch}
                            handleChange={this.onCheckBoxSelect}
                            isChecked={this.state.isChecked} />
                        <Product
                            data={this.state.data}
                            isChecked={this.state.isChecked} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Layout;