import React from 'react'
import 'bulma/css/bulma.css'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"

import { Admin, AdminReview } from "./container"
import { Employee } from "./container"
import { Header } from "./component"

const App = () => (
  <Router>
    <Header/>
    <Route path="/" exact render={() => (<Redirect to="/admin" />)} />
    <Route path="/admin" exact component={Admin} />
    <Route path="/admin/review" exact component={AdminReview} />
    <Route path="/employee" exact component={Employee} />
  </Router>
)

export default App
