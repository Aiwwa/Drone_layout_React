import Drone from './components/Drone/Drone'
import Menu from './components/Menu/Menu'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Switch>
        <Route path="/" component={Drone} exact />
        <Route path="/menu" component={Menu} />
        <Route />
      </Switch>
    </Router>
  )
}

export default App
