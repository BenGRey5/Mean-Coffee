import React, { useState } from "react";
import ItemList from "./components/coffeeList.js";
import OptionList from "./components/userOptions.js";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Arabica Light Roast", description: "Imported from Nicaragua $9.99 per pound", quantity: 130 },
    { id: 2, name: "Robusta Medium Roast", description: "Imported from Brazil $10.99 per pound", quantity: 130 },
    { id: 3, name: "Liberica Light Roast", description: "Imported from Philippines $8.99 per pound", quantity: 130 },
    { id: 4, name: "Excelsa Dark Roast", description: "Imported from South America $11.99 per pound", quantity: 130 },
  ]);

  const [newItem, setNewItem] = useState({ name: "", description: "", quantity: 0 });

  const [form1visible, setForm1Visible] = useState(false);

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, { ...newItem, id: Date.now() }]);
  };

  const updateItem = (itemId, updatedItem) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, ...updatedItem } : item)));
  };

  const deleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const sellItem = (itemId) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item)));
  };

  const toggle = () => {
    setForm1Visible(!form1visible);
  };

  const CoffeeShop = () => {
    const [form2visible, setForm2Visible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggle2 = (item) => {
      setSelectedItem(item);
      setForm2Visible(!form2visible);
    };

    const getDescription = () => {
      switch (selectedItem) {
        case 'Arabica Light Roast':
          return 'Imported from Nicaragua';
        case 'Robusta Medium Roast':
          return 'Imported from Brazil';
        case 'Liberica Light Roast':
          return 'Imported from Philippines';
        case 'Excelsa Dark Roast':
          return 'Imported from South America';
        default:
          return '';
      }
    };

    if (form2visible) {
      return (
        <>
          <OptionList onAddItem={addItem} />
          <div>
            <button onClick={() => toggle2(null)}>Return</button>
            <h2>{selectedItem}</h2>
            <p>{getDescription()}</p>
          </div>
        </>
      );
    } else {
      return (
        <div className="App">
          <h1>The Mean Bean</h1>
          <button onClick={() => toggle2()}>Description</button>
          <ItemList items={items} onSell={sellItem} onDelete={deleteItem} onUpdate={updateItem} />
        </div>
      );
    }
  };

  if (form1visible) {
    return (
      <>
        <OptionList onAddItem={addItem} />
        <button onClick={() => toggle()}>Return</button>
      </>
    );
  } else {
    return <CoffeeShop />;
  }
};

export default App;




// import React, { useState } from "react";
// import ItemList from "./components/coffeeList.js";
// import OptionList from "./components/userOptions.js";

// function App() {
//   const [items, setItems] = useState([
//     { id: 1, name: "Arabica Light Roast", description: "Imported from Nicaragua $9.99 per pound", quantity: 130 },
//     { id: 2, name: "Robusta Medium Roast", description: "Imported from Brazil $10.99 per pound", quantity: 130 },
//     { id: 3, name: "Liberica Light Roast", description: "Imported from Philippines $8.99 per pound", quantity: 130 },
//     { id: 4, name: "Excelsa Dark Roast", description: "Imported from South America $11.99 per pound", quantity: 130 },
//   ]);

//   const [newItem, setNewItem] = useState({ name: "", description: "", quantity: 0 });

//   const [form1visible, setForm1Visible] = useState(false);

//   const addItem = (newItem) => {
//     setItems((prevItems) => [...prevItems, { ...newItem, id: Date.now() }]);
//   };

//   const updateItem = (itemId, updatedItem) => {
//     setItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, ...updatedItem } : item)));
//   };

//   const deleteItem = (itemId) => {
//     setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
//   };

//   const sellItem = (itemId) => {
//     setItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item)));
//   };
//   const toggle = () => {
//     if (form1visible) {
//       setForm1Visible(false);
//     } else {
//       setForm1Visible(true);
//     }
//   };
//   if (form1visible) {
//     return (
//       <>
//         <OptionList onAddItem={addItem} />

//         <button onClick={() => toggle()}>Return</button>
//       </>
//     );
//   } else {
//     return (
//       <div className="App">
//         <h1>The Mean Bean</h1>
//         <button onClick={() => toggle()}>Order</button>
//         {/* <OptionList onAddItem={addItem} /> */}
//         <ItemList items={items} onSell={sellItem} onDelete={deleteItem} onUpdate={updateItem} />
//       </div>
//     );
//   }
// }

// export default App;


