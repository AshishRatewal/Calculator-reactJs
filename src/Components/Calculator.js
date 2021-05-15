import React, { useState } from "react";
const Calculator = () => {
  const [result, setResult] = useState("");
  const handdleChange = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const backscape = () => {
    setResult(result.slice(0, -1));
  };
  const finalResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("error");
    }
  };
  return (
    <>
      <div className="calculator bg-dark text-light">
        <div className="container">
          {/* screen */}
          <div className="screen">
            <div className="row">
              <div className="col-12">
                <form>
                  <input
                    readOnly="true"
                    value={result}
                    className="form-control mb-4"
                    type="text"
                    name="screen"
                    id="screen"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="btn-section text-center">
            <div className="row">
              <div className="col-3">
                <button
                  onClick={clear}
                  type="button"
                  className="specialBtn light-white"
                >
                  AC
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={backscape}
                  type="button"
                  className="specialBtn light-white"
                >
                  C
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={handdleChange}
                  name="%"
                  type="button"
                  className="specialBtn light-white"
                >
                  %
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={handdleChange}
                  name="/"
                  type="button"
                  className="specialBtn"
                >
                  /
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <button
                  onClick={handdleChange}
                  name="7"
                  type="button"
                  className="btn_color"
                >
                  7
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={handdleChange}
                  name="8"
                  type="button"
                  className="btn_color"
                >
                  8
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={handdleChange}
                  name="9"
                  type="button"
                  className="btn_color"
                >
                  9
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={handdleChange}
                  name="*"
                  type="button"
                  className="specialBtn"
                >
                  *
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <button
                  onClick={handdleChange}
                  name="4"
                  type="button"
                  className="btn_color"
                >
                  4
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={handdleChange}
                  name="5"
                  type="button"
                  className="btn_color"
                >
                  5
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={handdleChange}
                  name="6"
                  type="button"
                  className="btn_color"
                >
                  6
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={handdleChange}
                  name="-"
                  type="button"
                  className="specialBtn"
                >
                  -
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <button
                  onClick={handdleChange}
                  name="1"
                  type="button"
                  className="btn_color"
                >
                  1
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={handdleChange}
                  name="2"
                  type="button"
                  className="btn_color"
                >
                  2
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={handdleChange}
                  name="3"
                  type="button"
                  className="btn_color"
                >
                  3
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={handdleChange}
                  name="+"
                  type="button"
                  className="specialBtn"
                >
                  +
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <button
                  onClick={handdleChange}
                  name="0"
                  type="button"
                  className="btn_color text-start zero"
                >
                  0
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={handdleChange}
                  name="."
                  type="button"
                  className="btn_color"
                >
                  .
                </button>
              </div>
              <div className="col-3">
                <button
                  type="button"
                  onClick={finalResult}
                  className="specialBtn"
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
