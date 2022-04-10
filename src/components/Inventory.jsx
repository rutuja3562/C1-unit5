import { useState } from "react";
export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:0
  });
  // Create add and remove functions here that changes the
  // state.
  const handleClick = (val) => {
    setInv({
      ...inv,
      [val]: inv[val] + 1,
      
    });
  };
   const handleClicksub= (val) => {
     setInv({
       ...inv,
       [val]: inv[val] - 1,
     });
   };
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books:{inv.books} </span>
        <button
          className="circlularButton"
          onClick={handleClick.bind(null, "books")}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={handleClicksub.bind(null, "books")}
        >
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks:{inv.notebooks} </span>
        <button
          className="circlularButton"
          onClick={handleClick.bind(null, "notebooks")}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={handleClicksub.bind(null, "notebooks")}
        >
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen:{inv.pens} </span>
        <button
          className="circlularButton"
          onClick={handleClick.bind(null, "pens")}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={handleClicksub.bind(null, "pens")}
        >
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens:{inv.inkpens} </span>
        <button
          className="circlularButton"
          onClick={handleClick.bind(null,"inkpens" )}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={handleClicksub.bind(null,"inkpens" )}
        >
          -
        </button>
        <span>{inv.inkpens}</span>
      </div>
      calculate total and show it
      total: {87}
    </div>
  );
};
