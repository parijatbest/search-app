import React from 'react';
import { Form } from 'react-bootstrap';

const Checkbox = () => {
    return (
        <Form.Check
            type="checkbox"
            id="showInStockChkbox"
            label="Only show products in stock"
        />
    )
}

export default Checkbox;