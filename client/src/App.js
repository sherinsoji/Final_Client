import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
import Display from "./Components/Display";
import UpdateUser from "./Components/UpdateUser";
import { Container,Row } from "reactstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
const App = () => {
  const email = useSelector((state) => state.users.user.email);
  return (
    <Container>
      <Router>
      <Row>
          {email ? (
            <>
              <Header />
            </>
          ) : null}
        </Row>
      <Row className="main">
           <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/display" element={<Display />}></Route>
            <Route path = "/update/:user_email/:user_name/:user_password"
            element={<UpdateUser />}>
            </Route>
           </Routes>
      </Row>
      <Row>
{email ? (
  <>
    <Footer />
  </>
) : null}
</Row>

      </Router>
    </Container>
  );
};

export default App;
