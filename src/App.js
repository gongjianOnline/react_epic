import React from "react"
import {
  Switch,
  Route
} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import History from "./pages/History"
import About from "./pages/About"
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/history' component={History}/>
        <Route path='/about' component={About}/>
      </Switch>

      <Footer></Footer>
    </div>
  );
}

export default App;
