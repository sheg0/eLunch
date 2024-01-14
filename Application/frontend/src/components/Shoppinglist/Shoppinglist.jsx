import React, { useState } from "react";
import "./Shoppinglist.css";
import { TbCheckbox } from "react-icons/tb";
import { LuArrowLeftSquare } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { useShoppinglistContext } from "../../hooks/useShoppinglistContext";
import { useEffect } from "react";

function Shoppinglist({ shoppinglists }) {
  const [article, setArticle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [lists, setList] = useState([]);
  const [historylist, setHistorylist] = useState([]);
  const { dispatch } = useShoppinglistContext();

  useEffect(() => {
    toArray();
  }, [shoppinglists]);

  const toArray = () => {
    if (shoppinglists != null) {
      const newLists = Object.values(shoppinglists);
      setList(newLists);
    }
  };
  const addShoppinglist = async () => {
    console.log(article);
    const response = await fetch("/api/shoppinglist/", {
      method: "POST",
      body: JSON.stringify({
        article: article,
        quantity: quantity,
        status: true,
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

  const handleArticleChange = (event, index) => {
    const updatedLists = [...lists];
    updatedLists[index].article = event.target.value;
    setList(updatedLists);
  };

  const handleQuantityChange = (event, index) => {
    const updatedLists = [...lists];
    updatedLists[index].quantity = event.target.value;
    setList(updatedLists);
  };

  const handleNewArticle = () => {
    if (article !== "" && quantity !== "") {
      const newArticle = {
        article: article,
        quantity: quantity,
        status: true, // Assuming a new article is always active
      };

      setList((prevLists) => [...prevLists, newArticle]);
      addShoppinglist();
      setArticle("");
      setQuantity("");
    }
  };

  const handleCheckbox = async (index) => {
    const activeItems = lists.filter((item) => item.status === true);
    const checkedArticle = activeItems[index];
    const updatedLists = lists.map((item) =>
      item._id === checkedArticle._id ? { ...item, status: false } : item
    );
    setList(updatedLists);
    await updateStatusOnServer(checkedArticle._id, false);
  };

  const handleMoveBack = async (index) => {
    const inactiveItems = lists.filter((item) => item.status === false);
    const movedArticle = inactiveItems[index];
    const updatedLists = lists.map((item) =>
      item._id === movedArticle._id ? { ...item, status: true } : item
    );
    setList(updatedLists);
    await updateStatusOnServer(movedArticle._id, true);
  };

  const handleDelete = async (index, list) => {
    if (list === "shoppinglist") {
      const deletedArticle = lists[index];
      const updatedLists = lists.filter((_, i) => i !== index);
      setList(updatedLists);
      await deleteArticleOnServer(deletedArticle._id);
    } else if (list === "historylist") {
      const deletedArticle = historylist[index];
      const updatedHistoryList = historylist.filter((_, i) => i !== index);
      setHistorylist(updatedHistoryList);
      await deleteArticleOnServer(deletedArticle._id);
    }
  };

  const updateStatusOnServer = async (id, newStatus) => {
    const response = await fetch(`/api/shoppinglist/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        status: newStatus,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "UPDATE_SHOPPINGLIST", payload: json });
    } else {
    }
  };
  const deleteArticleOnServer = async (id) => {
    const response = await fetch(`/api/shoppinglist/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      dispatch({ type: "DELETE_SHOPPINGLIST", payload: id });
    } else {
    }
  };

  return (
    <div className="shoppinglist-content">
      <div className="new-article">
        <h1 className="list-font">Neuen Artikel hinzufügen:</h1>
        <div className="new-input">
          <input
            className="new-input-article"
            type="text"
            value={article}
            onChange={(e) => setArticle(e.target.value)}
            placeholder="Artikel"
          />
          <input
            className="new-input-quantity"
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Menge"
          />
          <button className="new-button" onClick={handleNewArticle}>
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
              {lists
                .filter((item) => item.status === true)
                .map((item, index) => (
                  <li className="list-row" key={index}>
                    <div
                      className="input-buttons"
                      onClick={() => handleCheckbox(index)}
                    >
                      <TbCheckbox size={22} />
                    </div>
                    <input
                      disabled
                      className="input-article"
                      type="text"
                      value={item.article}
                      onChange={(e) => handleArticleChange(e, index)}
                    />
                    <input
                      disabled
                      className="input-quantity"
                      type="text"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(e, index)}
                    />
                    <div
                      className="input-buttons"
                      onClick={() => handleDelete(index, "shoppinglist")}
                    >
                      <FaRegTrashAlt size={17} />
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
              {lists
                .filter((item) => item.status === false)
                .map((item, index) => (
                  <li className="list-row" key={index}>
                    <div
                      className="input-buttons"
                      onClick={() => handleMoveBack(index)}
                    >
                      <LuArrowLeftSquare size={20} />
                    </div>
                    <input
                      disabled
                      className="input-article"
                      type="text"
                      value={item.article}
                      onChange={(e) => handleArticleChange(e, index)}
                    />
                    <input
                      disabled
                      className="input-quantity"
                      type="text"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(e, index)}
                    />
                    <div
                      className="input-buttons"
                      onClick={() => handleDelete(index, "historylist")}
                    >
                      <FaRegTrashAlt size={17} />
                    </div>
                  </li>
                ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Shoppinglist;
