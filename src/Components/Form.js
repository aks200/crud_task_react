import React, { Component } from "react";

class Form extends Component {
  render() {
    const { firstName, lastName, age } = this.props.form;

    return (
      <table>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.props.onChange}
              />
            </td>
          </tr>

          <tr>
            <td>Last Name</td>
            <td>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.props.onChange}
              />
            </td>
          </tr>

          <tr>
            <td>Age</td>
            <td>
              <input
                type="number"
                name="age"
                value={age}
                onChange={this.props.onChange}
              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                type="submit"
                name="add"
                value="ADD"
                onClick={this.props.onSubmit}
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Form;
