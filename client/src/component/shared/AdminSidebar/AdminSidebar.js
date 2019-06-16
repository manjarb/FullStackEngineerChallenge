import React from 'react'
import styled from "styled-components"

const Sidebar = styled.div`
  padding: 1rem;
`

const AdminSidebar = () => (
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
)

export { AdminSidebar }