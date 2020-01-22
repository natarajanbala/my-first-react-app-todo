import React, { useState } from "react";

function TodoItems(props) {
    return (
        <div>
            <form>
                <ul>
                    {
                        props &&
                        props.item.length > 0 &&
                        props.item.map((item) =>
                            <li key={item.id}>
                                <input 
                                    type="checkbox" 
                                    name={item.id + '_id'} 
                                    checked={item.status === 'completed'} 
                                    onChange={(event) => {props.statusChange(event, item)}} 
                                />
                                <label htmlFor={item.id+'_id'}>{item.text}</label>
                                <a 
                                    href="#"
                                    onClick={(event) => {props.deleteTodo(event, item)}} 
                                >
                                    Delete
                                </a>
                            </li>
                        )
                    }
                </ul>
            </form>
        </div>
    )
}

export default TodoItems