import React, { useState, useEffect } from "react";
import { useShoppinglistContext } from "../../hooks/useShoppinglistContext";
import "./Shoppinglist.css"; // Import the CSS file
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
    <div className="shoppinglist-content">
      <div className="new-article">
        <h1 className="list-font">Neuen Artikel hinzufügen:</h1>
        <div className="new-input">
          <input
            className="new-input-article"
            type="text"
            placeholder="Artikel"
            name="article"
            value={newItem.article}
            onChange={handleInputChange}
          />
          <input
            className="new-input-quantity"
            type="text"
            placeholder="Menge"
            name="quantity"
            value={newItem.quantity}
            onChange={handleInputChange}
          />
          <button className="new-button" onClick={handleAddItem}>
            + Hinzufügen
          </button>
        </div>
      </div>

      <div className="lists">
        <div className="list-1">
          <ul>
            <div className="list-headline">
              <h1 className="list-font">Einkaufszettel</h1>
            </div>
            <div className="list-content">
              {activeItems.map((item) => (
                <li className="list-row" key={item.id}>
                  <div
                    className="input-buttons"
                    onClick={() => toggleStatus(item.id, item.status)}
                  >
                    <TbCheckbox />
                  </div>
                  <div className="input-article">{item.article}</div>
                  <div className="input-quantity">{item.quantity}</div>
                  <div
                    className="input-buttons-trash"
                    onClick={() => deleteItem(item.id)}
                  >
                    <FaRegTrashAlt />
                  </div>
                </li>
              ))}
            </div>
          </ul>
        </div>

        <div className="list-2">
          <ul>
            <div className="list-headline">
              <h1 className="list-font">Zuletzt abgehakt</h1>
            </div>
            <div className="list-content">
              {inactiveItems.map((item) => (
                <li className="list-row" key={item.id}>
                  <div
                    className="input-buttons"
                    onClick={() => toggleStatus(item.id, item.status)}
                  >
                    <LuArrowLeftSquare />
                  </div>
                  <div className="input-article">{item.article}</div>
                  <div className="input-quantity">{item.quantity}</div>
                  <div
                    className="input-buttons-trash"
                    onClick={() => deleteItem(item.id)}
                  >
                    <FaRegTrashAlt />
                  </div>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
