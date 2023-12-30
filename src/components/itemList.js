import React from 'react';
import Item from './item.js';
import OptionList from './optionList.js';

function ItemList({ items, onSell, onDelete, onUpdate, onDescribe, selectItem, addItem }) {
    return (
        <div className="App">
            <h1></h1>
            <OptionList onAddItem={addItem} />
            {items.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    onSell={onSell}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                    onDescribe={onDescribe}
                    selectItem={selectItem}
                    addItem={addItem}
                />
            ))}
        </div>
    );
}

export default ItemList;

