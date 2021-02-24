import React,{Suspense,lazy} from "react"
import {Switch, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Loading from "./components/Loading"

// import Home from "./pages/Home"
// import History from "./pages/History"
// import About from "./pages/About"
const Home = lazy(()=>import('./pages/Home'))
const History = lazy(()=>import('./pages/History'))
const About = lazy(()=>import('./pages/About'))



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/history' component={History}/>
          <Route path='/about' component={About}/>
        </Switch>
      </Suspense>
      <Footer></Footer>
    </div>
  );
}

export default App;
