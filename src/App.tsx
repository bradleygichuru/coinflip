import { useState } from "react";
import coin from "./assets/coin.png";
import heads from "./assets/heads.svg";
import tails from "./assets/tails.svg";
//format
function App() {
  const [flipped, setFlipped] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  const flip = () => {
    const flipVar = Math.random();
    if (flipVar > 0.5) {
      setResult("heads");
    } else {
      setResult("tails");
    }
    setFlipped(true);
  };
  return (
    <div className="grid place-items-center h-screen" data-theme="cupcake">
      {!flipped && (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-center">Flip the coin!</h2>
            <figure>
              <img src={coin} className="w-16 h-16 my-4" />
            </figure>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={flip}>
                flip
              </button>
            </div>
          </div>
        </div>
      )}
      {flipped && (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-center">{result}!</h2>
            <figure>
              <img
                src={result == "heads" ? heads : tails}
                className="w-16 h-16 my-4"
              />
            </figure>
            <div className="card-actions justify-center">
              <button
                onClick={() => {
                  setFlipped(false);
                }}
                className="btn btn-primary"
              >
                Flip again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
