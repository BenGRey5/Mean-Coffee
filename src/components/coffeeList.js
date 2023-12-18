import React from 'react';
import Item from './coffeeShop.js'

function ItemList({ items, onSell, onDelete, onUpdate, onDescription }) {
    return (
        <div>
            {items.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    onSell={() => onSell(item.id)}
                    onDelete={() => onDelete(item.id)}
                    onUpdate={(updatedItem) => onUpdate(item.id, updatedItem)}
                    onDescription={() => onDescription(item.id)}
                />
            ))}
        </div>
    );
}

export default ItemList;

// import React from 'react';
// import Item from './coffeeShop.js'

// function ItemList({ items, onSell, onDelete, onUpdate }) {
//     return (
//         <div>
//             {items.map(item => (
//                 <Item
//                     key={item.id}
//                     item={item}
//                     onSell={() => onSell(item.id)}
//                     onDelete={() => onDelete(item.id)}
//                     onUpdate={(updatedItem) => onUpdate(item.id, updatedItem)}
//                 />
//             ))}
//         </div>
//     );
// }

// export default ItemList;