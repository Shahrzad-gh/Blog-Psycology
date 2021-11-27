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
import { blogSelector, BlogInfo } from "./redux/blogSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound";

//to save token in cookies
axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const { isSuccess, username, email, photo, description, role } =
    useSelector(userSelector);

  const siteInfo = useSelector(blogSelector);

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch]);

  useEffect(() => {
    dispatch(authUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(BlogInfo());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar user={isSuccess} username={username} photo={photo} />
        <Switch>
          <Route exact path="/">
            <Home data={siteInfo} />
          </Route>
          <Route path="/post/:postId">
            <Article username={username} role={role} />
          </Route>
          <Route path="/create">
            {isSuccess ? <AddPost username={username} /> : <SignIn />}
          </Route>
          <Route path="/edit">{isSuccess ? <Edit /> : <SignIn />}</Route>
          <Route path="/signin" component={SignIn} />
          <Route path="/settings">
            {isSuccess ? (
              <Settings
                username={username}
                email={email}
                photo={photo}
                description={description}
                role={role}
                siteInfo={siteInfo}
              />
            ) : (
              <SignIn />
            )}
          </Route>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
