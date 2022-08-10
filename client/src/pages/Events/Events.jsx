import React, {useEffect, useState} from 'react';
import styles from './Events.module.css';
import {Container, Row} from "react-bootstrap";
import EventItem from "../../components/EventItem";
import {useSelector} from "react-redux";
import {selectEvent} from "../../redux/reducers/eventsReducer";
import axios from "axios";
import ModalEventEdit from "../../components/ModalEventEdit";

const eventsURL = 'http://localhost:5000/api/events/';

const Events = () => {
    let initialEvents = useSelector(selectEvent);
    const [events, setEvents] = useState(initialEvents);

    useEffect(() => {
        axios.get(eventsURL).then((response) => {
            setEvents(response.data);
        });
    }, []);

    return (
        <div>
            <Container>
                <div className={`${styles.pageWidth}`}>
                    <Row>
                        <div className={`${styles.top}`}>
                            <h1>Мероприятия</h1>
                            <ModalEventEdit />
                        </div>
                    </Row>
                    <Row>
                        {events ? events.map(event => <EventItem event={event} />) :
                            <h2>Пока мероприятий нет</h2>}
                        {/*events.map(event => <EventItem event={event} />)*/}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Events;