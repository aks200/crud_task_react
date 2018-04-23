import React, { Component, Fragment } from "react";
//import Editablelist from "./Editablelist";

class List extends Component {
  render() {
    //const { id, firstName, lastName, age, editable } = this.props.list;

    return (
      <Fragment>
        <tbody>
          {Object.keys(this.props.list).map(key => {
            const list = this.props.list;
            //console.log(this.props.list[key]);
            if (list[key].editable === false) {
              return (
                <tr key={list[key].id}>
                  <td>{list[key].firstName}</td>
                  <td>{list[key].lastName}</td>
                  <td>{list[key].age}</td>
                  <td>
                    <input
                      type="button"
                      onClick={() => this.props.onEdit(key)}
                      value="EDIT"
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => this.props.onDelete(key)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            }
            //for editing purpose
            else {
              return (
                <tr key={list[key].id}>
                  <td>
                    <input
                      type="text"
                      name="firstName"
                      value={list[key].form.firstName}
                      onChange={event => this.props.onChange(key, event)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="lastName"
                      value={list[key].form.lastName}
                      onChange={event => this.props.onChange(key, event)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="age"
                      value={list[key].form.age}
                      onChange={event => this.props.onChange(key, event)}
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => this.props.onSave(key)}
                    >
                      SAVE
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => this.props.onCancel(key)}
                    >
                      CANCEL
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </Fragment>
    );
  }
}

export default List;
