import React, { useState } from "react";
import "./Shoppinglist.css";
import { TbCheckbox } from "react-icons/tb";
import { LuArrowLeftSquare } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { useShoppinglistContext } from "../../hooks/useShoppinglistContext";

function Shoppinglist({ shoppinglists }) {
  const [article, setArticle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [lists, setList] = useState([]);
  const [historylist, setHistorylist] = useState([]);

  const { dispatch } = useShoppinglistContext();

  const handleArticleChange = (event) => {
    setArticle(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleNewArticle = () => {
    if (article !== "" && quantity !== "") {
      const newArticle = {
        article: article,
        quantity: quantity,
      };

      setList([...lists, newArticle]);
      setArticle("");
      setQuantity("");
    }
  };

  const handleCheckbox = (index) => {
    const checkedArticle = lists[index];
    setHistorylist([...historylist, checkedArticle]);
    setList(lists.filter((_, i) => i !== index));
  };

  const handleMoveBack = (index) => {
    const movedArticle = historylist[index];
    setList([...lists, movedArticle]);
    setHistorylist(historylist.filter((_, i) => i !== index));
  };

  const handleDelete = (index, list) => {
    if (list === "shoppinglist") {
      setList(lists.filter((_, i) => i !== index));
    } else if (list === "historylist") {
      setHistorylist(historylist.filter((_, i) => i !== index));
    }
  };

  const addShoppinglist = async () => {
    console.log({
      article,
      quantity,
    });

    const response = await fetch("/api/shoppinglist/", {
      method: "POST",
      body: JSON.stringify({
        article: article,
        quantity: quantity,
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

  return (
    <div className="shoppinglist-content">
      <div className="new-article">
        <h1 className="list-font">Neuen Artikel hinzufügen:</h1>
        <div className="new-input">
          <input
            className="new-input-article"
            type="text"
            value={article}
            onChange={(e) => {
              setArticle(e.target.value);
            }}
            placeholder="Artikel"
          />
          <input
            className="new-input-quantity"
            type="text"
            value={quantity}
            onChange={handleQuantityChange}
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
              {lists.map((item, index) => (
                <li className="list-row" key={index}>
                  <div
                    className="input-buttons"
                    onClick={() => handleCheckbox(index)}
                  >
                    <TbCheckbox size={22} />
                  </div>
                  <input
                    className="input-article"
                    type="text"
                    value={item.article}
                    onChange={handleArticleChange}
                  />
                  <input
                    className="input-quantity"
                    type="text"
                    value={item.quantity}
                    onChange={handleArticleChange}
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
              <h1 className="list-font">Verlauf</h1>
            </div>
            <div className="list-content">
              {historylist.map((item, index) => (
                <li className="list-row" key={index}>
                  <div
                    className="input-buttons"
                    onClick={() => handleMoveBack(index)}
                  >
                    <LuArrowLeftSquare size={20} />
                  </div>
                  <input
                    className="input-article"
                    type="text"
                    value={item.article}
                    onChange={handleArticleChange}
                  />
                  <input
                    className="input-quantity"
                    type="text"
                    value={item.quantity}
                    onChange={handleArticleChange}
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
