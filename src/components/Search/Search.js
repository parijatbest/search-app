import React from 'react';
import { Form } from 'react-bootstrap';
import Checkbox from '../Checkbox/Checkbox'

const Search = (props) => {
    return (
        <Form>
            <Form.Control
                size="lg"
                type="text"
                placeholder="Search Product"
                onChange={props.handleSearch} />

            <Checkbox 
                handleChange={props.handleChange} 
                isChecked={props.isChecked} />
        </Form>
    )
}

export default Search;