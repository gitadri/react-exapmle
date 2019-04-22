import React from "react";
import ReactDOM from "react-dom";
import Select from "react-select";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <HellowWorld titre="Hello World" />
      <WizzardProduct />
    </div>
  );
}
class WizzardProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { id: "1", label: "Option 1" },
        { id: "2", label: "Option 2" },
        { id: "3", label: "Option 3" }
      ],
      isToggleOn: false
    };
  }
  render() {
    return (
      <div>
        <ButtonWizzard datas={this.state} />
      </div>
    );
  }
}
class ListsWizzard extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.datas;
  }
  render() {
    return (
      <div>
        <List datas={this.state} />
      </div>
    );
  }
}
class List extends React.Component {
  constructor(props) {
    super();
    this.state = props.datas.options;
  }
  render() {
    return (
      <div>
        <SelectWizzard datas={this.state} />
      </div>
    );
  }
}
class SelectWizzard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: props.datas,
      users: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Claire" },
        { id: 4, name: "David" }
      ]
    };
  }

  handleChange(props) {
    this.setState({
      //users: [...this.state.users(1)]
      users: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
    });
    this.handleListProduct(props);
  }
  handleListProduct(props) {
    if (props === "Option 3") {
      this.listProductAjour = <ListProduct noms={this.state.users} />;
    }
  }
  render() {
    let listProductAjour;
    return (
      <div>
        <select
          onChange={e => this.handleChange(e.target.value,)}
          value={this.state.value}
        >
          {this.state.datas.map(item => (
            <option key={item.id} value={item.label}>
              {item.label}
            </option>
          ))}
        </select>
        {console.log("jjjj", this.state, "eee", this.state.users)}
        {console.log(this.listProductAjour)}
        {this.listProductAjour !== undefined ? (
          "HellowWorld"
        ) : (
          <ListProduct noms={this.state.users} />
        )}
      </div>
    );
  }
}
class ListProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.noms;
  }

  render() {
    return (
      <div className="userList">
        {this.state.map(user => (
          <label key={user.id}>{user.name} .... </label>
        ))}
      </div>
    );
  }
}
class ButtonWizzard extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.datas;
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(() => ({
      isToggleOn: !this.state.isToggleOn
    }));
  }
  render() {
    const isToggleOn = this.state.isToggleOn;
    let listsWizard;
    if (isToggleOn) listsWizard = <ListsWizzard datas={this.state} />;
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        {listsWizard}
      </div>
    );
  }
}
class HellowWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        lastName: "ze",
        firstName: "ze"
      }
    };
  }
  render() {
    return (
      <div>
        <h2>{this.props.titre},</h2>
        <h1>
          {this.state.user.firstName} {this.state.user.firstName}
        </h1>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
