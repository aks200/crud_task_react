import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

class Crud extends Component {
  //maintaining state
  state = {
    form: {
      firstName: "",
      lastName: "",
      age: "",

      form: {
        firstName: "",
        lastName: "",
        age: ""
      }
    },
    list: {
      1: {
        id: 1,
        firstName: "Robert",
        lastName: "Kamer",
        age: 22,
        editable: false,
        form: {
          firstName: "Robert",
          lastName: "Kamer",
          age: 22
        }
      },
      2: {
        id: 2,
        firstName: "Sameul",
        lastName: "Coggle",
        age: 20,
        editable: false,

        form: {
          firstName: "Sameul",
          lastName: "Coggle",
          age: 20
        }
      }
    }
  };

  //setting state for form
  onChangeEventForForm = event => {
    const target = event.target;

    this.setState(prevState => {
      return {
        form: {
          ...prevState.form,
          [target.name]: target.value
        }
      };
    });
  };

  //toggle editable
  handleChangeEditable = id => {
    console.log(id);

    let list = this.state.list[id];

    if (!list.editable) {
      this.setState(prevState => {
        return {
          list: {
            ...prevState.list,
            [id]: {
              ...prevState.list[id],
              editable: true,
              form: {
                ...prevState.list[id].form
                //...this.state.list[id].form
              }
            }
          }
        };
      });
    }
  };

  //on change event on list items
  onChangeEventForList = (id, event) => {
    const target = event.target;
    console.log(target.name);
    console.log(target.value);
    this.setState(prevState => {
      //console.log(prevState);
      return {
        list: {
          ...prevState.list,
          [id]: {
            ...prevState.list[id],
            form: {
              ...prevState.list[id].form,
              [target.name]: target.value
            }
          }
        }
      };
    });
  };

  //save new value on click save
  handleSave = id => {
    console.log(this.state.list[id].form.firstName);
    let firstName = this.state.list[id].form.firstName;
    let lastName = this.state.list[id].form.lastName;
    let age = this.state.list[id].form.age;
    if (!firstName || !lastName || !age) {
      alert("fields sholud not be empty");
    } else {
      this.setState(prevState => {
        return {
          list: {
            ...prevState.list,
            [id]: {
              ...prevState.list[id],
              firstName: firstName,
              lastName: lastName,
              age: age,
              editable: false
            }
          }
        };
      });
    }
  };

  //delete element
  handleDelete = (id, val) => {
    const updatedList = { ...this.state.list };
    console.log(`id: ${id}`);
    console.log(this.state.list);
    delete updatedList[id];
    console.log(updatedList);

    this.setState(prevState => {
      return {
        list: updatedList
      };
    });
  };

  //click on cancel
  handleCancel = id => {
    this.setState(prevState => {
      return {
        list: {
          ...prevState.list,
          [id]: { ...this.state.list[id], editable: false }
        }
      };
    });
  };
  //updating list by adding new items
  addToListFromForm() {
    const id = Date.now();
    console.log("ID ", id);
    this.setState(prevState => {
      return {
        list: {
          ...prevState.list,
          [id]: {
            id,
            ...this.state.form,
            editable: false,
            form: {
              ...this.state.form
            }
            /*...prevState.list,
          [id]: { id, ...this.state.form, editable: false }*/
          }
        }
      };
    });
  }
  //validation form
  validateForm() {
    const { firstName, lastName, age } = this.state.form;

    if (!firstName || !lastName || !age) {
      alert("All fields Are compulsary");
      return false;
    } else if (age < 18) {
      alert("Age should not be less than 18");
      return false;
    } else {
      return true;
    }
  }

  onAddItem = () => {
    //execution of validate and update
    if (this.validateForm()) {
      this.addToListFromForm();
    }
  };

  render() {
    return (
      <div>
        <Form
          form={this.state.form}
          onChange={this.onChangeEventForForm}
          onSubmit={this.onAddItem}
        />

        <table cellPadding="4">
          <List
            list={this.state.list}
            onChange={(id, event) => this.onChangeEventForList(id, event)}
            onEdit={id => this.handleChangeEditable(id)}
            onDelete={id => this.handleDelete(id)}
            onSave={id => this.handleSave(id)}
            onCancel={id => this.handleCancel(id)}
          />
        </table>
      </div>
    );
  }
}

export default Crud;
