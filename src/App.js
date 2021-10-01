import "./App.css";
//import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider direction="rtl">
      <div className="App">
        {/* <Navbar /> */}
        <Home />
      </div>
    </ConfigProvider>
  );
}

export default App;
