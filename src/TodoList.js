import React, { useState } from 'react';
import TodoItems from './TodoItems';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';

import Button from 'react-bootstrap/Button';

function TodoList() {
    const [allItems, setAllItems] = useState([]);
    const [addItem, setAddItem] = useState("");

    const handleAddTodo = (event) => {
        setAddItem(event.target.value);
    }

    const saveTodo = (event) => {
        event.preventDefault();
        setAllItems([
            ...allItems,
            {
                id: Math.ceil(Math.random() * 100),
                text: addItem,
                status: 'new'
            }
        ]);
        setAddItem("");
    }

    const handleStatusChange = (event, sItem) => {
        console.log('sc - ', event.target.checked, sItem);
        const index = allItems.findIndex((item) => item.id === sItem.id);
        console.log('index - ', index);
        if (index >= 0) {
            setAllItems([
                ...allItems.slice(0, index),
                Object.assign({}, allItems[index], {
                    id: sItem.id,
                    text: sItem.text,
                    status: event.target.checked ? 'completed' : 'new'
                }),
                ...allItems.slice(index + 1)
            ])

        }
    }

    const handleTodoDeletion = (event, sItem) => {
        event.preventDefault();
        const index = allItems.findIndex((item) => item.id === sItem.id);
        if (index >= 0) {
            setAllItems([
                ...allItems.slice(0, index),
                ...allItems.slice(index + 1)
            ])
        }
    }

    return (
        <main>
            <form onSubmit={saveTodo}>
                <input placeholder="Add a to-do!" type='text' name='add-todo' value={addItem} onChange={handleAddTodo} />
                <Button type="submit" variant="primary" className="mr-1">
                    Add
                </Button>
            </form>
            <TodoItems item={allItems} statusChange={handleStatusChange} deleteTodo={handleTodoDeletion} />
        </main>
    )
}
export default TodoList