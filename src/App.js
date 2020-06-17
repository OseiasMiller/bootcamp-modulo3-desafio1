import React, { Component } from "react";
// import ProjetoBase from "./components/ProjetoBase/ProjetoBase";
import "./styles.css";
import Bar from "./components/Bar";
import { calculateSalaryFrom } from "./salary";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fullSalary: 0,
    };
  }

  handleChange = (event) => {
    const fullSalary = event.target.value;
    // console.log(fullSalary);

    this.setState({
      fullSalary: fullSalary,
    });
  };

  render() {
    const { fullSalary } = this.state;
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculateSalaryFrom(fullSalary);

    return (
      <div className="container">
        <h1>React Salario</h1>

        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Salario Bruto"
              id="first_name"
              type="number"
              className="validate"
              value={fullSalary}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s3">
            <input
              placeholder="Base Inss"
              id="base_inss"
              type="number"
              className="validate"
              value={baseINSS}
            />
          </div>
          <div className="input-field col s3">
            <input
              placeholder="Desconto Inss"
              id="desconto_inss"
              type="text"
              className="validate"
              value={`${discountINSS} (${(
                (discountINSS / fullSalary) *
                100
              ).toFixed(2)})`}
            />
          </div>
          <div className="input-field col s3">
            <input
              placeholder="Base IRPF"
              id="base_irpf"
              type="text"
              className="validate"
              value={baseIRPF}
            />
          </div>
          <div className="input-field col s3">
            <input
              placeholder="Desconto IRPF"
              id="desconto_irpf"
              type="text"
              className="validate"
              value={`${discountIRPF} (${(
                (discountIRPF / fullSalary) *
                100
              ).toFixed(2)})`}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s3">
            <input
              placeholder="Salario Liquido"
              id="first_name"
              type="text"
              className="validate"
              value={`${netSalary} (${((netSalary / fullSalary) * 100).toFixed(
                2
              )})`}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Bar value={50} color="red" />
          <Bar value={50} color="green" />
        </div>
      </div>
    );
  }
}
