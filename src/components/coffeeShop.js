function Item({ item, onSell, onDelete, onDescription }) {
    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.quantity > 0 ? `Quantity: ${item.quantity}` : 'Bag empty'}</p>
            <button onClick={() => onSell(item.id)}>Sell</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
            <button onClick={() => onDescription(item.id)}>Description</button>
        </div>
    );
}

export default Item;


// function Item({ item, onSell, onDelete }) {
//     return (
//         <div>
//             <h2>{item.name}</h2>
//             <p>{item.description}</p>
//             <p>{item.quantity > 0 ? `Quantity: ${item.quantity}` : 'Bag empty'}</p>
//             <button onClick={() => onSell(item.id)}>Sell</button>
//             <button onClick={() => onDelete(item.id)}>Delete</button>
//         </div>
//     );
// }

// export default Item;