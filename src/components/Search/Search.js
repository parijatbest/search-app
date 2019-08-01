import React from 'react';
import { Form } from 'react-bootstrap';
import Checkbox from '../Checkbox/Checkbox'

const Search = () => {
    return (
        <Form>
            <Form.Control
                size="lg"
                type="text"
                placeholder="Search Product" />

            <Checkbox />
        </Form>
    )
}

export default Search;