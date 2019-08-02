import React from 'react';
import { Table } from 'react-bootstrap';

const Product = (props) => {

    /**
     * This is a helper function to create product row with category
     * @param {*} category 
     * @param {*} products 
     */
    const getProductView = (category, products) => {
        const items = [];
        products.forEach((product, i) => {
            items.push(
                <tr key={product.name + i} className={(props.isChecked && !product.stocked) ? "hide" : "show"}>
                    <td 
                        className={ !product.stocked ? "out-of-stock" : null }>
                        {product.name}
                    </td>
                    <td>{product.price}</td>
                </tr>
            )
        })

        return (
            <React.Fragment key={category}>
                <tr>
                    <td colSpan="2" className="category">{category}</td>
                </tr>
                {items}
            </React.Fragment>
        );
    }

    /**
     * Helper function to create view for each category
     */
    const getBodyView = () => {
        const bodyView = [];
        props.data.forEach((obj) => {
            bodyView.push(getProductView(obj.category, obj.products))
        });

        return bodyView;
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            { getBodyView() }
            </tbody>
        </Table>
    )
}

export default Product;