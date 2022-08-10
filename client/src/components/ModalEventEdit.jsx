import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import styles from "../pages/Events/Events.module.css";
import axios from "axios";

const baseURL = "http://localhost:5000/api/events/" //createNew

const ModalEventEdit = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [eventFormValue, setEventFormValue] = useState({
        title: "",
        type: "",
        year: "",
        beginning_date: "",
        ending_date: "",
        description: "",
        documents_deadline: null,
        documents_info: null
    });

    const handleClose = () => setShow(false);
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    const handleSubmit = (event) => {
        axios.post(baseURL, {...eventFormValue})
        .catch((error) => {
            console.log(error);
        });

        event.preventDefault();
    }

    const handleChange = (event) => {
        setEventFormValue({
            ...eventFormValue,
            [event.target.name]: event.target.value
        });
    }

    const [validated, setValidated] = useState(false);

    const checkValidation = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <Button key={0} className={`me-2 mb-2 ${styles.addButton}`} onClick={() => handleShow('md-down')}>
                    <div className={`${styles.plus}`}></div>
                    Создать
            </Button>
            <Modal size="lg" show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Создать новое мероприятие проведения практики</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="createForm.ControlTitle">
                            <Form.Label>Название</Form.Label>
                            <Form.Control required autoFocus onChange={handleChange} name="title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createForm.ControlType">
                            <Form.Label>Тип</Form.Label>
                            <Form.Select aria-label="Type" onChange={handleChange} name="type">
                                <option>Выберите тип практики</option>
                                <option value="Учебная">Учебная</option>
                                <option value="Производственная">Производственная</option>
                                <option value="Преддипломная">Преддипломная</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createForm.ControlYear">
                            <Form.Label>Курс</Form.Label>
                            <Form.Select aria-label="Year" onChange={handleChange} name="year">
                                <option>Выберите курс</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createForm.ControlBeginningDate">
                            <Form.Label>Дата начала</Form.Label>
                            <Form.Control required type="date" onChange={handleChange} name="beginning_date" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createForm.ControlEndingDate">
                            <Form.Label>Дата окончания</Form.Label>
                            <Form.Control required type="date" onChange={handleChange} name="ending_date" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createForm.ControlDescription">
                            <Form.Label>Описание</Form.Label>
                            <Form.Control required as="textarea" rows={3} onChange={handleChange} name="description" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createForm.ControlDocumentsDeadline">
                            <Form.Label>Дата сдачи документов (необязательно)</Form.Label>
                            <Form.Control type="date" onChange={handleChange} name="documents_deadline" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createForm.ControlDocumentsInfo">
                            <Form.Label>Информация о сдаче документов (необязательно)</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={handleChange} name="documents_info" />
                        </Form.Group>
                        <Button type="submit" variant="primary">
                            Создать
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEventEdit;