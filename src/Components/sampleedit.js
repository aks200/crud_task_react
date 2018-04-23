state = {
  listObj: {
    11: {
      id: 11,
      firstName: "Robert",
      lastName: "Kamer",
      age: 22,
      editable: false
    },
    12: {
      id: 12,
      firstName: "Sameul",
      lastName: "Coggle",
      age: 20,
      editable: false
    }
  }
};

const getElemFromObj = id => {
  //return the object
  this.setState({
    [this.state.listObj[id].editable]: true
  });

  return this.state.listObj;
};

console.log(getElemFromObj(11));
