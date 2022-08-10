import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from './EventItem.module.css';

const EventItem = (props) => {
    return (
        <div className={`${styles.eventItem}`}>
            <Container>
                <Row>
                    <div className={`${styles.eventTitle} ${styles.elementMargin}`}>
                        <h2>{props.event.title}</h2>
                        <span className={`${styles.creationDate}`}>от {props.event.createdAt}</span>
                    </div>
                </Row>
                <Row>
                    <div className={`${styles.elementMargin} ${styles.eventStats}`}>
                        <Col>
                            <div>
                                <span className={`${styles.statTitle}`}>Начало: </span>
                                <span className={`${styles.statValue}`}>{props.event.beginning_date}</span>
                            </div>
                            <div>
                                <span className={`${styles.statTitle}`}>Конец: </span>
                                <span className={`${styles.statValue}`}>{props.event.ending_date}</span>
                            </div>
                        </Col>
                        <Col xs={8}>
                            <div>
                                <span className={`${styles.statTitle}`}>Тип: </span>
                                <span className={`${styles.statValue}`}>{props.event.type}</span>
                            </div>
                            <div>
                                <span className={`${styles.statTitle}`}>Курс: </span>
                                <span className={`${styles.statValue}`}>{props.event.year}</span>
                            </div>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <p className={`${styles.elementMargin} ${styles.description}`}>
                        {props.event.description}
                    </p>
                </Row>
                <Row>
                    <div className={`${styles.buttons} ${styles.elementMargin}`}>
                        <a href='#' className={`${styles.redactButton} ${styles.button}`}>
                            Редактировать
                        </a>
                        <a href='#' className={`${styles.deleteButton} ${styles.button}`}>
                            Удалить
                        </a>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default EventItem;