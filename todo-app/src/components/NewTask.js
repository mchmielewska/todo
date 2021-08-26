import React from 'react';

export const NewTask = ({ addTodo }) => {
    const handleAdd = e => {
        e.preventDefault();
        addTodo({
        });
        e.target.reset();
    }

    return (
        <form onSubmit={handleAdd}>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}