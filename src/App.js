import "./styles.css";
import React from "react";
import { Button } from "semantic-ui-react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      output: ""
    };
    this.isInputCorrect = this.isInputCorrect.bind(this);
    this.calculate = this.calculate.bind(this);
    this.input = this.input.bind(this);
  }
  isInputCorrect = (event) => {
    var input = event.target.value;
    if (!isNaN(input)) {
      this.setState({
        value: input
      });
    } else {
      alert("Please enter a numeric value ");
    }
  };
  input = (event) => {
    try {
      var data = event.target.value;
      switch (data) {
        case "clear":
          this.setState({ value: "" });
          break;
        case "equal":
          this.calculate();
          break;
        default:
          this.setState({
            value: this.state.value + data
          });
      }
    } catch (e) {
      alert("Prefix 0 or operator in number in not allowed");
      this.setState({ value: "" });
    }
  };
  calculate = () => {
    const finalOutput = eval(this.state.value);
    finalOutput > 0
      ? this.setState({ value: finalOutput })
      : this.setState({ value: 0 });
  };
  render() {
    const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const operator = ["+", "-", "*", "/"];
    return (
      <div className="App">
        <div className="container">
          <div className="box">
            <div className="input-output-box">
              <input
                type="text"
                className="output"
                onChange={this.isInputCorrect}
                value={this.state.value}
                placeholder="0"
              />
            </div>
            <div className="clear-box">
              <Button content="C" value="clear" onClick={this.input} />
            </div>
          </div>
          <div className="buttons">
            <div className="number-buttons">
              {numbers.map((item) => {
                return (
                  <Button content={item} value={item} onClick={this.input} />
                );
              })}
              <Button content="." value="." onClick={this.input} />
              <Button content="=" value="equal" onClick={this.input} />
            </div>
            <div className="operator-buttons">
              {operator.map((i) => {
                return <Button content={i} value={i} onClick={this.input} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
