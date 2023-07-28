import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import HomePage from "./page/home/HomePage";
import AboutPage from "./page/about/AboutPage";
import LoginPage from "./page/login/LoginPage";
import RegisterPage from "./page/register/RegisterPage";
import Layout from "./component/layout/Layout";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
      {/* element={} */}
        <Route path="/" element={<Layout />} >
          <Route path="/"  element={<HomePage />} />
          <Route path="/about"  element={<AboutPage />} />
          <Route path="/login"  element={<LoginPage />} />
          <Route path="/register"  element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
