import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";
import AuthService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
    const navigate = useNavigate();
    const onSubmit = data => {
        AuthService.register(data)
            .then(() => navigate("/login"));
    };

    return (
        <Col
            md={6} lg={3}
            className='mt-3'
        >
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group
                    className='mb-3'
                    controlId="formFirstName"
                >
                    <Form.Label>Vardas</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Įveskite savo vardą'
                        {...register("firstName")}
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
                        {...register("lastName")}
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
                        {...register("email")}
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
                        {...register("password")}
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