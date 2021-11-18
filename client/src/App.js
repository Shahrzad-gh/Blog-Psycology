import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Article from "./components/Article/Article";
import AddPost from "./components/Article/AddPost";
import SignIn from "./components/signIn/SignIn";
import Settings from "./pages/Settings";
import Edit from "./components/Posts/Edit";
import axios from "axios";
import { AuthContextProvider } from "./context/authContext";

//to save token in cookies
axios.defaults.withCredentials = true;

function App() {
  const user = false;
  return (
    <AuthContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/post/:postId" component={Article} />
            <Route path="/create">{user ? <AddPost /> : <SignIn />}</Route>
            <Route path="/edit">{user ? <Edit /> : <SignIn />}</Route>
            <Route path="/signin" component={SignIn} />
            <Route path="/settings">{user ? <Settings /> : <SignIn />}</Route>
          </Switch>
        </Router>
      </div>
    </AuthContextProvider>
  );
}

export default App;
