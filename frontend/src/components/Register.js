import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function Register() {
    return (
        <Col
            md={6} lg={3}
            className='mt-3'
        >
            <Form>
                <Form.Group
                    className='mb-3'
                    controlId="formFirstName"
                >
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Enter first name'
                    />
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        </Col>
    );
}