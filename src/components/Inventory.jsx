import { useState } from "react";
export const Inventory = () => {
  const [books, setBooks] = useState(10);
  const [notebooks, setNotebooks] = useState(13);
  const [pens, setPens] = useState(40);
  const [inkpens, setInkpens] = useState(0);
  const [totalcount,setTotalcount]=useState(63)

  // Create add and remove functions here that changes the
  // state.
  const handleClick = (value) => {
    setBooks(books + value);
    setTotalcount(totalcount+value);
  };
  const handleClickNotebook = (value) => {
    setNotebooks(notebooks + value);
    setTotalcount(totalcount+value)
  };
  const handleClickInkpens = (value) => {
    setInkpens(inkpens + value);
  setTotalcount(totalcount+value)
  };
  const handleClickPens = (value) => {
    setPens(pens + value);
    setTotalcount(totalcount+value)
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
        <span>Books:{books} </span>
        <button className="circlularButton" onClick={() => handleClick(1)}>
          +
        </button>
        <button className="circlularButton" onClick={() => handleClick(-1)}>
          -
        </button>
        <span>{books}</span>
      </div>
      <div className="items">
        <span>Notebooks:{notebooks} </span>
        <button
          className="circlularButton"
          onClick={() => handleClickNotebook(1)}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => handleClickNotebook(-1)}
        >
          -
        </button>
        <span>{notebooks}</span>
      </div>
      <div className="items">
        <span>Pen:{pens} </span>
        <button className="circlularButton" onClick={() => handleClickPens(1)}>
          +
        </button>
        <button className="circlularButton" onClick={() => handleClickPens(-1)}>
          -
        </button>
        <span>{pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens:{inkpens} </span>
        <button
          className="circlularButton"
          onClick={() => handleClickInkpens(+1)}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => handleClickInkpens(-1)}
        >
          -
        </button>
        <span>{inkpens}</span>
      </div>
      {/* calculate total and show it */}
      total: {totalcount}
    </div>
  );
};
