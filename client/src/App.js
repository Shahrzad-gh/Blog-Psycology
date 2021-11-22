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
import { authUser, clearState, userSelector } from "./redux/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

//to save token in cookies
axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const { isSuccess, username, email, photo } = useSelector(userSelector);

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch]);

  useEffect(() => {
    dispatch(authUser());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Navbar user={isSuccess} username={username} photo={photo} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/post/:postId">
            <Article username={username} />
          </Route>
          <Route path="/create">
            {isSuccess ? <AddPost username={username} /> : <SignIn />}
          </Route>
          <Route path="/edit">{isSuccess ? <Edit /> : <SignIn />}</Route>
          <Route path="/signin" component={SignIn} />
          <Route path="/settings">
            {isSuccess ? (
              <Settings username={username} email={email} photo={photo} />
            ) : (
              <SignIn />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
