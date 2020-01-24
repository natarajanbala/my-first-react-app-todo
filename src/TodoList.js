import React, { useState } from 'react';
import TodoItems from './TodoItems';

function TodoList() {
    const [allItems, setAllItems] = useState([]);
    const [addItem, setAddItem] = useState("");

    const handleAddTodo = (event) => {
        setAddItem(event.target.value);
    }

    const saveTodo = (event) => {
        event.preventDefault();
        if(addItem.trim() !== '') {
            setAllItems([
                ...allItems,
                {
                    id: Math.ceil(Math.random() * 100),
                    text: addItem,
                    status: 'new'
                }
            ]);
        }
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
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <input
                            placeholder="Add a to-do!"
                            type='text'
                            name='add-todo'
                            className="form-control mb-2"
                            value={addItem}
                            onChange={handleAddTodo} />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-2">
                            Add
                    </button>
                    </div>
                </div>
            </form>
            <TodoItems item={allItems} statusChange={handleStatusChange} deleteTodo={handleTodoDeletion} />
        </main>
    )
}
export default TodoList