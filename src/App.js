import React, { useState } from "react";
import ItemList from "./components/itemList.js";
import OptionList from "./components/optionList.js";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Arabica Light Roast", description: "Imported from Nicaragua $9.99 per pound", quantity: 130 },
    { id: 2, name: "Robusta Medium Roast", description: "Imported from Brazil $10.99 per pound", quantity: 130 },
    { id: 3, name: "Liberica Light Roast", description: "Imported from Philippines $8.99 per pound", quantity: 130 },
    { id: 4, name: "Excelsa Dark Roast", description: "Imported from South America $11.99 per pound", quantity: 130 },
  ]);

  const [newItem, setNewItem] = useState({ name: "", description: "", quantity: 0 });

  const [form1visible, setForm1Visible] = useState(false);
  const [form2visible, setForm2Visible] = useState(false); // Added form2visible
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState("");

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

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  const toggleForm = (form) => {
    if (form === "form1") {
      setForm1Visible(!form1visible);
    } else if (form === "form2") {
      setForm2Visible(!form2visible);
    }
  };

  const toggleDescription = (item) => {
    setSelectedItem(item);
    setSelectedDescription("");
    toggleForm("form2");
  };

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedDescription(selectedValue);
  };

  const getDescription = () => {
    switch (selectedItem?.name) {
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

  if (form1visible) {
    return (
      <>
        <OptionList onAddItem={addItem} />
        <button onClick={() => toggleForm("form1")}>Return</button>
      </>
    );
  } else if (form2visible) {
    return (
      <>
        <OptionList onAddItem={addItem} />
        <div>
          <button onClick={() => toggleForm("form2")}>Return</button>
          <h2>{selectedItem?.name}</h2>
          <form>
            <input type="radio" name="coffeeType" value="Arabica is a light roast imported from Nicaragua costing $9.99 per pound. It is renowned for its exquisite flavour, which is frequently described as sweeter and softer than other coffee species." onChange={handleRadioChange} /> Arabica
            <input type="radio" name="coffeeType" value="Robusta is a medium roast imported from Brazil costing $10.99 per pound. It is described as perfumey with notes of fruit and sugar tones." onChange={handleRadioChange} /> Robusta
            <input type="radio" name="coffeeType" value="Liberica is a light roast imported from the Philippines costing $8.99 per pound. Its almond-shaped beans have an exceptional aroma, almost floral and fruity, while its flavor is full and slightly smokey." onChange={handleRadioChange} /> Liberica
            <input type="radio" name="coffeeType" value="Excelsa is a dark roast imported from South America costing $11.99 per pound. Excelsa has a distinctive tart, fruity, dark, mysterious taste. In blends, it enhances the middle and back palate and lingering finish of the coffee, giving the cup more substance and power." onChange={handleRadioChange} /> Excelsa
          </form>
          <p>{selectedDescription}</p>
        </div>
      </>
    );
  } else {
    return (
      <div className="App">
        <h1>The Mean Bean</h1>
        <button onClick={() => toggleForm("form1")}>Order</button>
        <button onClick={() => toggleDescription(null)}>Description</button>
        <ItemList
          items={items}
          onSell={sellItem}
          onDelete={deleteItem}
          onUpdate={updateItem}
          onDescribe={toggleDescription}
          selectItem={selectItem}
        />
        {selectedItem && (
          <div>
            <button onClick={() => toggleForm("form2")}>Return</button>
            <h2>{selectedItem.name}</h2>
            <form>
              {/* Your radio buttons and other form elements */}
            </form>
            <p>{getDescription()}</p>
          </div>
        )}
      </div>
    );
  }
};

export default App;