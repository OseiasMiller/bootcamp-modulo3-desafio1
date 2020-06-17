import React, { Component } from "react";
// import ProjetoBase from "./components/ProjetoBase/ProjetoBase";
import "./styles.css";
import Bar from "./components/Bar";
import { calculateSalaryFrom } from "./salary";
import InputReadOnly from "./components/InputReadOnly";

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

    const percentDiscountINSS = ((discountINSS / fullSalary) * 100).toFixed(2);
    const percentDiscountIRPF = ((discountIRPF / fullSalary) * 100).toFixed(2);
    const percentSalary = ((netSalary / fullSalary) * 100).toFixed(2);

    return (
      <div className="container">
        <h1>React Salario</h1>

        <div className="row">
          <div className="input-field col s12">
            <label class="active">Salário Bruto</label>
            <input
              placeholder="Salario Bruto"
              id="salario_bruto"
              type="number"
              className="validate"
              value={fullSalary}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="row">
          <InputReadOnly value={baseINSS} label={"Base Inss"} />
          <InputReadOnly
            color={"#e67e22"}
            value={`${discountINSS}`}
            percentual={`(${percentDiscountINSS}%)`}
            label={"Desconto Inss"}
          />
          <InputReadOnly value={baseIRPF} label={"Base IRPF"} />
          <InputReadOnly
            color={"#c0392b"}
            value={`${discountIRPF}`}
            percentual={`(${percentDiscountIRPF}%)`}
            label={"Desconto IRPF"}
          />
        </div>

        <div className="row">
          <InputReadOnly
            color={"#16a085"}
            value={`${netSalary}`}
            percentual={`(${percentSalary}%)`}
            label={"Salário Liquido"}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Bar value={percentDiscountINSS} color="#e67e22" />
          <Bar value={percentDiscountIRPF} color="#c0392b" />
          <Bar value={percentSalary} color="#16a085" />
        </div>
      </div>
    );
  }
}
