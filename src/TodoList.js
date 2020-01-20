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
        if(index >= 0) {
            setAllItems([
                ...allItems.slice(0, index),
                Object.assign({}, allItems[index], {
                    id: sItem.id,
                    text: sItem.text,
                    status: event.target.checked ? 'completed': 'new'
                }),
                ...allItems.slice(index+1)
            ])

        }
    }

    return (
        <main>
            <form onSubmit={saveTodo}>
                <label htmlFor='add-todo'>Add todo:</label>
                <input type='text' name='add-todo' value={addItem} onChange={handleAddTodo} />
                <button>Add</button>
            </form>
            <TodoItems item={allItems} statusChange={handleStatusChange}/>
        </main>
    )
}
export default TodoList