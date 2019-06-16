import React from 'react'
import styled from 'styled-components'
import { AdminEmployee } from "../../component";

const Container = styled.div`
  display: flex;
`

const Sidebar = styled.div`
  padding: 1rem;
`

export class Admin extends React.Component {
  render() {
    return (
      <Container>
        <Sidebar>
          <aside className="menu">
            <p className="menu-label">
              Admin
            </p>
            <ul className="menu-list">
              <li><a>Employees</a></li>
              <li><a>Reviews</a></li>
            </ul>
          </aside>
        </Sidebar>
        <AdminEmployee/>
      </Container>
    )
  }
}