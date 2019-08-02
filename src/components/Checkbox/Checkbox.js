import React from 'react';
import { Form } from 'react-bootstrap';

const Checkbox = (props) => {
    return (
        <Form.Check
            type="checkbox"
            id="showInStockChkbox"
            label="Only show products in stock"
            onChange={props.handleChange}
            checked={props.isChecked}
        />
    )
}

export default Checkbox;