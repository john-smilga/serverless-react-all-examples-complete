import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import {
  Home,
  Hello,
  BasicAPI,
  Airtable,
  Survey,
  Weather,
  Newsletter,
  Email,
  Stripe,
} from './examples'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/1-hello'>
          <Hello />
        </Route>
        <Route path='/2-basic-api'>
          <BasicAPI />
        </Route>
        <Route path='/3-airtable'>
          <Airtable />
        </Route>
        <Route path='/4-survey'>
          <Survey />
        </Route>
        <Route path='/5-weather'>
          <Weather />
        </Route>
        <Route path='/6-newsletter'>
          <Newsletter />
        </Route>
        <Route path='/7-email'>
          <Email />
        </Route>
        <Route path='/8-stripe'>
          <Stripe />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
