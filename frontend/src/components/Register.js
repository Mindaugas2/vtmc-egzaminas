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
                    <Form.Label>Vardas</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Įveskite savo vardą'
                    />
                </Form.Group>

                <Form.Group
                    className='mb-3'
                    controlId="formLastName"
                >
                    <Form.Label>Pavardė</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Įveskite savo pavardę'
                    />
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                >
                    <Form.Label>El. paštas</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Įveskite savo el. pašto adresą"
                    />
                    <Form.Text className="text-muted">
                        Niekada su niekuo nesidalinsime jūsų el. pašto adresu.
                    </Form.Text>
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                >
                    <Form.Label>Slaptažodis</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Įveskite slaptažodį"
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                >
                    Pateikti
                </Button>
            </Form>
        </Col>
    );
}