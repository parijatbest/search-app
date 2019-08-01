import React from 'react';
import { Table } from 'react-bootstrap';

const Product = (props) => {
    console.log(props.data);
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan="2" className="category">Sporting Goods</td>
                </tr>
                <tr>
                    <td>Football</td>
                    <td>$49.99</td>
                </tr>
                <tr>
                    <td>Baseball</td>
                    <td>$9.99</td>
                </tr>
                <tr>
                    <td className="out-of-stock">Basketball</td>
                    <td>$29.99</td>
                </tr>
                <tr>
                    <td colSpan="2" className="category">Electronics</td>
                </tr>
                <tr>
                    <td>iPod Touch</td>
                    <td>$99.99</td>
                </tr>
                <tr>
                    <td className="out-of-stock">iPhone 5</td>
                    <td>$399.99</td>
                </tr>
                <tr>
                    <td>Nexus 7</td>
                    <td>$199.99</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Product;