import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 15px
`

export class AdminEmployee extends React.Component {
  render() {
    return (
      <Container>
        <h1 className="subtitle">
          Employee <button className="button is-primary">Add</button>
        </h1>
        <div className="list-box">
          <table className="table">
            <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Department</th>
            </tr>
            </thead>
          </table>
        </div>
      </Container>
    )
  }
}