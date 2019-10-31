import React, { useState } from "react"

import { BrowserRouter as Router, Route } from "react-router-dom"

import "../styles/base.css"
import Form from "./Form"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Form} />
        {/* <Route path="/submitted" component={submitted} /> */}
      </div>
    </Router>
  )
}

export default App
