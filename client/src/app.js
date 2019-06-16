import React from 'react'
import 'bulma/css/bulma.css'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"

import { Admin } from "./container"
import { Employee } from "./container"
import { Header } from "./component"

const App = () => (
  <Router>
    <Header/>
    <Route path="/" exact render={() => (<Redirect to="/admin" />)} />
    <Route path="/admin" component={Admin} />
    <Route path="/Employee" component={Employee} />
  </Router>
)

export default App
