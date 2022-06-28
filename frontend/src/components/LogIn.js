import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";
import AuthService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
    const { register, handleSubmit } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
    const navigate = useNavigate();
    const [render, setRender] = useState(false);

    const onSubmit = data => {
        AuthService.login(data.email, data.password)
            .then(() => {
                navigate("/profile");
                setRender(!render);
            });
    };

    return (
        <Col
            md={6} lg={3}
            className='mt-3'
        >
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                >
                    <Form.Label>Jūsų el. paštas</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="El. paštas"
                        {...register("email")}
                    />
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
                    Prisijungti
                </Button>
            </Form>
        </Col>
    );
}
