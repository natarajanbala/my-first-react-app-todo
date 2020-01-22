import React from "react";
import { Row, Col } from "react-bootstrap";

function TodoItems(props) {
    const todoStatus = {
        color: 'blue'
    }
    return (
        <div>
            <form>
                <ul className="list-group">
                    {
                        props &&
                        props.item.length > 0 &&
                        props.item.map((item) =>
                            <li className="list-group-item" key={item.id}>
                                <Row>
                                    <Col>
                                        <input
                                            type="checkbox"
                                            name={item.id + '_id'}
                                            checked={item.status === 'completed'}
                                            onChange={(event) => { props.statusChange(event, item) }}
                                        />
                                    </Col>
                                    <Col xs={8}>
                                        <label
                                            htmlFor={item.id + '_id'}
                                            style={todoStatus}
                                        >
                                          <strong> {item.text}</strong> 
                                        </label>
                                    </Col>
                                    <Col>
                                        <a
                                            href="#"
                                            onClick={(event) => { props.deleteTodo(event, item) }}
                                        >
                                            Delete
                                        </a>
                                    </Col>
                                </Row>

                            </li>
                        )
                    }
                </ul>
            </form>
        </div>
    )
}

export default TodoItems