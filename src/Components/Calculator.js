import React, {useState} from "react";
const Calculator = () => {
  const [result,setResult] = useState("hello");

  return (
    <>
      <div className="calculator bg-dark text-light">
        <div className="container">
          {/* screen */}
          <div className="screen">
            <div className="row">
              <div className="col-12">
                <form>
                  <input readOnly="true" value={result} className="form-control mb-4" type="text" name="screen" id="screen" />
                </form>
              </div>
            </div>
          </div>
          <div className="btn-section text-center">
            <div className="row">
              <div className="col-3">
                <button type="button" className="specialBtn">AC</button>
              </div>
              <div className="col-3">
                <button type="button" className="specialBtn">C</button>
              </div>
              <div className="col-3">
                <button type="button" className="specialBtn">%</button>
              </div>
              <div className="col-3">
                <button type="button" className="specialBtn">/</button>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <button type="button" className="btn_color">7</button>
              </div>
              <div className="col-3">
                <button type="button" className="btn_color">8</button>
              </div>
              <div className="col-3">
                <button type="button" className="btn_color">9</button>
              </div>
              <div className="col-3">
                <button type="button" className="specialBtn">*</button>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <button type="button" className="btn_color">4</button>
              </div>
              <div className="col-3">
                <button type="button" className="btn_color">5</button>
              </div>
              <div className="col-3">
                <button type="button" className="btn_color">6</button>
              </div>
              <div className="col-3">
                <button type="button" className="specialBtn">-</button>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <button type="button" className="btn_color">1</button>
              </div>
              <div className="col-3">
                <button type="button" className="btn_color">2</button>
              </div>
              <div className="col-3">
                <button type="button" className="btn_color">3</button>
              </div>
              <div className="col-3">
                <button type="button" className="specialBtn">+</button>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <button type="button" className="btn_color text-start zero">0</button>
              </div>
              <div className="col-3">
                <button type="button" className="btn_color">.</button>
              </div>
              <div className="col-3">
                <button type="button" className="specialBtn">=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
