import "./App.css";
//import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { ConfigProvider } from "antd";
import Article from "./components/Home/Article/Article";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ConfigProvider direction="rtl">
      <div className="App">
        {/* <Navbar /> */}
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/article" component={Article} />
          </Switch>
        </Router>
      </div>
    </ConfigProvider>
  );
}

export default App;
