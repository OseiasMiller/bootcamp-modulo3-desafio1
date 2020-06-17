import React from "react";

export default class InputReadOnly extends React.Component {
  render() {
    const { color = "black", percentual = "", label } = this.props;

    const value = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(this.props.value);

    return (
      <div className="input-field col s3">
        <label class="active">{label}</label>
        <input
          type="text"
          className="validate"
          value={`${value} ${percentual}`}
          style={{ color: color }}
        />
      </div>
    );
  }
}
