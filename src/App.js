import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: '',
                   lastName: '',
                   newUser: '',
                   users: []
                 };

    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleLastChange = this.handleLastChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }
  handleFirstChange(event) {
    this.setState({
      firstName: event.target.value,
    });
  }
  handleLastChange(event) {
    this.setState({
      lastName: event.target.value,
    });
  }
  addUser(event) {
    event.preventDefault()
    let oldUsers = this.state.users
    let newUser = {
        first: this.state.firstName,
        last: this.state.lastName,
      }
      this.setState({
        users: [...oldUsers, newUser],
        newUser: '',
        firstName: '',
        lastName: ''
      })
    }
  renderUsers() {
    const users = this.state.users.map((user, index) => {
      return (
        <tr>
          <td>{user.first}</td>
          <td>{user.last}</td>
        </tr>
      )
    })
    return users
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.addUser.bind(this)}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" value={this.state.firstName} onChange={this.handleFirstChange}/>
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" value={this.state.lastName} onChange={this.handleLastChange}/>
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary" >Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.renderUsers()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App
