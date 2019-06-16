import React from 'react'
import { AdminEmployee, AdminSidebar } from "../../component"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

export class AdminReview extends React.Component {
  render() {
    return (
      <Container>
        <AdminSidebar />
      </Container>
    )
  }
}