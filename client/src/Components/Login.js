import { Form,FormGroup,Label,Input,Button } from "reactstrap";
import logo from "../Images/logo-t.png";
import {Row, Col} from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Features/UserSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setemail] = useState(); 
  const [password, setpassword] = useState();
  const dispatch= useDispatch();
  const navigate=useNavigate();
  const user = useSelector((state) => state.users.user);
  const isSuccess = useSelector((state) => state.users.isSuccess);
  const isError = useSelector((state) => state.users.isError);
  const handleLogin = () => {
    const userData = {
      email,
      password,
    };
    dispatch(login(userData))
  };
useEffect(() => {
    if (isError) {
      navigate("/login");
    }
    if (isSuccess) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [user, isError, isSuccess]);

  return (
    <div>
    <img src={logo}></img>
  <Form>
  <FormGroup>
    <Row>
    <Label
      for="Email"
    >
    Email
    </Label>
    </Row>
    <Row>
    <Col sm={3}>
      <Input
        id="Email"
        name="email"
        placeholder="Enter Email"
        type="email"
        onChange={(e) => setemail(e.target.value)}
      />
    </Col>
    </Row>
  </FormGroup>
  <FormGroup>
    <Row>
    <Label
      for="Password"
    >
      Password
    </Label>
    </Row>
    <Row>
    <Col sm={3}>
      <Input
        id="Password"
        name="password"
        placeholder="Enter Password"
        type="password"
        onChange={(e) => setpassword(e.target.value)}
      />
    </Col>
    </Row>
  </FormGroup>
  <FormGroup>
    <FormGroup row>
      <Col sm={1}>
      <Button onClick={() => handleLogin()}>
        Login
      </Button>
      </Col>
      <Col sm={2}>
      <p className="smalltext">
      No Account? <Link to="/register">Sign Up now.</Link>
      </p>
      </Col>
    </FormGroup>
  </FormGroup>
  </Form>
    </div>
  );
};

export default Login;
