import React from 'react';

function ItemDescriptionForm({ item, onReturn }) {
    return (
        <div>
            <h2>{item.name} Description</h2>
            <p>{item.description}</p>
            <button onClick={onReturn}>Return</button>
        </div>
    );
}

export default ItemDescriptionForm;
