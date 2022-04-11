import { useState } from "react";
import "./App.css"
function App() {
  const [addScore1, setAddScore1] = useState(0);
  const [addWicket, setAddWicket] = useState(0);
  const [addBall, setAddBall] = useState(0);

  const handleClickone = (value) => {
    setAddScore1(addScore1 + value);
  };
  const handleClickwicket = (value) => {
    setAddWicket(addWicket + value);
  };
  const handleClickaddball = (value) => {
    setAddBall(addBall + value);
  };
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{addScore1}
          <h1 className="scoreCount">
            {
              // show "score" here
              addScore1
            }
          </h1>
        </div>
        <div>
          Wicket:{addWicket}
          <h1 className="wicketCount">
            {
              // show wicket here
              addWicket
            }
          </h1>
        </div>

        <div>
          Over:{addBall % 6 === 0 ? Math.floor(addBall / 6) : addBall % 6}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              // { addBall }
              addBall % 6 === 0 ? Math.floor(addBall / 6) : addBall % 6
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => handleClickone(+1)}>
          Add 1
        </button>
        <button className="addScore4" onClick={() => handleClickone(+4)}>
          Add 4
        </button>
        <button className="addScore6" onClick={() => handleClickone(+6)}>
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => handleClickwicket(+1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() => handleClickaddball(+1)}>Add 1</button>
      </div>

      {
        /* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */
        <h1 class="status">{addScore1 >= 100 ? "India Won" : ""}</h1>
      }
    </div>
  );
}

export default App;
