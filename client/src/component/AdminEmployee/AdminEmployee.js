import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { AddEmployeeModal } from "../../component";

const Container = styled.div`
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 30px;
  flex: 1;
`

export class AdminEmployee extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isShowModal: false,
      employeeList: []
    }

  }

  componentDidMount() {
    this.getEmployeeList()
  }

  getEmployeeList = () => {
    axios.get('/api/employees')
      .then((res) => {
        console.log(res, 'ueoueou')
        this.setState({
          employeeList: res.data.result
        })
      })
  }

  showEmployeeModal = () => {
    this.setState({
      isShowModal: true
    })
  }

  addEmployee = (data) => {
    console.log('aii eaoeo')
    const currentEmployeeList = this.state.employeeList
    currentEmployeeList.unshift(data)
    this.setState({
      isShowModal: false,
      employeeList: currentEmployeeList
    })

  }

  closeEmployeeModal = () => {
    this.setState({
      isShowModal: false
    })
  }

  render() {
    const { employeeList, isShowModal } = this.state

    return (
      <Container>
        <div>
          <button
            onClick={this.showEmployeeModal}
            className="button is-primary">Add</button>
        </div>
        <div className="list-box">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employeeList.map((emp) =>
                <tr key={`emp-${emp.id}`}>
                  <td>{emp.empId}</td>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.position}</td>
                  <td>{emp.department}</td>
                  <td>
                    <button className="button is-danger">Delete</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {isShowModal &&
          <AddEmployeeModal
            addEmployee={this.addEmployee}
            closeModal={this.closeEmployeeModal}
          />
        }

      </Container>
    )
  }
}