import React, { useState, useEffect } from "react";
import { useShoppinglistContext } from "../../hooks/useShoppinglistContext";
import "./ShoppingList2.css"; // Import the CSS file
import { TbCheckbox } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuArrowLeftSquare } from "react-icons/lu";
const ShoppingList = ({ ListBackend }) => {
  const [items, setItems] = useState(ListBackend || []);
  const [newItem, setNewItem] = useState({ article: "", quantity: "" });
  const { dispatch } = useShoppinglistContext();

  useEffect(() => {
    setItems(ListBackend || []);
  }, [ListBackend]);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  const addBackendShoppinglist = async ({ id, article, quantity, status }) => {
    const response = await fetch("/api/shoppinglist/", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        article: article,
        quantity: quantity,
        status: status,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "CREATE_SHOPPINGLIST", payload: json });
    }
  };

  const handleAddItem = async () => {
    if (newItem.article && newItem.quantity) {
      const newItemWithIdAndStatus = {
        ...newItem,
        id: getRandomNumber(1, 1000),
        status: true,
      };
      addBackendShoppinglist(newItemWithIdAndStatus);
      setItems([...items, newItemWithIdAndStatus]);
      setNewItem({ article: "", quantity: "" });
    }
  };

  const toggleBackendShoppinglistStatus = async (id, currentStatus) => {
    const response = await fetch(`/api/shoppinglist/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        status: !currentStatus,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "UPDATE_SHOPPINGLIST", payload: json });
    }
  };

  const toggleStatus = (id, currentStatus) => {
    // Update the status in the backend
    toggleBackendShoppinglistStatus(id, currentStatus);

    // Update the status in the local state
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setItems(updatedItems);
  };
  const deleteBackendShoppinglist = async (id) => {
    const response = await fetch(`/api/shoppinglist/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_SHOPPINGLIST", payload: json });
    }
  };

  const deleteItem = (id) => {
    // Delete the item in the backend
    deleteBackendShoppinglist(id);

    // Delete the item in the local state
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const activeItems = items.filter((item) => item.status);
  const inactiveItems = items.filter((item) => !item.status);

  return (
    <div className="shopping-list-container">
      <h1>Shopping List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Article"
          name="article"
          value={newItem.article}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Quantity"
          name="quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <div className="lists-container">
        <div className="active-list">
          <h2>Active Items</h2>
          <ul>
            {activeItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => toggleStatus(item.id, item.status)}>
                  <TbCheckbox size={22} />
                </button>
                {item.article} - {item.quantity} {String(item.status)}
                <button onClick={() => deleteItem(item.id)}>
                  <FaRegTrashAlt size={17} />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="inactive-list">
          <h2>Inactive Items</h2>
          <ul>
            {inactiveItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => toggleStatus(item.id, item.status)}>
                  <LuArrowLeftSquare size={20} />
                </button>
                {item.article} - {item.quantity} {String(item.status)}
                <button onClick={() => deleteItem(item.id)}>
                  <FaRegTrashAlt size={17} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
