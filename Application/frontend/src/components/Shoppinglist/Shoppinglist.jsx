import React, { useState } from 'react';
import "./Shoppinglist.css";
import { TbCheckbox } from "react-icons/tb";
import { LuArrowLeftSquare } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";


function Shoppinglist({events}) {
  const [article, setArticle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [shoppinglist, setShoppinglist] = useState([]);
  const [historylist, setHistorylist] = useState([]);

  const handleArticleChange = (event) => {
    setArticle(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleNewArticle = () => {
    if (article !== '' && quantity !== '') {
      const newArticle = {
        article: article,
        quantity: quantity,
      };

      setShoppinglist([...shoppinglist, newArticle]);
      setArticle('');
      setQuantity('');
    }
  };

  const handleCheckbox = (index) => {
    const checkedArticle = shoppinglist[index];
    setHistorylist([...historylist, checkedArticle]);
    setShoppinglist(shoppinglist.filter((_, i) => i !== index));
  };

  const handleMoveBack = (index) => {
    const movedArticle = historylist[index];
    setShoppinglist([...shoppinglist, movedArticle]);
    setHistorylist(historylist.filter((_, i) => i !== index));
  };

  const handleDelete = (index, list) => {
    if (list === 'shoppinglist') {
      setShoppinglist(shoppinglist.filter((_, i) => i !== index));
    } else if (list === 'historylist') {
      setHistorylist(historylist.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="shoppinglist-content">
      <div className='new-article'>
        <h1>Neuen Artikel hinzufügen:</h1>
        <div className='new-input'>
        <input
          className="new-input-article"
          type="text"
          value={article}
          onChange={handleArticleChange}
          placeholder="Artikel"
        />
        <input
          className="new-input-quantity"
          type="text"
          value={quantity}
          onChange={handleQuantityChange}
          placeholder="Menge"
        />
        <button
          className='new-button'
          onClick={handleNewArticle}>
            + Hinzufügen
          </button>
      </div>
      </div>

      <div className="lists">
        <div className="list-1">
          <ul>
            <div className='list-headline'>
              <h1>Einkaufszettel</h1>
            </div>
            <div className='list-content'>
            {shoppinglist.map((item, index) => (
              <li className="list-row" key={index}>
                <div
                  className="input-buttons"
                  onClick={() => handleCheckbox(index)}>
                    <TbCheckbox size={23}/>
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
                  onClick={() => handleDelete(index, "shoppinglist")}>
                    <FaRegTrashAlt size={18}/>
                </div>
              </li>
            ))}
            </div>
          </ul>
        </div>

        <div className="list-2">
          <ul>
          <div className='list-headline'>
              <h1>Verlauf</h1>
            </div>
            <div className='list-content'>
            {historylist.map((item, index) => (
              <li className="list-row" key={index}>
                <div
                  className="input-buttons"
                  onClick={() => handleMoveBack(index)}>
                    <LuArrowLeftSquare size={21}/>
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
                  onClick={() => handleDelete(index, "historylist")}>
                    <FaRegTrashAlt size={18}/>
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