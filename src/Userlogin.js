import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./userlogin.css";

class UserLogin extends Component {
  validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email.endsWith(".ru")) {
      console.log("Yalnız .ru domenlərinə icazə verilir.");
      return false;
    }

    if (password.length < 8) {
      console.log("Ən azı 8 simvol olmalıdır.");
      return false;
    }

    return true;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.validateForm}>
          <label htmlFor="email">E-poçt:</label>
          <input type="email" id="email" required />

          <br></br>

          <label htmlFor="password">Parol:</label>
          <input type="password" id="password" required />

          <button type="submit">Daxil ol</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<UserLogin />, rootElement);
export default UserLogin;
