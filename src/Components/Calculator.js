import React from "react";
const Calculator = () => {
  return (
    <>
      <div className="calculator bg-dark text-light">
        <div className="container">
          {/* screen */}
          <div className="screen">
            <div className="row">
              <div className="col-12">
                <h2 className="text-end">0</h2>
              </div>
            </div>
          </div>
          <div className="btn-section text-center">
            <div className="row">
              <div className="col-3">
                <p className="specialBtn">AC</p>
              </div>
              <div className="col-3">
                <p className="specialBtn">C</p>
              </div>
              <div className="col-3">
                <p className="specialBtn">%</p>
              </div>
              <div className="col-3">
                <p className="specialBtn">/</p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <p className="btn_color">7</p>
              </div>
              <div className="col-3">
                <p className="btn_color">8</p>
              </div>
              <div className="col-3">
                <p className="btn_color">9</p>
              </div>
              <div className="col-3">
                <p className="specialBtn">*</p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <p className="btn_color">4</p>
              </div>
              <div className="col-3">
                <p className="btn_color">5</p>
              </div>
              <div className="col-3">
                <p className="btn_color">6</p>
              </div>
              <div className="col-3">
                <p className="specialBtn">-</p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <p className="btn_color">1</p>
              </div>
              <div className="col-3">
                <p className="btn_color">2</p>
              </div>
              <div className="col-3">
                <p className="btn_color">3</p>
              </div>
              <div className="col-3">
                <p className="specialBtn">+</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p className="btn_color text-start zero">0</p>
              </div>
              <div className="col-3">
                <p className="btn_color">.</p>
              </div>
              <div className="col-3">
                <p className="specialBtn">=</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
