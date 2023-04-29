import { BrowserRouter, Route, Switch } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"
// pages & components
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Navbar from "./components/Navbar"

function App() {
  const { authIsReady } = useAuthContext()

  return (
    <div className="App">
      {/* this thing will only show if authisready true */}
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
