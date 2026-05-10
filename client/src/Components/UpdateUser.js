import { Container,Button } from "reactstrap";
import { useParams } from "react-router";
import { useState } from "react";
import {updateUser} from "../Features/UserSlice";
import { userSchemaValidation} from "../Validations/UserValidations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import {Row,Col} from "reactstrap";

function UpdateUser()
{
    const {
    register,
    handleSubmit, // Submit the form when this is called
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), //Associate your Yup validation schema using the resolver
  });
const {user_email,user_name,user_password}= useParams();
const [name, setname] = useState(user_name);
const [email, setemail] = useState(user_email);
const [password, setpassword] = useState(user_password);
const [confirmPassword, setconfirmPassword] = useState(user_password);
const dispatch= useDispatch();
const handleUpdate=()=>
{
    const UserData =
    {
        name:name,
        email:email,
        password:password,
    }
dispatch(updateUser(UserData))
alert("Updated")
}
return(
    <Container>
        <Row className="formrow">
        <Col className="columndiv1" md ={6}>
        <form className="div-form" onSubmit={handleSubmit(handleUpdate)}>
        <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name..."
                  {...register("name",{ value: name, onChange: (e) =>
                     setname(e.target.value) })} 
                />
                <p className="error">{errors.name?.message}</p>
        </div>
        <div className="form-group">
          <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email..."
                  {...register("email",{ value: email, onChange: (e) =>
                     setemail(e.target.value) })} />
                  <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-group">
           <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password..."
                  {...register("password",{ value: password, onChange: (e) =>
                     setpassword(e.target.value) })} />
                  <p className="error">{errors.password?.message}</p>
          
        </div>
        <div className="form-group">
          <input
                  type="password"
                  className="form-control"
                  id="confirmpassword"
                  placeholder="Confirm your password..."
                  {...register("confirmPassword",{ value: confirmPassword, onChange: (e) =>
                     setconfirmPassword(e.target.value) })} />  
                  <p className="error">{errors.confirmPassword?.message}</p> 
        </div>
      <div className="form-group">
        <Button color="primary" className="button" >
                Update User
        </Button>
      </div>
        </form>
        </Col>
      </Row>
    </Container>
);
}
export default UpdateUser;